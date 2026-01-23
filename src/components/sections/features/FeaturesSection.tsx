import styles from "./FeaturesSection.module.css";

export default function FeaturesSection() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <svg className={styles.icon} viewBox="0 0 80 80" fill="none">
            <circle cx="27" cy="20" r="10" stroke="white" strokeWidth="5" />
            <path
              d="M17 50 Q17 35 27 35 Q37 35 37 50"
              stroke="white"
              strokeWidth="5"
              fill="none"
            />
            <circle cx="63" cy="20" r="10" stroke="white" strokeWidth="5" />
            <path
              d="M53 50 Q53 35 63 35 Q73 35 73 50"
              stroke="white"
              strokeWidth="5"
              fill="none"
            />
          </svg>
          <div className={styles.badge}>
            <span className={styles.badgeText}>6-17 лет</span>
          </div>
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
          <svg className={styles.icon} viewBox="0 0 80 80" fill="none">
            <rect
              x="10"
              y="15"
              width="60"
              height="40"
              rx="4"
              stroke="white"
              strokeWidth="5"
              fill="none"
            />
            <line
              x1="40"
              y1="55"
              x2="40"
              y2="65"
              stroke="white"
              strokeWidth="5"
            />
            <line
              x1="25"
              y1="65"
              x2="55"
              y2="65"
              stroke="white"
              strokeWidth="5"
            />
          </svg>
          <div className={styles.badge}>
            <span className={styles.badgeText}>VR / AR</span>
          </div>
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
