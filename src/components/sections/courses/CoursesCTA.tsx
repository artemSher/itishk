"use client";

import { ArrowRight } from "lucide-react";

export const CoursesCTA = () => {
  const handleClick = () => {
    let attempts = 0;
    const maxAttempts = 2;
    const yOffset = -100;

    const doScroll = () => {
      const form = document.getElementById("contacts");
      if (!form) return;

      const targetY =
        form.getBoundingClientRect().top + window.pageYOffset + yOffset;
      const currentScroll = window.pageYOffset;
      const isAtTarget = Math.abs(currentScroll - targetY) < 20;

      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });

      attempts++;
      // Костыль Из-за изменения размеров блоков под анимашки
      if (attempts < maxAttempts && !isAtTarget) {
        setTimeout(doScroll, 500);
      }
    };

    doScroll();
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto px-5 mt-12 mb-16">
      <button
        onClick={handleClick}
        className="w-full flex items-center justify-center gap-3
          bg-[#00B18F] hover:bg-[#00997A]
          text-white font-medium text-lg md:text-xl
          py-4 px-8 rounded-lg shadow-md hover:shadow-lg
          transition-all duration-300 transform hover:-translate-y-0.5
          focus:outline-none focus:ring-2 focus:ring-[#00B18F] focus:ring-opacity-50"
      >
        <span>Оставить заявку на бесплатное пробное занятие</span>
        <ArrowRight size={20} />
      </button>
    </div>
  );
};
