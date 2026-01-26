"use client";

import { useState, useEffect, useRef } from "react";

export const SchoolsMapSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-[1100px] mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#3A3F51] mb-10">
          Школы программирования для детей на карте
        </h2>

        {/* Карта */}
        <div
          ref={containerRef}
          className="w-full h-[380px] rounded-xl overflow-hidden shadow-md bg-gray-100"
        >
          {isVisible ? (
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A50634a1040010f4e04ea1d364536c47fccc4cd4dbcf6d54d48c617bbbee2662b&source=constructor"
              width="100%"
              height="100%"
              frameBorder="0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Загрузка карты...
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
