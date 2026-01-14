"use client";

import { ArrowRight } from "lucide-react";

export const CoursesCTA = () => {
  const handleClick = () => {
    const form = document.getElementById("application-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto px-5 mt-12 mb-16">
      <button
        onClick={handleClick}
        className="w-full flex items-center justify-center gap-3
          bg-[#00B18F] hover:bg-[#00997A]
          text-white font-medium text-lg md:text-xl
          py-4 px-8 rounded-lg rounded-lg shadow-md hover:shadow-lg
          transition-all duration-300 transform hover:-translate-y-0.5
          focus:outline-none focus:ring-2 focus:ring-[#00B18F] focus:ring-opacity-50"
      >
        <span>Записаться на бесплатную консультацию</span>
        <ArrowRight size={20} />
      </button>
    </div>
  );
};
