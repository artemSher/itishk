import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import styles from "./KeyDirectionsSection.module.css";
import { Code2, Bot } from "lucide-react";

export const KeyDirectionsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Наши два ключевых направления идеально дополняют друг друга:
        </h2>

        <div className={styles.directionsWrapper}>
          {/* Карточка с программированием */}
          <div className={`${styles.direction} ${styles.programming}`}>
            <div className={styles.directionContent}>
              <div
                className={`${styles.iconContainer} ${styles.programmingIcon}`}
              >
                <Code2
                  className={styles.icon}
                  size={36}
                  color="#00B18F"
                  strokeWidth={2}
                />
              </div>
              <h3 className={styles.directionTitle}>Программирование</h3>
              <p className={styles.directionText}>
                Обучение программированию развивает логику, алгоритмическое мышление и
                цифровую грамотность.
              </p>
              <div className={styles.buttonGroup}>
                <Button asChild size="lg" className={styles.button}>
                  <Link href="/online/programming">Онлайн</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className={styles.buttonOutline}
                >
                  <Link href="/offline/programming">Офлайн</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Карточка с робототехникой */}
          <div className={`${styles.direction} ${styles.robotics}`}>
            <div className={styles.directionContent}>
              <div className={`${styles.iconContainer} ${styles.roboticsIcon}`}>
                <Bot
                  className={styles.icon}
                  size={36}
                  color="white"
                  strokeWidth={2}
                />
              </div>
              <h3 className={styles.directionTitle}>Робототехника</h3>
              <p className={styles.directionText}>
                Превращает написанные программы в настоящие движущиеся механизмы и умные
                устройства.
              </p>
              <div className={styles.buttonGroup}>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className={styles.buttonWhite}
                >
                  <Link href="/offline/robotics">Офлайн</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            Оба направления тесно связаны и позволяют получить полное
            представление о современном мире технологий
          </p>
        </div>
      </div>
    </section>
  );
};
