import styles from "./FeaturesSection.module.css";
import Image from "next/image";
import idea from "@/../public/images/features/idea.png";
import like from "@/../public/images/features/like.png";
export default function FeaturesSection() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <Image
            alt={""}
            src={idea}
            width={200}
            height={40}
            className={styles.logoImage}
          />
        </div>
        <div className={styles.cardContent}>
          <h3 className={styles.heading}>Проекты в портфолио</h3>
          <p className={styles.paragraph}>
            После каждой темы у ребёнка готовый проект: сайты, игры, приложения, роботы. Родители видят прогресс, а ребёнок видит результаты своего труда.
          </p>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <Image
            alt={""}
            src={like}
            width={200}
            height={40}
            className={styles.logoImage}
          />
        </div>
        <div className={styles.cardContent}>
          <h3 className={styles.heading}>Мы — лицензированная школа</h3>
          <p className={styles.paragraph}>
            Каждый курс в компьютерной школе Айтишкино соответствует российским образовательным стандартам.
          </p>
        </div>
      </div>
    </section>
  );
}
