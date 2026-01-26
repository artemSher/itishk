"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./PlatformSection.module.css";
import { AdvItem } from "@/components/ui/AdvItem/AdvItem";
import { AdvantageIcon } from "@/components/ui/AdvantageIcons";
import dynamic from "next/dynamic";

const LazyLottie = dynamic(
  () => import("@/components/common/LazyLottie/LazyLottie"),
  { ssr: false },
);

export const PlatformSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [showAnimation, setShowAnimation] = useState(false);

  const platformFeatures = [
    {
      id: "repeat",
      title: "Повторяйте",
      description:
        "Методические материалы и домашние задания по пройденным темам для закрепления знаний",
      icon: "repeat",
      iconColor: "text-blue-500",
    },
    {
      id: "feedback",
      title: "Обратная связь",
      description: "Персональные комментарии преподавателей к каждой работе",
      icon: "message-circle",
      iconColor: "text-green-500",
    },
    {
      id: "schedule",
      title: "Расписание",
      description: "Ближайшие занятия и школьные мероприятия",
      icon: "calendar",
      iconColor: "text-purple-500",
    },
    {
      id: "progress",
      title: "Прогресс",
      description: "Наглядная статистика по пройденным модулям",
      icon: "bar-chart-2",
      iconColor: "text-orange-500",
    },
  ];

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
    <section ref={sectionRef} className={styles.section} id="platform">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <div className={styles.textContent}>
              <h2 className={styles.title}>Образовательная платформа</h2>
              <p className={styles.subtitle}>
                Платформа Айтишкино — это интерактивная образовательная среда,
                где всё под рукой:
              </p>

              {showAnimation && (
                <div className={styles.animationContainer}>
                  <LazyLottie
                    animationPath="PlatformSection.json"
                    className={styles.animation}
                  />
                </div>
              )}
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.grid}>
              {platformFeatures.map((feature) => (
                <div key={feature.id} className={styles.gridRow}>
                  <AdvItem
                    text={feature.title}
                    text1={feature.description}
                    icon={
                      <AdvantageIcon
                        type={feature.icon}
                        className={`w-6 h-6 ${feature.iconColor}`}
                      />
                    }
                    iconColor={feature.iconColor}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
