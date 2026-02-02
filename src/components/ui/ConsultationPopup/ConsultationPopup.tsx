"use client";

import React, { useState, useEffect, useRef } from "react";
import { IMaskInput } from "react-imask";
import styles from "./ConsultationPopup.module.css";
import emailjs from "@emailjs/browser";

type FormatType = "online" | "offline";
type CourseType = "programming" | "robotics" | "duo";

const courseLabels: Record<CourseType, string> = {
  programming: "Программирование",
  robotics: "Робототехника",
  duo: "Дуо: Программирование + Робототехника",
};

export default function ConsultationPopup() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Храним форматированную строку, например "+7 (999) 123-45-67"
  const [phone, setPhone] = useState<string>("");
  const [format, setFormat] = useState<FormatType>("offline");
  const [course, setCourse] = useState<CourseType>("programming");

  // Рефы для полей
  const nameRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 5000);

    const updateViewport = () => setIsDesktop(window.innerWidth >= 1024);
    updateViewport();
    window.addEventListener("resize", updateViewport);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  useEffect(() => {
    if (format === "online") {
      setCourse("programming");
    }
  }, [format]);

  // Получить "чистые" цифры: +7 (999) 123-45-67 -> 79991234567
  const getRawPhone = (masked?: string): string => {
    if (!masked) return "";
    const digits = masked.replace(/\D/g, ""); // оставляем только цифры
    // Если пользователь ввёл 8 в начале, заменим на 7
    if (digits.length > 0 && digits[0] === "8") {
      return "7" + digits.slice(1);
    }
    return digits;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = nameRef.current?.value ?? "";
    const raw = getRawPhone(phone); // например "79991234567"

    if (raw.length !== 11) {
      alert("Введите полный номер телефона в формате +7 (xxx) xxx-xx-xx");
      return;
    }

    if (!name) {
      alert("Пожалуйста, введите ваше имя");
      return;
    }

    const formatLabel = format === "online" ? "Онлайн" : "Офлайн";
    const courseLabel = courseLabels[course];

    setIsLoading(true);

    try {
      await emailjs.send(
        "service_herbt8q",
        "template_pudxx63",
        {
          name,
          phone: raw,
          format: formatLabel,
          course: courseLabel,
        },
        "4NGKAgHHT5_Xo9_LN"
      );

      setIsSubmitted(true);
    } catch {
      alert("Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.backdrop} onClick={() => setIsOpen(false)}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.container}>
          {/* Left Panel */}
          <div className={styles.leftPanel}>
            <div className={styles.formWrapper}>
              <h1 className={styles.title}>
                {
                  "Успешное будущее вашего ребенка можно запрограммировать сегодня!"
                }
              </h1>

              <p className={styles.subtitle}>
                Оставьте заявку на Бесплатное пробное занятие. Наш менеджер
                свяжется с Вами в ближайшее время!
              </p>

              {isSubmitted ? (
                <div className={styles.successMessage}>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17L4 12" />
                  </svg>
                  <h2>Заявка отправлена!</h2>
                  <p>Мы свяжемся с вами в ближайшее время</p>
                </div>
              ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Как вас зовут?
                  </label>
                  <input
                    id="name"
                    ref={nameRef}
                    type="text"
                    placeholder="Введите ваше имя"
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>
                    Номер телефона
                  </label>

                  <IMaskInput
                    id="phone"
                    className={styles.input}
                    mask={"+{7} (000) 000-00-00"}
                    value={phone}
                    onAccept={(value: string) => {
                      setPhone(value);
                    }}
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Формат обучения</label>
                  <div className={styles.radioGroup}>
                    <label className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="format"
                        value="offline"
                        checked={format === "offline"}
                        onChange={() => setFormat("offline")}
                        className={styles.radioInput}
                      />
                      <span className={styles.radioButton}>Офлайн</span>
                    </label>
                    <label className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="format"
                        value="online"
                        checked={format === "online"}
                        onChange={() => setFormat("online")}
                        className={styles.radioInput}
                      />
                      <span className={styles.radioButton}>Онлайн</span>
                    </label>
                  </div>
                </div>

                {format === "offline" && (
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Направление</label>
                    <select
                      value={course}
                      onChange={(e) => setCourse(e.target.value as CourseType)}
                      className={styles.select}
                    >
                      <option value="programming">Программирование</option>
                      <option value="robotics">Робототехника</option>
                      <option value="duo">Дуо: Программирование + Робототехника</option>
                    </select>
                  </div>
                )}

                {format === "online" && (
                  <div className={styles.formGroup}>
                    <div className={styles.onlineNote}>
                      <span className={styles.onlineNoteIcon}>💻</span>
                      <span>Онлайн доступно только программирование</span>
                    </div>
                  </div>
                )}

                <button type="submit" className={styles.submitButton} disabled={isLoading}>
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
                  {isLoading ? "Отправка..." : "Оставить заявку"}
                </button>
              </form>
              )}

              <p className={styles.privacy}>
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </div>
          </div>

          {/* Right Panel (Desktop only) */}
          {isDesktop && (
            <div className={styles.rightPanel}>
              <div className={styles.koalaWrapper}>
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
