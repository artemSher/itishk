import styles from "./OnlineClassesSection.module.css";
import Image from "next/image";

export type CardData = {
  title: string;
  description: string;
  image: string;
  variant: "teal" | "white";
};

type OnlineClassesSectionProps = {
  title?: string;
  subtitle?: string;
  cards?: CardData[];
};

const defaultCards: CardData[] = [
  {
    title: "Индивидуальный формат.",
    description:
      'В "Айтишкино" мы не просто учим — мы создаём юных инноваторов! Наши два ключевых направления идеально дополняют друг друга:',
    image: "/images/onlineClasses/5.png",
    variant: "teal",
  },
  {
    title: "Оптимальная продолжительность",
    description:
      "60 минут — достаточно для объяснения, практики и закрепления без перегрузки внимания.",
    image: "/images/onlineClasses/3.png",
    variant: "white",
  },
  {
    title: "Гибкое расписание",
    description: "Время занятий подстраивается под Вас, а не наоборот.",
    image: "/images/onlineClasses/17.png",
    variant: "white",
  },
  {
    title: "Обучение из любой точки мира",
    description:
      "Нужен только интернет. География и переезды не имеют значения.",
    image: "/images/onlineClasses/6.png",
    variant: "teal",
  },
];

export function OnlineClassesSection({
  title,
  subtitle,
  cards = defaultCards,
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
          {cards.slice(0, 2).map((card, index) => (
            <div
              key={index}
              className={`${styles.card} ${
                card.variant === "teal" ? styles.cardTeal : styles.cardWhite
              }`}
            >
              <div className={styles.cardImage}>
                <Image
                  src={card.image || "/placeholder.svg"}
                  alt="Illustration"
                  width={199}
                  height={199}
                  className={styles.illustration}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cardsRow}>
          {cards.slice(2, 4).map((card, index) => (
            <div
              key={index}
              className={`${styles.card} ${
                card.variant === "teal" ? styles.cardTeal : styles.cardWhite
              }`}
            >
              <div className={styles.cardImage}>
                <Image
                  src={card.image || "/placeholder.svg"}
                  alt="Illustration"
                  width={199}
                  height={199}
                  className={styles.illustration}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
