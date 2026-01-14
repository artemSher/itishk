"use client";

export const SchoolsMapSection = () => {
  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-[1100px] mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#3A3F51] mb-10">
          Школы программирования для детей на карте
        </h2>

        {/* Карта */}
        <div className="w-full h-[380px] rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A50634a1040010f4e04ea1d364536c47fccc4cd4dbcf6d54d48c617bbbee2662b&source=constructor"
            width="100%"
            height="100%"
            frameBorder="0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};
