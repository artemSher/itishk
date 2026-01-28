"use client";

import { useState } from "react";
import { FAQItem } from "@/components/ui/FAQItem/FAQItem";
import styles from "./FAQSection.module.css";

export interface FAQItemType {
  id: number;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItemType[];
  title?: string;
  subtitle?: string;
}

export const FAQSection = ({
  items,
  title = "Часто задаваемые вопросы",
  subtitle = "Здесь вы найдёте ответы на самые популярные вопросы о нашем обучении",
}: FAQSectionProps) => {
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItemId((prev) => (prev === id ? null : id));
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.faqList}>
          {items.map((item) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openItemId === item.id}
              onClick={() => toggleItem(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
