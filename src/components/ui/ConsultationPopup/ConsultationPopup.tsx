"use client";

import React, { useState, useEffect, useRef } from "react";
import { IMaskInput } from "react-imask";
import styles from "./ConsultationPopup.module.css";
import emailjs from "@emailjs/browser";

export default function ConsultationPopup() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Храним форматированную строку, например "+7 (999) 123-45-67"
  const [phone, setPhone] = useState<string>("");

  // Рефы для полей
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);

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
    const email = emailRef.current?.value ?? "";
    const raw = getRawPhone(phone); // например "79991234567"

    if (raw.length !== 11) {
      alert("Введите полный номер телефона в формате +7 (xxx) xxx-xx-xx");
      return;
    }

    if (!name || !email) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send(
        "service_herbt8q",
        "template_pudxx63",
        {
          name,
          phone: raw,
          email,
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
                  <label htmlFor="email" className={styles.label}>
                    Email для связи
                  </label>
                  <input
                    id="email"
                    ref={emailRef}
                    type="email"
                    placeholder="example@mail.com"
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
                    // Маска: фиксированный +7, далее 10 цифр
                    mask={"+{7} (000) 000-00-00"}
                    value={phone}
                    // onAccept даёт текущую отформатированную строку
                    onAccept={(value: string) => {
                      setPhone(value);
                    }}
                    // placeholder отображается, если value пустой
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

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
                  {isLoading ? "Отправка..." : "Получить консультацию"}
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
