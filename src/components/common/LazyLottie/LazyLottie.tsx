"use client";

import { useEffect, useState, useRef, memo } from "react";
import dynamic from "next/dynamic";

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
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer для определения видимости
  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "100px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  // Загрузка анимации через fetch из public папки
  useEffect(() => {
    if (!isVisible || animationData) return;

    // Проверяем кэш
    if (animationCache.has(animationPath)) {
      setAnimationData(animationCache.get(animationPath)!);
      return;
    }

    const loadAnimation = async () => {
      try {
        const response = await fetch(`/animations/${animationPath}`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        animationCache.set(animationPath, data);
        setAnimationData(data);
      } catch (error) {
        console.error(`Failed to load animation: ${animationPath}`, error);
      }
    };

    loadAnimation();
  }, [isVisible, animationPath, animationData]);

  return (
    <div ref={containerRef} className={className} style={style}>
      {animationData && (
        <Lottie
          animationData={animationData}
          loop={loop}
          autoplay={autoplay}
          style={{ width: "100%", height: "100%" }}
        />
      )}
    </div>
  );
});

export default LazyLottie;
