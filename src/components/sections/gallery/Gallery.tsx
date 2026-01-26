"use client";

import React, { useState } from "react";
import styles from "./Gallery.module.css";
import { ImagePopup } from "@/components/ui/ImagePopup/ImagePopup";

interface GalleryItem {
  id: number;
  imageUrl: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, imageUrl: "https://dummyimage.com/800x600/e5e7eb/9ca3af" },
  { id: 2, imageUrl: "https://dummyimage.com/800x600/e5e7eb/9ca3af" },
  { id: 3, imageUrl: "https://dummyimage.com/800x600/e5e7eb/9ca3af" },
  { id: 4, imageUrl: "https://dummyimage.com/800x600/e5e7eb/9ca3af" },
  { id: 5, imageUrl: "https://dummyimage.com/800x600/e5e7eb/9ca3af" },
  { id: 6, imageUrl: "https://dummyimage.com/800x600/e5e7eb/9ca3af" },
  { id: 7, imageUrl: "https://dummyimage.com/800x600/e5e7eb/9ca3af" },
  { id: 8, imageUrl: "https://dummyimage.com/800x600/e5e7eb/9ca3af" },
  { id: 9, imageUrl: "https://dummyimage.com/800x600/e5e7eb/9ca3af" },
  { id: 10, imageUrl: "https://dummyimage.com/800x600/e5e7eb/9ca3af" },
  { id: 11, imageUrl: "https://dummyimage.com/800x600/e5e7eb/9ca3af" },
  { id: 12, imageUrl: "https://dummyimage.com/800x600/e5e7eb/9ca3af" },
  { id: 13, imageUrl: "https://dummyimage.com/800x600/e5e7eb/9ca3af" },
  { id: 14, imageUrl: "https://dummyimage.com/800x600/e5e7eb/9ca3af" },
  { id: 15, imageUrl: "https://dummyimage.com/800x600/e5e7eb/9ca3af" },
  { id: 16, imageUrl: "https://dummyimage.com/800x600/e5e7eb/9ca3af" },
  { id: 17, imageUrl: "https://dummyimage.com/800x600/e5e7eb/9ca3af" },
  { id: 18, imageUrl: "https://dummyimage.com/800x600/e5e7eb/9ca3af" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

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
            >
              <img
                src={item.imageUrl}
                alt=""
                className={styles.cardImage}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </section>

      <ImagePopup
        imageUrl={selectedImage?.imageUrl || ""}
        imageAlt=""
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
};

export default Gallery;
