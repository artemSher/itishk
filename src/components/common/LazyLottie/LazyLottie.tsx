"use client";

import React, { useEffect, useState, useRef, memo, useCallback } from "react";
import dynamic from "next/dynamic";
import type { LottieRefCurrentProps } from "lottie-react";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => null,
});

// Shared caches and global controls
const animationCache = new Map<string, object>();
const activeAnimations = new Set<string>();
const waitingQueue: Array<() => void> = []; // FIFO queue of render callbacks
let globalIdCounter = 0;

export const MAX_MOBILE_ANIMATIONS = 2; // keep this adjustable if you need

// Helper: detect mobile (fast, doesn't allocate a lot)
const isMobileDevice = () => {
  if (typeof window === "undefined") return false;
  return (
    window.innerWidth <= 768 ||
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  );
};

// --- IntersectionObserver manager: reuse observers to reduce memory pressure ---
type CallbackEntry = {
  element: Element;
  cb: (entry: IntersectionObserverEntry) => void;
};
const observerStore = new Map<
  string,
  { observer: IntersectionObserver; entries: Set<CallbackEntry> }
>();

function getObserver(rootMargin: string, threshold: number) {
  const key = `${rootMargin}|${threshold}`;
  if (observerStore.has(key)) return observerStore.get(key)!;

  const entries = new Set<CallbackEntry>();
  const observer = new IntersectionObserver(
    (ioEntries) => {
      for (const e of ioEntries) {
        // find matching entries and call their callbacks
        for (const entry of entries) {
          if (entry.element === e.target) {
            entry.cb(e);
          }
        }
      }
    },
    { rootMargin, threshold },
  );

  const store = { observer, entries };
  observerStore.set(key, store);
  return store;
}

function observeWithManager(
  el: Element,
  rootMargin: string,
  threshold: number,
  cb: (entry: IntersectionObserverEntry) => void,
) {
  const store = getObserver(rootMargin, threshold);
  const entry = { element: el, cb } as CallbackEntry;
  store.entries.add(entry);
  store.observer.observe(el);
  return () => {
    try {
      store.observer.unobserve(el);
    } catch (e) {
      // ignore
    }
    store.entries.delete(entry);
    // optionally clean up observer when no entries remain
    if (store.entries.size === 0) {
      try {
        store.observer.disconnect();
      } catch (e) {}
      observerStore.forEach((v, k) => {
        if (v === store) observerStore.delete(k);
      });
    }
  };
}

interface LazyLottieProps {
  animationPath: string;
  className?: string;
  style?: React.CSSProperties;
  loop?: boolean;
  autoplay?: boolean;
  threshold?: number;
  posterPath?: string; // optional static fallback image
  maxMobileAnimations?: number; // override default
}

