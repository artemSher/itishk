"use client";

import { useState } from "react";
import styles from "./AboutSection.module.css";
import { VideoPopup } from "@/components/ui/VideoPopup/VideoPopup";
import Image from "next/image";
import about from "@/../public/images/about/about.png";

export default function AboutSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.textContainer}>
            <h2 className={styles.heading}>О нас</h2>
            <p className={styles.paragraph}>
              В Айтишкино мы развиваем ребенка как личность, прокачивая не
              только технические навыки, но и soft скиллы. Дети с нами учатся
              работать в команде и не боятся ошибок, чтобы быть востребованными
              абсолютно в любой сфере!
            </p>
          </div>
          {/* для видоса  ЕЩЕ РАСКОММЕНТИРОВАТЬ videoCard в css*/}
          <div className={styles.videoCard}>
            <Image
              alt={""}
              src={about}
              width={320}
              className={styles.logoImage}
            />
            {/* <div className={styles.decorative4} />
            <div className={styles.decorative5} />
            <div className={styles.decorative1} />
            <div className={styles.decorative2} />
            <div className={styles.decorative3} />

   
            <div className={styles.videoContent}>
              <button
                className={styles.playButton}
                aria-label="Play video"
                onClick={() => setIsVideoOpen(true)}
              >
                <div className={styles.playIcon}>
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>

              <div className={styles.textBlock}>
                <span className={styles.videoLabel}>Видео</span>
                <span className={styles.videoTitle}>О школе</span>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Video Popup */}
      <VideoPopup
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        studentName="Школа Пиксель"
      />
    </>
  );
}
