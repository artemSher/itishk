import styles from "./OnlineClassesSection.module.css";
import Image from "next/image";

export function OnlineClassesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Онлайн занятия</h2>
        <p className={styles.subtitle}>
          В "Айтишкино" мы не просто учим — мы создаём юных инноваторов! Наши
          два ключевых направления идеально дополняют друг друга:
        </p>
      </div>

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
              <h3 className={styles.cardTitle}>Индивидуальный формат.</h3>
              <p className={styles.cardDescription}>
                В "Айтишкино" мы не просто учим — мы создаём юных инноваторов!
                Наши два ключевых направления идеально дополняют друг друга:
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
                Оптимальная продолжительность
              </h3>
              <p className={styles.cardDescription}>
                60 минут — достаточно для объяснения, практики и закрепления без
                перегрузки внимания.
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
              <h3 className={styles.cardTitle}>Гибкое расписание</h3>
              <p className={styles.cardDescription}>
                Время занятий подстраивается под Вас, а не наоборот.
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
              <h3 className={styles.cardTitle}>Обучение из любой точки мира</h3>
              <p className={styles.cardDescription}>
                Нужен только интернет. География и переезды не имеют значения.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
