"use client";

import Image from "next/image";
import styles from "./school.module.css";

type SchoolSectionProps = {
  title: string[];
  imageSrc: string;
  imageAlt?: string;
};
const handleClick = () => {
  const form = document.getElementById("application-form");
  if (form) {
    form.scrollIntoView({ behavior: "smooth" });
  }
};

export function SchoolSection({
  title,
  imageSrc,
  imageAlt = "Изображение школы",
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
            Все программы рассчитаны на определенный возраст, группы
            сформированы по этому принципу.
          </p>
        </div>

        <button onClick={handleClick} className={styles.button}>
          Записаться в школу
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
