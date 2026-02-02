"use client";

import Image from "next/image";
import styles from "./school.module.css";

type SchoolSectionProps = {
  title: string[];
  imageSrc: string;
  imageAlt?: string;
  subtitle?: string;
};
const handleClick = () => {
  let attempts = 0;
  const maxAttempts = 3;
  const yOffset = -100;

  const doScroll = () => {
    const form = document.getElementById("contacts");
    if (!form) return;

    const targetY =
      form.getBoundingClientRect().top + window.pageYOffset + yOffset;
    const currentScroll = window.pageYOffset;
    const isAtTarget = Math.abs(currentScroll - targetY) < 20;

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });

    attempts++;
    // Костыль Из-за изменения размеров блоков под анимашки
    if (attempts < maxAttempts && !isAtTarget) {
      setTimeout(doScroll, 500);
    }
  };

  doScroll();
};

export function SchoolSection({
  title,
  imageSrc,
  imageAlt = "Изображение школы",
  subtitle,
}: SchoolSectionProps) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <h1 className={styles.title}>
            {title.map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </h1>

          <p className={styles.subtitle}>
            {subtitle || "Все программы рассчитаны на определенный возраст, группы сформированы по этому принципу."}
          </p>
        </div>

        <button onClick={handleClick} className={styles.button}>
          Записаться на бесплатный урок
        </button>
      </div>

      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={styles.image}
          priority
        />
      </div>
    </section>
  );
}
