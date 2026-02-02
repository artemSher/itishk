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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    let attempts = 0;
    const maxAttempts = 3;
    const yOffset = -100;

    const doScroll = () => {
      const element = document.getElementById("contacts");
      if (!element) return;

      const targetY =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      const currentScroll = window.pageYOffset;
      const isAtTarget = Math.abs(currentScroll - targetY) < 20;

      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });

      attempts++;
      // Костыль Из-за изменения размеров блоков под анимашки
      if (attempts < maxAttempts && !isAtTarget) {
        setTimeout(doScroll, 700);
      }
    };

    doScroll();
  };

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
              Школа программирования
              <span className={styles.highlight}>и робототехники для детей!</span>
            </h1>

            <p className={styles.description}>
              Всего за 60 минут ваш ребенок создаст свой первый работающий
              проект по программированию и робототехнике.
            </p>

            <a
              href="#contacts"
              onClick={handleClick}
              className={styles.button}
              aria-label="Записаться на бесплатный урок"
            >
              Оставить заявку
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
