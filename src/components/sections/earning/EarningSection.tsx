"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./EarningSection.module.css";
import { EarningStepCard } from "@/components/ui/EarningStepCard/EarningStepCard";
import dynamic from "next/dynamic";

const LazyLottie = dynamic(
  () => import("@/components/common/LazyLottie/LazyLottie"),
  { ssr: false },
);

type EarningSectionProps = {
  animationPath: string;
};

export const EarningSection: React.FC<EarningSectionProps> = ({
  animationPath,
}) => {
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
      <div className={styles.container}>
        <h2 className={styles.title}>Зарабатывай знаниями!</h2>

        {showAnimation && (
          <div className={styles.animationContainer}>
            <LazyLottie
              animationPath={animationPath}
              className={styles.animation}
            />
          </div>
        )}

        <div className={styles.cardsContainer}>
          <EarningStepCard
            number="01"
            title="Зарабатывай"
            description={
              <>
                За выполнение заданий, активность
                <br />и успехи в учебе.
              </>
            }
          />

          <EarningStepCard
            number="02"
            title="Копи"
            description="Учись планировать бюджет и принимать решения."
          />

          <EarningStepCard
            number="03"
            title="Трать"
            description="В нашем «Айтишопе» на крутые гаджеты, мерч или оплату курсов!"
          />
        </div>
      </div>
    </section>
  );
};
