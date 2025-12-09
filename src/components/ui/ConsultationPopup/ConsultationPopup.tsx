"use client";

import { useState, useEffect } from "react";
import styles from "./ConsultationPopup.module.css";

export default function ConsultationPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000); //тест

    const updateViewport = () => setIsDesktop(window.innerWidth >= 1024);
    updateViewport();
    window.addEventListener("resize", updateViewport);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className={styles.backdrop} onClick={() => setIsOpen(false)}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.container}>
          {/* Left Panel - Form */}
          <div className={styles.leftPanel}>
            <div className={styles.formWrapper}>
              <h1 className={styles.title}>
                {"Успешное будущее вашего ребенка можно запрограммировать сегодня!"}
              </h1> 
              <p className={styles.subtitle}>
                Оставьте заявку на Бесплатное пробное занятие. Наш менеджер свяжется с Вами в ближайшее время!
              </p>

              <form
                className={styles.form}
                onSubmit={(e) => e.preventDefault()}
              >
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Как вас зовут?
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Введите ваше имя"
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email для связи
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="example@mail.com"
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>
                    Номер телефона
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+7 (495) 123-35-85"
                    className={styles.input}
                  />
                </div>

                <button type="submit" className={styles.submitButton}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  Получить консультацию
                </button>
              </form>

              <p className={styles.privacy}>
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </div>
          </div>

          {/* Right Panel - Hero (только на десктопе) */}
          {isDesktop && (
            <div className={styles.rightPanel}>
              <div className={styles.koalaWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/imageovrlay.png"
                  alt="Коала-преподаватель"
                  className={styles.koalaImage}
                />
              </div>
            </div>
          )}
        </div>

        <button
          onClick={() => setIsOpen(false)}
          className={styles.closeButton}
          aria-label="Close"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