const LazyLottie = memo(function LazyLottie({
  animationPath,
  className,
  style,
  loop = true,
  autoplay = true,
  threshold = 0.1,
  posterPath,
  maxMobileAnimations = MAX_MOBILE_ANIMATIONS,
}: LazyLottieProps) {
  const [animationData, setAnimationData] = useState<object | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [animationSize, setAnimationSize] = useState<{
    w: number;
    h: number;
  } | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  const isMountedRef = useRef(true);
  const animationIdRef = useRef<string>(
    `lottie-${++globalIdCounter}-${animationPath}`,
  );
  const fetchControllerRef = useRef<AbortController | null>(null);
  const resizeTimeoutRef = useRef<number | null>(null);

  // keep a stable destroy function
  const destroyAnimation = useCallback(() => {
    if (lottieRef.current) {
      try {
        // stop + try destroy if available
        lottieRef.current.stop && lottieRef.current.stop();
        // lottie-react internals may not expose destroy; guard it
        (lottieRef.current as any).destroy &&
          (lottieRef.current as any).destroy();
      } catch (error) {
        // ignore
      }
      lottieRef.current = null;
    }
    // free from active set
    activeAnimations.delete(animationIdRef.current);

    // if there is someone waiting in queue, start the next one
    const next = waitingQueue.shift();
    if (next) {
      // schedule to run in next tick so cleanup has completed
      setTimeout(() => {
        try {
          next();
        } catch (e) {
          console.warn(e);
        }
      }, 0);
    }
  }, []);

  // mounted flag
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
      // release active when unmount
      activeAnimations.delete(animationIdRef.current);
      // abort any outstanding fetch
      if (fetchControllerRef.current) fetchControllerRef.current.abort();
    };
  }, []);

  // debounce resize to avoid many updates on orientation change
  useEffect(() => {
    const update = () => setIsMobile(isMobileDevice());
    update();
    const handler = () => {
      if (resizeTimeoutRef.current)
        window.clearTimeout(resizeTimeoutRef.current);
      resizeTimeoutRef.current = window.setTimeout(() => update(), 150);
    };
    window.addEventListener("resize", handler, { passive: true });
    return () => window.removeEventListener("resize", handler);
  }, []);

  // intersection observer using manager
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const rootMargin = isMobile ? "60px" : "120px";
    const unregister = observeWithManager(
      el,
      rootMargin,
      threshold,
      (entry) => {
        if (!isMountedRef.current) return;
        if (entry.isIntersecting) {
          setIsVisible(true);
          // If mobile and limit reached, queue the render
          if (isMobile && activeAnimations.size >= maxMobileAnimations) {
            setShouldRender(false);
            // push into waiting queue a callback that will cause this instance to render
            const start = () => {
              if (!isMountedRef.current) return;
              // double-check size (race-safe-ish)
              if (activeAnimations.size < maxMobileAnimations) {
                activeAnimations.add(animationIdRef.current);
                setShouldRender(true);
              } else {
                // if still can't render, requeue at the end
                waitingQueue.push(start);
              }
            };
            waitingQueue.push(start);
          } else {
            activeAnimations.add(animationIdRef.current);
            setShouldRender(true);
          }
        } else {
          setIsVisible(false);
          if (isMobile) {
            // aggressively free resources on mobile when scrolled away
            destroyAnimation();
            setShouldRender(false);
          }
        }
      },
    );

    return () => {
      unregister();
      // don't aggressively destroy here; destroyAnimation will run on unmount effect
    };
  }, [threshold, isMobile, maxMobileAnimations, destroyAnimation]);

  // load small metadata (cached) - non-blocking
  useEffect(() => {
    if (animationCache.has(animationPath)) {
      const cached = animationCache.get(animationPath)! as any;
      if (cached && cached.w && cached.h)
        setAnimationSize({ w: cached.w, h: cached.h });
      return;
    }

    // we only need metadata fast; use an abort controller
    const controller = new AbortController();
    fetchControllerRef.current = controller;

    const loadMetadata = async () => {
      try {
        const res = await fetch(`/animations/${animationPath}`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (!data || typeof data !== "object" || !data.v)
          throw new Error("Invalid animation data");
        animationCache.set(animationPath, data);
        if (isMountedRef.current && data.w && data.h)
          setAnimationSize({ w: data.w, h: data.h });
      } catch (err) {
        // don't spam the console on abort
        if ((err as any)?.name !== "AbortError")
          console.error(`Failed to load metadata: ${animationPath}`, err);
      }
    };

    // schedule metadata load during idle time if available to avoid blocking main work
    if (typeof (window as any).requestIdleCallback === "function") {
      (window as any).requestIdleCallback(() => loadMetadata());
    } else {
      setTimeout(() => void loadMetadata(), 100);
    }

    return () => controller.abort();
  }, [animationPath]);

  // load full animation only when visible & allowed
  useEffect(() => {
    if (!isVisible || animationData || hasError) return;

    // if already cached we can reuse
    if (animationCache.has(animationPath)) {
      const cached = animationCache.get(animationPath)!;
      if (isMountedRef.current) setAnimationData(cached);
      return;
    }

    const controller = new AbortController();
    fetchControllerRef.current = controller;

    const load = async () => {
      try {
        // on mobile we defer heavy loads to idle time if possible
        const doFetch = async () => {
          const res = await fetch(`/animations/${animationPath}`, {
            signal: controller.signal,
          });
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          const data = await res.json();
          if (!data || typeof data !== "object" || !data.v)
            throw new Error("Invalid animation data");
          animationCache.set(animationPath, data);
          if (isMountedRef.current) setAnimationData(data);
        };

        if (
          isMobile &&
          typeof (window as any).requestIdleCallback === "function"
        ) {
          (window as any).requestIdleCallback(() => void doFetch());
        } else {
          await doFetch();
        }
      } catch (err) {
        if ((err as any)?.name !== "AbortError") {
          console.error(`Failed to load animation: ${animationPath}`, err);
          if (isMountedRef.current) setHasError(true);
        }
      }
    };

    load();

    return () => controller.abort();
  }, [isVisible, animationPath, animationData, hasError, isMobile]);

  // cleanup when component unmounts or dependencies change
  useEffect(() => {
    return () => {
      destroyAnimation();
    };
  }, [destroyAnimation]);

  if (hasError) {
    // keep the container so layout doesn't jump
    return <div ref={containerRef} className={className} style={style} />;
  }

  const aspectRatio = animationSize ? animationSize.w / animationSize.h : 1;

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        ...style,
        aspectRatio: `${aspectRatio}`,
        minHeight: "200px",
        position: "relative",
      }}
    >
      {/* If we have a poster and we are NOT rendering the animation, show lightweight image */}
      {!shouldRender && posterPath && (
        <img
          src={posterPath}
          alt="animation poster"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            position: "absolute",
            inset: 0,
          }}
        />
      )}

      {animationData && shouldRender && (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <Lottie
            lottieRef={lottieRef}
            animationData={animationData}
            loop={loop}
            autoplay={autoplay}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "100%",
              aspectRatio: `${aspectRatio}`,
            }}
            renderer={(isMobile ? "canvas" : "svg") as any}
            rendererSettings={{
              preserveAspectRatio: "xMidYMid meet",
              progressiveLoad: !isMobile,
              hideOnTransparent: true,
              ...(isMobile && {
                clearCanvas: true,
                devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
              }),
            }}
            onComplete={() => {
              if (isMobile && !loop) {
                destroyAnimation();
                setShouldRender(false);
              }
            }}
            onError={(error) => {
              console.error("Lottie animation error:", error);
              if (isMountedRef.current) {
                destroyAnimation();
                setHasError(true);
              }
            }}
          />
        </div>
      )}
    </div>
  );
});

export default LazyLottie;
