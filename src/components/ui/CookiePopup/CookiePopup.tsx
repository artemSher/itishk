"use client";

import { useState, useEffect } from "react";
import styles from "./CookiePopup.module.css";

const COOKIE_CONSENT_KEY = "cookie_consent";

function deleteCookie(name: string) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
}

function deleteAllAnalyticsCookies() {
  // Удаляем Google Analytics куки
  const gaCookies = ["_ga", "_gid", "_gat", "_gat_gtag"];
  gaCookies.forEach((cookie) => {
    const matches = document.cookie.match(new RegExp(`${cookie}[^;]*`));
    if (matches) {
      matches.forEach((match) => {
        const cookieName = match.split("=")[0];
        deleteCookie(cookieName);
      });
    }
  });

  // Удаляем Яндекс.Метрика куки
  const ymCookies = document.cookie.match(/_ym[^;]*/g);
  if (ymCookies) {
    ymCookies.forEach((cookie) => {
      const cookieName = cookie.split("=")[0];
      deleteCookie(cookieName);
    });
  }
}

export function CookiePopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setIsVisible(false);
    console.log("[v0] Cookies accepted - analytics can be loaded");
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    deleteAllAnalyticsCookies();
    setIsVisible(false);
    console.log("[v0] Cookies declined - analytics cookies deleted");
  };

  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3 className={styles.title}>Мы используем файлы cookie</h3>
          <p className={styles.description}>
            Этот сайт использует файлы cookie для улучшения пользовательского
            опыта, анализа трафика и персонализации контента. Продолжая
            использовать наш сайт, вы соглашаетесь с нашей{" "}
            <a href="/privacy" className={styles.link}>
              политикой конфиденциальности
            </a>{" "}
            и{" "}
            <a href="/terms" className={styles.link}>
              пользовательским соглашением
            </a>
          </p>
        </div>

        <div className={styles.buttons}>
          <button
            className={`${styles.buttonBase} ${styles.buttonOutline}`}
            onClick={handleDecline}
          >
            Отклонить
          </button>
          <button
            className={`${styles.buttonBase} ${styles.buttonPrimary}`}
            onClick={handleAccept}
          >
            Принять все
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookiePopup;
