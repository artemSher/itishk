"use client";

import React, { useState } from "react";
import styles from "./Gallery.module.css";
import { ImagePopup } from "@/components/ui/ImagePopup/ImagePopup";

interface GalleryItem {
  id: number;
  imageUrl: string;
  alt: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // Замените этот массив на ваши реальные данные с фотографиями
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      imageUrl: "https://dummyimage.com/800x600/e5e7eb/9ca3af",
      alt: "Робототехника - Занятие 1",
    },
    {
      id: 2,
      imageUrl: "https://dummyimage.com/800x600/e5e7eb/9ca3af",

      alt: "Программирование - Занятие 2",
    },
    {
      id: 3,
      imageUrl: "https://dummyimage.com/800x600/e5e7eb/9ca3af",

      alt: "Робототехника - Занятие 3",
    },
    {
      id: 4,
      imageUrl: "https://dummyimage.com/800x600/e5e7eb/9ca3af",

      alt: "Программирование - Занятие 4",
    },
    {
      id: 5,
      imageUrl: "https://dummyimage.com/800x600/e5e7eb/9ca3af",

      alt: "Робототехника - Занятие 5",
    },
    {
      id: 6,
      imageUrl: "https://dummyimage.com/800x600/e5e7eb/9ca3af",

      alt: "Программирование - Занятие 6",
    },
  ];

  return (
    <>
      <section className={styles.gallerySection}>
        <div className={styles.heading}>
          <h2 className={styles.title}>Галерея</h2>
        </div>

        <div className={styles.paragraph}>
          <p className={styles.description}>
            Галерея фото и видео с занятий по робототехнике и программированию
            для детей
          </p>
        </div>

        <div className={styles.container}>
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={styles.card}
              onClick={() => setSelectedImage(item)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={item.imageUrl || "/placeholder.svg"}
                alt={item.alt}
                className={styles.cardImage}
                loading="lazy"
                decoding="async"
              />
              <div className={styles.badge}>
                <span className={styles.badgeText}>{item.id}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ImagePopup
        imageUrl={selectedImage?.imageUrl || ""}
        imageAlt={selectedImage?.alt || ""}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
};

export default Gallery;
