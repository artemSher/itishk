import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  Youtube,
} from "lucide-react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Logo and Description */}
          <div className={styles.logoColumn}>
            <div className={styles.logo}>
              <Image
                src="/images/logo/logo.png"
                alt="Айтишкино"
                width={180}
                height={40}
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
                <a
                  href="https://yandex.ru/maps/?text=%D0%B3.%20%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%20%D0%9C%D0%B0%D1%80%D1%8C%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9%20%D0%B1%D1%83%D0%BB%D1%8C%D0%B2%D0%B0%D1%80%2C%204"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  г. Москва, Марьинский бульвар, 4
                </a>
              </li>
              <li className={styles.contactItem}>
                <Clock className={styles.contactIcon} size={20} />
                Ежедневно: 10:00-19:00
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className={styles.mapColumn}>
            <div className={styles.mapContainer}>
              <iframe
                src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=151609639415"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
                title="Наш офис на карте"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            {new Date().getFullYear()} Айтишкино. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
};
