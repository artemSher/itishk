"use client";

import { useState, useEffect } from "react";
import styles from "./ConsultationSection.module.css";
import { Send } from "lucide-react";
import { InputMask } from "@react-input/mask";
import { useForm, Controller } from "react-hook-form";
import emailjs from "@emailjs/browser";

type FormatType = "online" | "offline";
type CourseType = "programming" | "robotics" | "duo";

interface IFormData {
  name: string;
  phone: string;
  format: FormatType;
  course: CourseType;
}

const courseLabels: Record<CourseType, string> = {
  programming: "Программирование",
  robotics: "Робототехника",
  duo: "Дуо: Программирование + Робототехника",
};

export const ConsultationSection = () => {
  const {
    control,
    handleSubmit: handleFormSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<IFormData>({
    defaultValues: {
      format: "offline",
      course: "programming",
    },
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const selectedFormat = watch("format");

  useEffect(() => {
    if (selectedFormat === "online") {
      setValue("course", "programming");
    }
  }, [selectedFormat, setValue]);

  const onSubmit = async (data: IFormData) => {
    setIsLoading(true);

    const formatLabel = data.format === "online" ? "Онлайн" : "Офлайн";
    const courseLabel = courseLabels[data.course];

    try {
      await emailjs.send(
        "service_herbt8q",
        "template_pudxx63",
        {
          name: data.name,
          phone: data.phone,
          format: formatLabel,
          course: courseLabel,
        },
        "4NGKAgHHT5_Xo9_LN",
      );

      setIsSubmitted(true);
    } catch {
      alert(
        "Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={styles.successContainer}>
        <div className={styles.successContent}>
          <div className={styles.successIcon}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 6L9 17L4 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className={styles.successTitle}>Заявка отправлена!</h2>
          <p className={styles.successText}>
            Мы свяжемся с вами в течение 10 минут
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className={styles.section} id="contacts">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.pattern} aria-hidden="true" />

          <div className={styles.header}>
            <h2 className={styles.title}>Запишитесь на консультацию</h2>
            <p className={styles.subtitle}>
              Оставьте заявку, и наш менеджер свяжется с вами в ближайшее время, чтобы обсудить детали обучения и ответить на все ваши вопросы
            </p>
          </div>

          <form onSubmit={handleFormSubmit(onSubmit)} className={styles.form}>
            <div className={styles.formVertical}>
              <div className={styles.formGroup}>
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Пожалуйста, введите ваше имя" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className={styles.input}
                      placeholder="Ваше имя"
                    />
                  )}
                />
                {errors.name && (
                  <span className={styles.error}>
                    {errors.name.message as string}
                  </span>
                )}
              </div>

              <div className={styles.formGroup}>
                <Controller
                  name="phone"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Пожалуйста, введите ваш телефон" }}
                  render={({ field }) => (
                    <InputMask
                      mask="+_ (___) ___-__-__"
                      replacement={{ _: /\d/ }}
                      {...field}
                      className={styles.input}
                      placeholder="+7 (___) ___-__-__"
                    />
                  )}
                />
                {errors.phone && (
                  <span className={styles.error}>
                    {errors.phone.message as string}
                  </span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Формат обучения</label>
                <Controller
                  name="format"
                  control={control}
                  render={({ field }) => (
                    <div className={styles.radioGroup}>
                      <label className={styles.radioLabel}>
                        <input
                          type="radio"
                          {...field}
                          value="offline"
                          checked={field.value === "offline"}
                          onChange={() => field.onChange("offline")}
                          className={styles.radioInput}
                        />
                        <span className={styles.radioButton}>Офлайн</span>
                      </label>
                      <label className={styles.radioLabel}>
                        <input
                          type="radio"
                          {...field}
                          value="online"
                          checked={field.value === "online"}
                          onChange={() => field.onChange("online")}
                          className={styles.radioInput}
                        />
                        <span className={styles.radioButton}>Онлайн</span>
                      </label>
                    </div>
                  )}
                />
              </div>

              {selectedFormat === "offline" && (
                <div className={styles.formGroup}>
                  <label className={styles.label}>Направление</label>
                  <Controller
                    name="course"
                    control={control}
                    render={({ field }) => (
                      <select {...field} className={styles.select}>
                        <option value="programming">Программирование</option>
                        <option value="robotics">Робототехника</option>
                        <option value="duo">
                          Дуо: Программирование + Робототехника
                        </option>
                      </select>
                    )}
                  />
                </div>
              )}

              {selectedFormat === "online" && (
                <div className={styles.formGroup}>
                  <div className={styles.onlineNote}>
                    <span className={styles.onlineNoteIcon}>💻</span>
                    <span>Онлайн доступно только программирование</span>
                  </div>
                </div>
              )}
            </div>

            <div className={styles.formFooter}>
              <button
                type="submit"
                className={styles.submitButton}
                disabled={isLoading}
              >
                {isLoading ? "Отправка..." : "Оставить заявку"}
                {!isLoading && <Send size={18} />}
              </button>

              <p className={styles.privacyText}>
                Нажимая на кнопку, вы даете согласие на обработку персональных
                данных и соглашаетесь с{" "}
                <a href="/privacy" className={styles.privacyLink}>
                  политикой конфиденциальности
                </a>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
