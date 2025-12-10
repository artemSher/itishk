"use client";

import type React from "react";
import { useState, useRef } from "react";
import styles from "./StudentsSection.module.css";
import { StudentCard } from "@/components/ui/StudentCard/StudentCard";
import { VideoPopup } from "@/components/ui/VideoPopup/VideoPopup";

const students = [
  {
    name: "Рома",
    age: "9",
    course: "Робототехника",
    imageUrl: "/images/students/roma.jpg",
    videoUrl: "https://vk.com/video-232343069_456239018",
  },
  {
    name: "Марвин",
    age: "12",
    course: "Программирование",
    imageUrl: "/images/students/marvin.jpg",
    videoUrl: "https://vk.com/video-232343069_456239017",
  },
  {
    name: "Федя",
    age: "7",
    course: "Робототехника",
    imageUrl: "/images/students/fedya.jpg",
    videoUrl: "https://vk.com/video-232343069_456239019",
  },
  {
    name: "Андрей",
    age: "6",
    course: "Робототехника",
    imageUrl: "/images/students/andrey.jpg",
    videoUrl: "https://vk.com/video-232343069_456239026",
  },
  {
    name: "Семен",
    age: "7",
    course: "Программирование",
    imageUrl: "/images/students/semen.jpg",
    videoUrl: "https://vk.com/video-232343069_456239028",
  },
  {
    name: "Миша",
    age: "7",
    course: "Робототехника",
    imageUrl: "/images/students/misha.jpg",
    videoUrl: "https://vk.com/video-232343069_456239027",
  },
];

export const StudentsSection: React.FC = () => {
  const [selectedStudent, setSelectedStudent] = useState<
    (typeof students)[0] | null
  >(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const handleCardClick = (student: (typeof students)[0]) => {
    setSelectedStudent(student);
  };

  const handleClosePopup = () => {
    setSelectedStudent(null);
  };

  const handleArrowClick = (direction: "left" | "right") => {
    if (!gridRef.current) return;

    const scrollAmount = 320; // card width + gap
    const currentScroll = gridRef.current.scrollLeft;
    const maxScroll = gridRef.current.scrollWidth - gridRef.current.clientWidth;

    let newScroll: number;

    if (direction === "left") {
      newScroll = currentScroll - scrollAmount;
      // If we're at the beginning, cycle to the end
      if (newScroll <= 0) {
        newScroll = maxScroll;
      }
    } else {
      newScroll = currentScroll + scrollAmount;
      // If we're at the end, cycle to the beginning
      if (newScroll >= maxScroll) {
        newScroll = 0;
      }
    }

    gridRef.current.scrollTo({
      left: newScroll,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Проекты учеников</h2>
        <p className={styles.subtitle}>Узнайте о достижениях наших студентов</p>

        <div className={styles.gridContainer}>
          <button
            className={styles.navArrow}
            onClick={() => handleArrowClick("left")}
            aria-label="Прокрутить влево"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className={styles.grid} ref={gridRef}>
            {students.map((student, index) => (
              <StudentCard
                key={index}
                name={student.name}
                age={student.age}
                course={student.course}
                imageUrl={student.imageUrl}
                onClick={() => handleCardClick(student)}
              />
            ))}
          </div>

          <button
            className={styles.navArrow}
            onClick={() => handleArrowClick("right")}
            aria-label="Прокрутить вправо"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {selectedStudent && (
        <VideoPopup
          videoUrl={selectedStudent.videoUrl}
          studentName={selectedStudent.name}
          isOpen={!!selectedStudent}
          onClose={handleClosePopup}
        />
      )}
    </section>
  );
};
