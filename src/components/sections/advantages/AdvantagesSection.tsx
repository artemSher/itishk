import React from "react";
import styles from "./AdvantagesSection.module.css";
import { AdvantageCard } from "@/components/ui/AdvantageCard/AdvantageCard";
import { AdvantageIcon } from "@/components/ui/AdvantageIcons";

const advantages = [
  {
    id: "teamwork",
    title: "Командная работа",
    description:
      "Развиваем soft-скиллы, учимся договариваться и делегировать задачи - как в настоящей IT компании!",
    icon: "teamwork",
  },
  {
    id: "portfolio",
    title: "Проекты в портфолио",
    description:
      "После каждой темы у ребёнка готовый проект: сайты, игры, приложения, роботы. Родители видят прогресс, а ребёнок видит результаты своего труда.",
    icon: "portfolio",
  },
  {
    id: "practical",
    title: "Мы лицензированная школа",
    description:
      "Каждый курс создан по уникальной авторской методике и соответствует российским образовательным стандартам.",
    icon: "practical",
  },
  {
    id: "adaptive",
    title: "Адаптивность программы",
    description:
      "Каждый ребёнок учится у нас с комфортом и интересом, независимо от уровня подготовки и индивидуальных особенностей.",
    icon: "adaptive",
  },
  {
    id: "finance",
    title: "Финансовая грамотность",
    description:
      "Дети получают внутреннюю валюту за успехи в обучении, осваивают планирование бюджета и делают первые осознанные покупки в «Айтишопе».",
    icon: "finance",
  },
  {
    id: "gamification",
    title: "Геймификация",
    description:
      "Успехи ученика влияют на его рейтинг в школе, что делает образовательный процесс интереснее и мотивирует ребенка, а также формирует стремление к лидерству.",
    icon: "gamification",
  },
];

export const AdvantagesSection = () => {
  return (
    <section className={styles.section} id="advantages">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Наши преимущества</h2>
          <p className={styles.subtitle}>
            Компьютерная школа, в которой каждый ребенок может раскрыть свой потенциал и полюбить обучение
          </p>
        </div>

        <div className={styles.grid}>
          {advantages.map((advantage) => (
            <AdvantageCard
              key={advantage.id}
              title={advantage.title}
              description={advantage.description}
              icon={
                <AdvantageIcon
                  type={advantage.icon}
                  className="w-10 h-10 text-primary"
                />
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};
