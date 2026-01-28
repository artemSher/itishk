"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./ShopSection.module.css";

interface Product {
  id: number;
  name: string;
  type: "gadget" | "course" | "merch" | "accessory";
  points: number;
}

const products: Product[] = [
  { id: 1, name: "Солнцезащитные очки", type: "accessory", points: 250 },
  { id: 2, name: "Playstation 5", type: "gadget", points: 3800 },
  { id: 3, name: "iPad Air 11", type: "gadget", points: 3800 },
  { id: 4, name: "Nintendo Switch", type: "gadget", points: 2450 },
  { id: 5, name: "Apple Watch SE", type: "gadget", points: 2200 },
  { id: 6, name: "Ноутбук как в классе", type: "gadget", points: 3000 },
  { id: 7, name: "AirPods Pro", type: "gadget", points: 2200 },
  { id: 8, name: "Яндекс Алиса", type: "gadget", points: 1200 },
  { id: 9, name: "Мягкая игрушка", type: "merch", points: 300 },
  { id: 10, name: "Футболка мерч", type: "merch", points: 400 },
  { id: 11, name: "Mi Band 10", type: "accessory", points: 1000 },
  { id: 12, name: "Мышь", type: "accessory", points: 450 },
  { id: 13, name: "Брелки", type: "merch", points: 30 },
  { id: 14, name: "Кружка", type: "merch", points: 350 },
  { id: 15, name: "Набор стикеров", type: "merch", points: 50 },
  { id: 16, name: "Ночник Майнкрафт", type: "gadget", points: 500 },
  { id: 17, name: "PowerBank", type: "accessory", points: 700 },
];

const giftImageByName: Record<string, string> = {
  "Mi Band 10": "xiaomi.webp",
  "Playstation 5": "ps5.webp",
  "iPad Air 11": "ipadairpurple0011.webp",
  "Nintendo Switch": "nintendo.webp",
  "Apple Watch SE": "apple watch.webp",
  "Ноутбук как в классе": "laptop.webp",
  "AirPods Pro": "airpods.webp",
  "Яндекс Алиса": "yandex.webp",
  "Мягкая игрушка": "toy.webp",
  "Футболка мерч": "/images/shop/tshirt.png",
  "Солнцезащитные очки": "glasses.webp",
  Мышь: "mouse.webp",
  Брелки: "brelok.webp",
  "Набор стикеров": "stickers.webp",
  "Ночник Майнкрафт": "mine.webp",
  PowerBank: "powerbank.webp",
  Кружка: "cap.webp",
};

function getGiftImageSrc(name: string): string | undefined {
  const filename = giftImageByName[name];
  if (!filename) return undefined;
  // Если путь уже начинается с /, возвращаем как есть
  if (filename.startsWith("/")) return filename;
  // Encode only filename part to support spaces and non-latin characters
  const encoded = encodeURIComponent(filename).replace(/%2F/g, "/");
  return `/images/gifts/${encoded}`;
}

export const ShopSection = () => {
  const [duplicatedProducts, setDuplicatedProducts] = useState<Product[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDuplicatedProducts([...products, ...products, ...products, ...products]);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.shopSection} ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={styles.title}>АйтиШоп</h2>
        <p className={styles.description}>
          Мы ценим твои успехи! За каждый пройденный урок, выполненное задание и
          участие в мероприятиях ты получаешь Айтишки - внутреннюю валюту,
          которую можно обменять на что-то полезное в нашем магазине. Мотивация
          и вознаграждение ждут тебя!
        </p>
      </div>

      <div
        className={styles.carouselContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`${styles.productsContainer} ${
            isHovered ? styles.pauseAnimation : ""
          } ${isVisible ? styles.startAnimation : ""}`}
        >
          {duplicatedProducts.map((product, index) => {
            const src = getGiftImageSrc(product.name);
            return (
              <div
                key={`${product.id}-${index}`}
                className={`${styles.productCard} ${styles[product.type]}`}
              >
                <div className={styles.productImage}>
                  {src ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={src || "/placeholder.svg"}
                      alt={product.name}
                      loading="lazy"
                      decoding="async"
                      width={120}
                      height={120}
                    />
                  ) : null}
                </div>
                <div className={styles.productInfo}>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <div className={styles.points}>{product.points} айтишек</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
