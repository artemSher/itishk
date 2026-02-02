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
              Экранное время с пользой для ребенка
            </h1>
            <p className={styles.description}>
              Вместо пассивных игр и бесконечного просмотра контента ребёнок учится использовать гаджеты как инструмент. Он не просто проводит время за экраном, а создаёт игры, приложения, сайты и реальные устройства, видит результат своих действий и понимает, как технологии работают в повседневной жизни.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
