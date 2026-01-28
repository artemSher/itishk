"use client";

import React, { useState } from "react";
import styles from "./Gallery.module.css";
import { ImagePopup } from "@/components/ui/ImagePopup/ImagePopup";

interface GalleryItem {
  id: number;
  imageUrl: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    imageUrl:
      "https://sun9-57.userapi.com/s/v1/ig2/KSFxN9arraeHdsffaFfMVO2UrkNXy8xPua6COkE_eykWFIgX5whXuHPgpnIta0PJTmtniPVCu0E9fcWrAHHhdmk0.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=2560x0",
  },
  {
    id: 2,
    imageUrl:
      "https://sun9-78.userapi.com/s/v1/ig2/jSYVdBbscN_2ccj1a4q7h-_IvxWhXllZTtL0NGD9P7ORwJBnVKWJKldbj8m_lLZn8QC4i2pivaD27XWRK99ptUAr.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=2560x0",
  },
  {
    id: 3,
    imageUrl:
      "https://sun9-70.userapi.com/s/v1/ig2/7aDylIcj1VNZuuKQsXKxiIx-zS_DoWItfbPMdUiSwJFjdrN5H8aFtsa465k0DNE6A1SpVATn_FvO9Cl6V91LtSJP.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&cs=1920x0",
  },
  {
    id: 4,
    imageUrl:
      "https://sun9-60.userapi.com/s/v1/ig2/mZHdzGixK-8MaOIf8jPjtyjGQlw5c9e4BAGv7ZeCFzKQH9BvI-jfVobO6BhayFsTaQqZtGq9Bp_jtILCayA7pilL.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&cs=1920x0",
  },
  {
    id: 5,
    imageUrl:
      "https://sun9-4.userapi.com/s/v1/ig2/9DmJLRZ_p-IEypT5jFrQyg1hGAkALrizwbCNzrXjXNY7BFKUVZrMT22mvfXH2-Bwy1qmf4-j5d4VgVuJNERDLHaE.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=2560x0",
  },
  {
    id: 6,
    imageUrl:
      "https://sun9-67.userapi.com/s/v1/ig2/WV9WeeN3frud1Bhl4ZJVl1feeN2b_b3QTdzM-CXUrosF2zNBjAwqzFlYQOpg5qUbfnc-e5vTdcL2_CEXdqU7DWHM.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=2560x0",
  },
  {
    id: 7,
    imageUrl:
      "https://sun9-73.userapi.com/s/v1/ig2/ZvX-sH-lns8ut398pejI4Tg8N6pFRonpwMhr-rdelC8MxExZsNqWM4AHcoX5Es-g9arjRovrGieho0_0ccdnWSU4.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=2560x0",
  },
  {
    id: 8,
    imageUrl:
      "https://sun9-10.userapi.com/s/v1/ig2/anOZE50CjygBRCh5JRSxRK-w4bHsBtu7OB_jWeDcftbjx_GNtbyAf-1F6Id5DKxMDzJ4mVrs6SmG87D0negg5rFf.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=2560x0",
  },
  {
    id: 9,
    imageUrl:
      "https://sun9-51.userapi.com/s/v1/ig2/iP8tLpt4D0Q-EzI3K1Ee1kkHE2YTCKSTOgDQnkALIkdcVkfrHgPt0ZIYlvgOErw06FT2ACOsrzU9N6-BJHpWtfXd.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&cs=1920x0",
  },
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
