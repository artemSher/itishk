"use client";

import { useState } from "react";
import { CourseCard } from "@/components/ui/CourseCard/CourseCard";
import styles from "./CoursesSection.module.css";
import { Course } from "./courses.data";

interface Props {
  courses: Course[];
  idPrefix?: string;
}

export const CoursesList = ({ courses, idPrefix = "course" }: Props) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className={styles.coursesGrid}>
      {courses.map((course) => {
        const id = `${idPrefix}-${course.title
          .toLowerCase()
          .replace(/\s+/g, "-")}`;

        return (
          <CourseCard
            key={id}
            id={id}
            {...course}
            isExpanded={expandedId === id}
            onToggleExpand={() => setExpandedId(expandedId === id ? null : id)}
          />
        );
      })}
    </div>
  );
};
