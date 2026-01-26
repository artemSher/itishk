"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import styles from "./HeroSection.module.css";

const HeroAnimation = dynamic(
  () => import("@/components/common/LazyLottie/LazyLottie"),
  { ssr: false },
);

export const HeroSection = () => {
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
      <div className={styles.background}>
        <div className={styles.backgroundLeft} />
        <div className={styles.backgroundRight} />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div
            ref={animationRef}
            className={styles.animationContainer}
            style={{
              minHeight: "200px",
              contain: "layout style paint",
            }}
          >
            {showAnimation && (
              <HeroAnimation
                animationPath="Hero.json"
                className={styles.animation}
              />
            )}
          </div>

          <div className={styles.textContent}>
            <h1 className={styles.title}>
              Научись говорить
              <span className={styles.highlight}>с гаджетами за час!</span>
            </h1>

            <p className={styles.description}>
              Всего за 60 минут ваш ребенок создаст свой первый работающий
              проект по программированию и робототехнике.
            </p>

            <a
              href="#application-form"
              className={styles.button}
              aria-label="Записаться на бесплатный урок"
            >
              Записаться на бесплатный урок
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
