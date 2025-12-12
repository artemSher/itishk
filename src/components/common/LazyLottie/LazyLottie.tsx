"use client";

import type React from "react";

import { useEffect, useState, useRef, memo } from "react";
import dynamic from "next/dynamic";
import type { LottieRefCurrentProps } from "lottie-react";

// Динамический импорт Lottie только когда нужен
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => null,
});

// Кэш для загруженных анимаций
const animationCache = new Map<string, object>();

interface LazyLottieProps {
  animationPath: string;
  className?: string;
  style?: React.CSSProperties;
  loop?: boolean;
  autoplay?: boolean;
  threshold?: number;
}

/**
 * Ленивая загрузка Lottie анимаций:
 * 1. Загружает JSON только когда элемент виден в viewport
 * 2. Использует Intersection Observer для отслеживания видимости
 * 3. Кэширует загруженные анимации
 */
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
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  // Intersection Observer для определения видимости
  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && isMountedRef.current) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "100px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  useEffect(() => {
    if (!isVisible || animationData || hasError) return;

    // Проверяем кэш
    if (animationCache.has(animationPath)) {
      if (isMountedRef.current) {
        setAnimationData(animationCache.get(animationPath)!);
      }
      return;
    }

    const loadAnimation = async () => {
      try {
        const response = await fetch(`/animations/${animationPath}`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();

        // Validate animation data
        if (!data || typeof data !== "object" || !data.v) {
          throw new Error("Invalid animation data");
        }

        animationCache.set(animationPath, data);
        if (isMountedRef.current) {
          setAnimationData(data);
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
      if (lottieRef.current) {
        try {
          lottieRef.current.destroy();
        } catch (error) {
          console.error("Error destroying lottie animation:", error);
        }
      }
    };
  }, []);

  if (hasError) {
    return <div ref={containerRef} className={className} style={style} />;
  }

  return (
    <div ref={containerRef} className={className} style={style}>
      {animationData && (
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={loop}
          autoplay={autoplay}
          style={{ width: "100%", height: "100%" }}
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice",
            progressiveLoad: true,
            hideOnTransparent: true,
          }}
          onError={(error) => {
            console.error("Lottie animation error:", error);
            if (isMountedRef.current) {
              setHasError(true);
            }
          }}
        />
      )}
    </div>
  );
});

export default LazyLottie;
