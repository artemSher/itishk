import styles from "./OnlineClassesSection.module.css";
import Image from "next/image";

type OnlineClassesSectionProps = {
  title?: string;
  subtitle?: string;
};

export function OnlineClassesSection({
  title,
  subtitle,
}: OnlineClassesSectionProps) {
  return (
    <section className={styles.section}>
      {(title || subtitle) && (
        <div className={styles.header}>
          {title && <h2 className={styles.title}>{title}</h2>}
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      )}

      <div className={styles.cardsContainer}>
        <div className={styles.cardsRow}>
          <div className={`${styles.card} ${styles.cardTeal}`}>
            <div className={styles.cardImage}>
              <Image
                src="/images/onlineClasses/5.png"
                alt="Illustration"
                width={199}
                height={199}
                className={styles.illustration}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Группы по возрасту</h3>
              <p className={styles.cardDescription}>
                Каждая программа разработана с учётом возраста и уровня подготовки детей, поэтому группы формируются так, чтобы всем было комфортно и интересно учиться в своём темпе.
              </p>
            </div>
          </div>

          <div className={`${styles.card} ${styles.cardWhite}`}>
            <div className={styles.cardImage}>
              <Image
                src="/images/onlineClasses/3.png"
                alt="Illustration"
                width={199}
                height={199}
                className={styles.illustration}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                Оборудованные классы
              </h3>
              <p className={styles.cardDescription}>
                Для занятий не нужно приносить своё оборудование или материалы — всё необходимое мы предоставляем на уроках.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.cardsRow}>
          <div className={`${styles.card} ${styles.cardWhite}`}>
            <div className={styles.cardImage}>
              <Image
                src="/images/onlineClasses/3.png"
                alt="Illustration"
                width={199}
                height={199}
                className={styles.illustration}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Финансовая грамотность</h3>
              <p className={styles.cardDescription}>
                Дети получают внутреннюю валюту за успехи в обучении, осваивают планирование бюджета и делают первые осознанные покупки в «Айтишопе».
              </p>
            </div>
          </div>

          <div className={`${styles.card} ${styles.cardTeal}`}>
            <div className={styles.cardImage}>
              <Image
                src="/images/onlineClasses/5.png"
                alt="Illustration"
                width={199}
                height={199}
                className={styles.illustration}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Геймификация</h3>
              <p className={styles.cardDescription}>
                Успехи ученика влияют на его рейтинг в школе, что делает обучение программированию интереснее и мотивирует ребенка, а также формирует стремление к лидерству.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
