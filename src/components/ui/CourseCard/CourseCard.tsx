"use client";

import React from "react";
import styles from "./CourseCard.module.css";

interface CourseCardProps {
  id: string;
  title: string;
  age: string;
  modules: number;
  icon: React.ReactNode;
  modulesList: string[];
  outcomes: string[];
  isExpanded: boolean;
  onToggleExpand: (id: string) => void;
  category?: "programming" | "robotics";
}

export const CourseCard: React.FC<CourseCardProps> = React.memo(
  ({
    id,
    title,
    age,
    modules,
    icon,
    modulesList,
    outcomes,
    isExpanded,
    onToggleExpand,
    category,
  }) => {
    const handleToggle = React.useCallback(() => {
      onToggleExpand(id);
    }, [id, onToggleExpand]);

    return (
      <div
        className={`${styles.courseCard} ${isExpanded ? styles.expanded : ""}`}
      >
        {category && (
          <div className={styles.categoryTag}>
            {category === "robotics" ? "робототехника" : "программирование"}
          </div>
        )}

        <div className={styles.cardContent}>
          <div className={styles.iconContainer}>
            <svg
              width="39"
              height="56"
              viewBox="0 0 39 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M13.0417 33.8061V52.6522C13.0417 55.0917 16.1512 56.1216 17.6075 54.1645L38.0363 26.7086C39.6725 24.5095 38.103 21.3854 35.362 21.3854H25.657L13.0417 33.8061Z"
                fill="#00B18F"
              />
              <path
                d="M25.6597 2.53823C25.6597 0.0987582 22.5501 -0.931155 21.0939 1.02597L0.665085 28.4819C-0.97112 30.6809 0.598386 33.805 3.33936 33.805H13.0444L25.6597 21.3843V2.53823Z"
                fill="#00B18F"
              />
            </svg>
          </div>

          <h3 className={styles.courseTitle}>{title}</h3>

          <div className={styles.infoRow}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Возраст:</span>
              <span className={styles.infoValue}>{age}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Модулей:</span>
              <span className={styles.infoValue}>{modules}</span>
            </div>
          </div>

          <button
            className={styles.detailsButton}
            onClick={handleToggle}
            aria-expanded={isExpanded}
            aria-controls={`course-${id}-content`}
          >
            {isExpanded ? "Свернуть" : "Подробнее"}
          </button>
        </div>

        <div
          id={`course-${id}-content`}
          className={`${styles.expandedContent} ${
            isExpanded ? styles.visible : ""
          }`}
          aria-hidden={!isExpanded}
          role="region"
        >
          <div className={styles.modulesHeader}>Основные модули:</div>
          <ul className={styles.modulesList}>
            {modulesList.map((module, index) => (
              <li key={index} className={styles.moduleItem}>
                {module}
              </li>
            ))}
          </ul>
          <div className={styles.outcomesHeader}>Итог</div>
          <ul className={styles.outcomesList}>
            {outcomes.map((outcome, index) => (
              <li key={index} className={styles.outcomeItem}>
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
);

CourseCard.displayName = "CourseCard";
