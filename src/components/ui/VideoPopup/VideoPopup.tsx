"use client";

import type React from "react";
import { useEffect } from "react";
import styles from "./VideoPopup.module.css";
import { X } from "lucide-react";

interface VideoPopupProps {
  videoUrl: string;
  studentName: string;
  isOpen: boolean;
  onClose: () => void;
}

export const VideoPopup: React.FC<VideoPopupProps> = ({
  videoUrl,
  studentName,
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  //
  // --- EMBED CONVERTERS ---
  //
  const getEmbedUrl = (url: string): string | null => {
    // --- VK ---
    if (url.includes("vk.com")) {
      const match = url.match(/video(-?\d+)_(\d+)/);
      if (!match) return null;

      const oid = match[1];
      const id = match[2];
      return `https://vk.com/video_ext.php?oid=${oid}&id=${id}`;
    }

    // --- YouTube ---
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      let videoId = "";

      if (url.includes("youtu.be")) {
        videoId = url.split("/").pop() || "";
      } else {
        const params = new URL(url).searchParams;
        videoId = params.get("v") || "";
      }

      return `https://www.youtube.com/embed/${videoId}`;
    }

    // --- Vimeo ---
    if (url.includes("vimeo.com")) {
      const id = url.split("/").pop();
      return `https://player.vimeo.com/video/${id}`;
    }

    // --- Rutube ---
    if (url.includes("rutube.ru")) {
      const match = url.match(/video\/([a-zA-Z0-9]+)/);
      if (!match) return null;

      return `https://rutube.ru/play/embed/${match[1]}`;
    }

    return null;
  };

  //
  // Determine if it's a direct video file or needs iframe
  //
  const isDirectVideo =
    videoUrl.endsWith(".mp4") ||
    videoUrl.endsWith(".webm") ||
    videoUrl.startsWith("blob:");

  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <X size={24} />
        </button>

        <div className={styles.videoContainer}>
          <h3 className={styles.title}>Проект ученика: {studentName}</h3>

          <div className={styles.videoWrapper}>
            {isDirectVideo ? (
              <video
                src={videoUrl}
                controls
                autoPlay
                preload="metadata"
                className={styles.video}
              >
                Ваш браузер не поддерживает видео.
              </video>
            ) : (
              <iframe
                src={embedUrl || videoUrl}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className={styles.video}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
