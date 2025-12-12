"use client";

import type React from "react";

import { useEffect, useState, useRef, memo, useCallback } from "react";
import dynamic from "next/dynamic";
import type { LottieRefCurrentProps } from "lottie-react";

// Динамический импорт Lottie только когда нужен
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => null,
});

// Кэш для загруженных анимаций
const animationCache = new Map<string, object>();

const activeAnimations = new Set<string>();
const MAX_MOBILE_ANIMATIONS = 2;

const isMobileDevice = () => {
  if (typeof window === "undefined") return false;
  return (
    window.innerWidth <= 768 ||
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  );
};

interface LazyLottieProps {
  animationPath: string;
  className?: string;
  style?: React.CSSProperties;
  loop?: boolean;
  autoplay?: boolean;
  threshold?: number;
}

type LottieRenderer = "svg" | "canvas" | "html";

const LazyLottie = memo(function LazyLottie({
  animationPath,
  className,
  style,
  loop = true,
  autoplay = true,
  threshold = 0.1,
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
  const containerRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  const isMountedRef = useRef(true);
  const animationIdRef = useRef(`${animationPath}-${Date.now()}`);

  useEffect(() => {
    setIsMobile(isMobileDevice());

    const handleResize = () => {
      setIsMobile(isMobileDevice());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
      activeAnimations.delete(animationIdRef.current);
    };
  }, []);

  const destroyAnimation = useCallback(() => {
    if (lottieRef.current) {
      try {
        lottieRef.current.stop();
        lottieRef.current.destroy();
      } catch (error) {
        // Игнорируем ошибки при уничтожении
      }
      lottieRef.current = null;
    }
    activeAnimations.delete(animationIdRef.current);
  }, []);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!isMountedRef.current) return;

        if (entry.isIntersecting) {
          setIsVisible(true);

          if (isMobile && activeAnimations.size >= MAX_MOBILE_ANIMATIONS) {
            setShouldRender(false);
          } else {
            activeAnimations.add(animationIdRef.current);
            setShouldRender(true);
          }
        } else {
          if (isMobile) {
            destroyAnimation();
            setShouldRender(false);
          }
        }
      },
      {
        threshold,
        rootMargin: isMobile ? "50px" : "100px",
      }
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      destroyAnimation();
    };
  }, [threshold, isMobile, destroyAnimation]);

  useEffect(() => {
    if (!isVisible || animationData || hasError) return;

    if (animationCache.has(animationPath)) {
      const cached = animationCache.get(animationPath)!;
      if (isMountedRef.current) {
        setAnimationData(cached);
        if ((cached as any).w && (cached as any).h) {
          setAnimationSize({ w: (cached as any).w, h: (cached as any).h });
        }
      }
      return;
    }

    const loadAnimation = async () => {
      try {
        const response = await fetch(`/animations/${animationPath}`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();

        if (!data || typeof data !== "object" || !data.v) {
          throw new Error("Invalid animation data");
        }

        animationCache.set(animationPath, data);
        if (isMountedRef.current) {
          setAnimationData(data);
          if (data.w && data.h) {
            setAnimationSize({ w: data.w, h: data.h });
          }
        }
      } catch (error) {
        console.error(`Failed to load animation: ${animationPath}`, error);
        if (isMountedRef.current) {
          setHasError(true);
        }
      }
    };

    loadAnimation();
  }, [isVisible, animationPath, animationData, hasError]);

  useEffect(() => {
    return () => {
      destroyAnimation();
    };
  }, [destroyAnimation]);

  if (hasError) {
    return <div ref={containerRef} className={className} style={style} />;
  }

  const aspectRatio = animationSize
    ? animationSize.w / animationSize.h
    : undefined;

  return (
    <div ref={containerRef} className={className} style={style}>
      {animationData && shouldRender && (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
              aspectRatio: aspectRatio ? `${aspectRatio}` : "auto",
            }}
            renderer={(isMobile ? "canvas" : "svg") as LottieRenderer}
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
