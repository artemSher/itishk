"use client";

import type React from "react";
import { useEffect } from "react";
import styles from "./ImagePopup.module.css";
import { X } from "lucide-react";

interface ImagePopupProps {
  imageUrl: string;
  imageAlt: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ImagePopup: React.FC<ImagePopupProps> = ({
  imageUrl,
  imageAlt,
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

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <X size={24} />
        </button>

        <div className={styles.imageContainer}>
          <h3 className={styles.title}>{imageAlt}</h3>

          <div className={styles.imageWrapper}>
            <img
              src={imageUrl || "/placeholder.svg"}
              alt={imageAlt}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
