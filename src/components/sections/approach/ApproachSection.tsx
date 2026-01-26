"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./ApproachSection.module.css";
import dynamic from "next/dynamic";

const LazyLottie = dynamic(
  () => import("@/components/common/LazyLottie/LazyLottie"),
  { ssr: false },
);

export const ApproachSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowAnimation(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.background}>
        <div className={styles.backgroundLeft} />
        <div className={styles.backgroundRight} />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {showAnimation && (
            <div className={styles.animationContainer}>
              <LazyLottie
                animationPath="AdvantagesSection.json"
                className={styles.animation}
              />
            </div>
          )}

          <div className={styles.textContent}>
            <h1 className={styles.title}>
              Уникальный подход к объяснению материала
            </h1>
            <p className={styles.description}>
              «Айтишкино» — это не просто курсы, а образовательная экосистема,
              где каждый элемент продуман для максимального вовлечения и
              практической пользы. Вот что делает наш подход уникальным:
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
