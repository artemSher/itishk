"use client";

import type React from "react";
import { useEffect } from "react";
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
    // --- VK / VKVideo ---
    // Поддержка как vk.com, так и vkvideo.ru
    if (url.includes("vk.com") || url.includes("vkvideo.ru")) {
      // Если это уже embed URL от vkvideo.ru, используем его напрямую
      if (url.includes("vkvideo.ru/video_ext.php")) {
        return url;
      }

      // Парсим обычные VK URL в формате video{oid}_{id}
      const match = url.match(/video(-?\d+)_(\d+)/);
      if (!match) return null;

      const oid = match[1];
      const id = match[2];

      // Используем vkvideo.ru вместо старого vk.com
      return `https://vkvideo.ru/video_ext.php?oid=${oid}&id=${id}`;
    }

    // --- YouTube ---
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      let videoId = "";

      if (url.includes("youtu.be")) {
        videoId = url.split("/").pop()?.split("?")[0] || "";
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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl bg-background rounded-lg shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 z-10 p-2 bg-background/80 rounded-full hover:bg-background transition-colors"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-4">
            Проект ученика: {studentName}
          </h3>

          <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
            {isDirectVideo ? (
              <video
                src={videoUrl}
                controls
                autoPlay
                preload="metadata"
                className="w-full h-full"
              >
                Ваш браузер не поддерживает видео.
              </video>
            ) : (
              <iframe
                src={embedUrl || videoUrl}
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
                allowFullScreen
                className="w-full h-full"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
