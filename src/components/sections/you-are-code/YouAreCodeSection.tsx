"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./YouAreCodeSection.module.css";
import dynamic from "next/dynamic";

const LazyLottie = dynamic(
  () => import("@/components/common/LazyLottie/LazyLottie"),
  { ssr: false },
);

export const YouAreCodeSection = () => {
  const animationRef = useRef<HTMLDivElement | null>(null);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (!animationRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowAnimation(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px",
        threshold: 0,
      },
    );

    observer.observe(animationRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div ref={animationRef} className={styles.animationContainer}>
            {showAnimation && (
              <LazyLottie
                animationPath="secondblock.json"
                className={styles.animation}
              />
            )}
          </div>

          <div className={styles.textContent}>
            <h2 className={styles.title}>
              Готовьтесь
              <span className={styles.highlight}>к настоящему и будущему!</span>
            </h2>

            <p className={styles.description}>
              В Айтишкино мы развиваем ребенка как личность, прокачивая не
              только технические навыки, но и soft скиллы. Дети с нами учатся
              работать в команде и не боятся ошибок, чтобы быть востребованными
              абсолютно в любой сфере!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
