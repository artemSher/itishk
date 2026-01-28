"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import styles from "./Footer.module.css";

export const Footer = () => {
  const [mapVisible, setMapVisible] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMapVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Logo and Description */}
          <div className={styles.logoColumn}>
            <div className={styles.logo}>
              <Image
                src="/images/logo/logo_white.webp"
                alt="Айтишкино"
                width={180}
                height={40}
                priority
                className={styles.logoImage}
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <p className={styles.description}>
              Современная IT-школа для детей и подростков, где каждый может
              раскрыть свой потенциал в мире технологий.
            </p>
          </div>

          {/* Contact Info */}
          <div className={styles.contactColumn}>
            <h3>Контакты</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <Phone className={styles.contactIcon} size={20} />
                <a href="tel:+74951233585">+7 (495) 123 35-85</a>
              </li>

              <li className={styles.contactItem}>
                <Mail className={styles.contactIcon} size={20} />
                <a href="mailto:itishkino@yandex.ru">itishkino@yandex.ru</a>
              </li>
              <li className={styles.contactItem}>
                <MapPin className={styles.contactIcon} size={20} />
                <div className="contactTexts">
                  <a
                    href="https://yandex.ru/maps/-/CLHTYZyw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactLink}
                  >
                    г. Москва, Марьинский бульвар, 4
                  </a>{" "}
                  <br />
                  <a
                    href="https://yandex.ru/maps/-/CLHTY4yO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactLink}
                  >
                    г. Люберцы, ул. 3-е почтовое отделение, д. 82
                  </a>
                </div>
              </li>

              {/* Вторая точка */}
              <li className={styles.contactItem}></li>

              <li className={styles.contactItem}>
                <Clock className={styles.contactIcon} size={20} />
                Ежедневно: 10:00–19:00
              </li>
            </ul>
          </div>

          <div className={styles.mapColumn}>
            <div ref={mapRef} className={styles.mapContainer}>
              {mapVisible ? (
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A50634a1040010f4e04ea1d364536c47fccc4cd4dbcf6d54d48c617bbbee2662b&amp;source=constructor"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  loading="lazy"
                  style={{ border: 0 }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                  title="Наш офис на карте"
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#f3f4f6",
                    color: "#9ca3af",
                  }}
                >
                  Загрузка карты...
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            {new Date().getFullYear()} Айтишкино. Все права защищены. <br />
            <div className={styles.spacer}>
              <div>ИП Абдурахимов А.Б</div>
              <div>ОГРНИП 323774600663900</div>
              <div>ИНН 027509855212</div>
            </div>
          </div>
          <div className={styles.legalLinks}>
            <a href="/privacy" className={styles.legalLink}>
              Политика конфиденциальности
            </a>
            <a href="/terms" className={styles.legalLink}>
              Пользовательское соглашение
            </a>
            <a href="/education-license" className={styles.legalLink}>
              Образовательная лицензия
            </a>
            <a href="/contract-offline" className={styles.legalLink}>
              Договор оферты очное обучение
            </a>
            <a href="/contract-online" className={styles.legalLink}>
              Договор оферты онлайн обучение
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
