"use client";

import { useState } from "react";
import { VideoPopup } from "@/components/ui/VideoPopup/VideoPopup";
import { ImagePopup } from "@/components/ui/ImagePopup/ImagePopup";
import { Play, ImageIcon, Video } from "lucide-react";
import styles from "./Reviews.module.css";

interface Review {
  id: string;
  name: string;
  age: number;
  avatar: string;
  course: string;
  rating: number;
  text: string;
  mediaType: "image" | "video";
  mediaUrl?: string;
  thumbnailUrl?: string;
}

interface ReviewsProps {
  reviews: Review[];
}

export function Reviews({ reviews }: ReviewsProps) {
  const [selectedVideo, setSelectedVideo] = useState<{
    url: string;
    name: string;
  } | null>(null);

  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    name: string;
  } | null>(null);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={styles.star}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 1.66667L12.575 6.88334L18.3333 7.72501L14.1667 11.7833L15.15 17.5167L10 14.8083L4.85 17.5167L5.83333 11.7833L1.66667 7.72501L7.425 6.88334L10 1.66667Z"
          fill={index < rating ? "#F5A544" : "none"}
          stroke={index < rating ? "#F5A544" : "#D1D5DC"}
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ));
  };

  return (
    <section className={styles.reviewsSection}>
      <div className={styles.heading}>
        <h2 className={styles.title}>
          Отзывы о школе программирования
          <br />
          для детей &quot;Айтишкино&quot;
        </h2>
      </div>

      <div className={styles.reviewsGrid}>
        {reviews.map((review) => (
          <div key={review.id} className={styles.reviewCard}>
            <div
              className={`${styles.mediaContainer} ${
                review.mediaType === "video"
                  ? styles.videoMedia
                  : styles.imageMedia
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => {
                if (review.mediaType === "video" && review.mediaUrl) {
                  setSelectedVideo({
                    url: review.mediaUrl,
                    name: review.name,
                  });
                }

                if (review.mediaType === "image" && review.mediaUrl) {
                  setSelectedImage({
                    url: review.mediaUrl,
                    name: review.name,
                  });
                }
              }}
            >
              {review.mediaType === "video" ? (
                <>
                  <div className={styles.videoBadge}>
                    <Video size={16} />
                    <span>Видео отзыв</span>
                  </div>

                  <div className={styles.playButton}>
                    <Play size={40} fill="#5DBFA4" stroke="#5DBFA4" />
                  </div>
                </>
              ) : (
                <div className={styles.imagePlaceholder}>
                  <ImageIcon size={96} color="#D1D5DC" strokeWidth={1.5} />
                </div>
              )}
            </div>

            <div className={styles.content}>
              <div className={styles.header}>
                <div className={styles.avatar}>{review.avatar}</div>

                <div className={styles.info}>
                  <h3 className={styles.name}>
                    {review.name}, {review.age} лет
                  </h3>
                  <p className={styles.course}>Курс: {review.course}</p>
                </div>
              </div>

              <div className={styles.rating}>{renderStars(review.rating)}</div>

              <p className={styles.text}>{review.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Video popup */}
      {selectedVideo && (
        <VideoPopup
          videoUrl={selectedVideo.url}
          studentName={selectedVideo.name}
          isOpen={true}
          onClose={() => setSelectedVideo(null)}
        />
      )}

      {/* Image popup */}
      {selectedImage && (
        <ImagePopup
          imageUrl={selectedImage.url}
          imageAlt={`Отзыв ${selectedImage.name}`}
          isOpen={true}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
}
