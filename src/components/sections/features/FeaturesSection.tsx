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
          <h3 className={styles.heading}>Группы по возрасту</h3>
          <p className={styles.paragraph}>
            Все программы рассчитаны на определенный возраст, группы
            сформированы по этому принципу.
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
          <h3 className={styles.heading}>Оборудованные классы</h3>
          <p className={styles.paragraph}>
            Современное оборудование: компьютеры, VR-гарнитуры, роботы и
            конструкторы для практических занятий.
          </p>
        </div>
      </div>
    </section>
  );
}
