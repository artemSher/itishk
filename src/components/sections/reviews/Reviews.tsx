"use client";

import { useState, useRef } from "react";
import { VideoPopup } from "@/components/ui/VideoPopup/VideoPopup";
import { Play, Video } from "lucide-react";
import styles from "./Reviews.module.css";

const reviews = [
  {
    id: "1",
    name: "Александр",
    age: 14,
    avatar: "А",
    course: "Python для начинающих",
    rating: 5,
    text: "Занятия очень интересные и понятные. Преподаватель объясняет всё доступно, даже сложные темы. Теперь я могу сам писать простые программы!",
    videoUrl: "https://vkvideo.ru/video-232343069_456239036",
  },
  {
    id: "2",
    name: "Мария",
    age: 12,
    avatar: "М",
    course: "Веб-разработка",
    rating: 5,
    text: "Мне очень понравилось создавать свои первые сайты. Преподаватель всегда помогает и поддерживает. Уроки проходят быстро и интересно.",
    videoUrl: "https://vkvideo.ru/clip-232343069_456239032",
  },
  {
    id: "3",
    name: "Дмитрий",
    age: 15,
    avatar: "Д",
    course: "JavaScript Pro",
    rating: 5,
    text: "Отличный курс для тех, кто хочет углубиться в программирование. Много практики, реальные проекты. Рекомендую всем!",
    videoUrl: "https://vkvideo.ru/clip-232343069_456239034",
  },
  {
    id: "4",
    name: "София",
    age: 13,
    avatar: "С",
    course: "Python для начинающих",
    rating: 5,
    text: "Занятия проходят в удобном темпе. Преподаватель всегда готов ответить на вопросы и помочь разобраться. Очень довольна результатом!",
    videoUrl: "https://vkvideo.ru/clip-232343069_456239033",
  },
  {
    id: "5",
    name: "Андрей",
    age: 16,
    avatar: "А",
    course: "Разработка игр",
    rating: 5,
    text: "Всегда мечтал создавать игры, и этот курс помог мне реализовать мечту. Уже создал несколько своих проектов. Спасибо большое!",
    videoUrl: "https://vkvideo.ru/clip-232343069_456239035",
  },
  {
    id: "6",
    name: "Екатерина",
    age: 14,
    avatar: "Е",
    course: "Веб-разработка",
    rating: 5,
    text: "Преподаватель объясняет материал очень понятно и интересно. После каждого урока чувствую, что узнала что-то новое и полезное.",
    videoUrl: "https://vkvideo.ru/clip-232343069_456239035",
  },
];

export function Reviews() {
  const [selectedReview, setSelectedReview] = useState<
    (typeof reviews)[0] | null
  >(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const handleCardClick = (review: (typeof reviews)[0]) => {
    setSelectedReview(review);
  };

  const handleClosePopup = () => {
    setSelectedReview(null);
  };

  const handleArrowClick = (direction: "left" | "right") => {
    if (!gridRef.current) return;

    const scrollAmount = 564; // card width + gap
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

      if (newScroll >= maxScroll) {
        newScroll = 0;
      }
    }

    gridRef.current.scrollTo({
      left: newScroll,
      behavior: "smooth",
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={styles.star}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 1.66667L12.575 6.88334L18.3333 7.72501L14.1667 11.7833L15.15 17.5167L10 14.8083L4.85 17.5167L5.83333 11.7833L1.66667 7.72501L7.425 6.88334L10 1.66667Z"
          fill={index < rating ? "#F5A544" : "none"}
          stroke={index < rating ? "#F5A544" : "#D1D5DC"}
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ));
  };

  return (
    <section className={styles.reviewsSection}>
      <div className={styles.heading}>
        <h2 className={styles.title}>Отзывы</h2>
      </div>

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
          {reviews.map((review) => (
            <div key={review.id} className={styles.reviewCard}>
              <div
                className={styles.mediaContainer}
                onClick={() => handleCardClick(review)}
              >
                <div className={styles.videoBadge}>
                  <Video size={16} />
                  <span>Видео отзыв</span>
                </div>

                <div className={styles.playButton}>
                  <Play size={40} fill="#5DBFA4" stroke="#5DBFA4" />
                </div>
              </div>

              <div className={styles.content}>
                <div className={styles.header}>
                  <div className={styles.avatar}>{review.avatar}</div>

                  <div className={styles.info}>
                    <h3 className={styles.name}>
                      {review.name}, {review.age} лет
                    </h3>
                    <p className={styles.course}>Курс: {review.course}</p>
                  </div>
                </div>

                <div className={styles.rating}>
                  {renderStars(review.rating)}
                </div>

                <p className={styles.text}>{review.text}</p>
              </div>
            </div>
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

      {selectedReview && (
        <VideoPopup
          videoUrl={selectedReview.videoUrl}
          studentName={selectedReview.name}
          isOpen={!!selectedReview}
          onClose={handleClosePopup}
        />
      )}
    </section>
  );
}
