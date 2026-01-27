"use client";

import { useMemo, useState } from "react";
import styles from "./CoursesSection.module.css";
import { CoursesList } from "./CoursesList";
import { CoursesCTA } from "./CoursesCTA";
import { COURSES, CourseCategory, CourseFormat } from "./courses.data";

interface CoursesSectionProps {
  withFormatToggle?: boolean;
  format?: CourseFormat;
  category?: CourseCategory;
  title?: string;
  twoColumns?: boolean;
}

export const CoursesSection = ({
  withFormatToggle = false,
  format,
  category,
  title = "Курсы",
  twoColumns = false,
}: CoursesSectionProps) => {
  const [activeFormat, setActiveFormat] = useState<CourseFormat>(
    format ?? "offline",
  );

  const effectiveFormat = withFormatToggle ? activeFormat : format;

  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      if (effectiveFormat && course.format !== effectiveFormat) return false;
      if (category && course.category !== category) return false;
      return true;
    });
  }, [effectiveFormat, category]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>

        {withFormatToggle && (
          <div className={styles.tabsContainer}>
            <button
              className={`${styles.tab} ${
                activeFormat === "offline"
                  ? styles.activeTab
                  : styles.inactiveTab
              }`}
              onClick={() => setActiveFormat("offline")}
            >
              Очно
            </button>
            <button
              className={`${styles.tab} ${
                activeFormat === "online"
                  ? styles.activeTab
                  : styles.inactiveTab
              }`}
              onClick={() => setActiveFormat("online")}
            >
              Онлайн
            </button>
          </div>
        )}

        <CoursesList
          courses={filteredCourses}
          idPrefix={`${category ?? "all"}-${effectiveFormat ?? "all"}`}
          twoColumns={twoColumns}
        />
      </div>

      <CoursesCTA />
    </section>
  );
};
