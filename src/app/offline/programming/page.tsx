"use client";

import dynamic from "next/dynamic";
import { PageLayout } from "@/components/layout/PageLayout";
import { Footer } from "@/components/sections/footer/Footer";
import { FullscreenTextSection } from "@/components/sections/fullscreen-text/FullscreenTextSection";
import { CookiePopup } from "@/components/ui/CookiePopup/CookiePopup";
import { OnlineClassesSection } from "@/components/sections/online-classes/OnlineClassesSection";
import { CoursesSection } from "@/components/sections/courses/CoursesSection";
import { SchoolsMapSection } from "@/components/sections/map/SchoolsMapSection";
import { FAQSection } from "@/components/sections/faq/FAQSection";
import { SchoolSection } from "@/components/sections/school/school";
import FeaturesSection from "@/components/sections/features/FeaturesSection";
import { EarningSection } from "@/components/sections/earning/EarningSection";
import { ShopSection } from "@/components/sections/shop/ShopSection";
import { Reviews } from "@/components/sections/reviews/Reviews";
import { FAQ_OFFLINE } from "@/components/sections/faq/faqData";
import type { CardData } from "@/components/sections/online-classes/OnlineClassesSection";

const cards: CardData[] = [
  {
    title: "Группы по возрасту",
    description:
      "Каждая программа разработана с учётом возраста и уровня подготовки детей, поэтому группы формируются так, чтобы всем было комфортно и интересно учиться в своём темпе.",
    image: "/images/onlineClasses/5.png",
    variant: "teal",
  },
  {
    title: "Оборудованные классы",
    description:
      "Для занятий не нужно приносить своё оборудование или материалы — всё необходимое мы предоставляем на уроках.",
    image: "/images/onlineClasses/3.png",
    variant: "white",
  },
  {
    title: "Финансовая грамотность",
    description:
      "Дети получают внутреннюю валюту за успехи в обучении, осваивают планирование бюджета и делают первые осознанные покупки в «Айтишопе».",
    image: "/images/onlineClasses/17.png",
    variant: "white",
  },
  {
    title: "Геймификация",
    description:
      "Успехи ученика влияют на его рейтинг в школе, что делает обучение программированию интереснее и мотивирует ребенка, а также формирует стремление к лидерству.",
    image: "/images/onlineClasses/6.png",
    variant: "teal",
  },
];

const ConsultationSection = dynamic(
  () =>
    import("@/components/sections/consultation/ConsultationSection").then(
      (mod) => ({
        default: mod.ConsultationSection,
      }),
    ),
  { ssr: true },
);

export default function OnlineProgrammingPage() {
  return (
    <PageLayout>
      <section id="school">
        <SchoolSection
          title={["Школа", "программирования", "для детей"]}
          imageSrc="/images/school/offline-prog.png"
          subtitle="Компьютерные курсы в школе Айтишкино – это комплексное IT образование. Дети создают игры, мобильные приложения, сайты, изучают ИИ и VR, видят результат и получают полное представление о работе технологий в современном мире."
        />
      </section>

      <section id="online-classes">
        <OnlineClassesSection
          title="Компьютерная школа"
          subtitle="Обучение в классе с преподавателем, живое общение и практика на каждом уроке."
          cards={cards}
        />
      </section>

      <FullscreenTextSection
        line1="Почему выбирают"
        line2="Айтишкино?"
        backgroundColor="#f8f9fa"
      />

      <section id="features">
        <FeaturesSection />
      </section>

      <section id="earnings" style={{ scrollMarginTop: "80px" }}>
        <EarningSection animationPath="ItShop.json" />
      </section>

      <section id="shop">
        <ShopSection />
      </section>

      <section id="courses">
        <CoursesSection
          title="Курсы по программированию для детей"
          format="online and offline"
          category="programming"
        />
      </section>

      <section id="map" style={{ scrollMarginTop: "80px" }}>
        <SchoolsMapSection />
      </section>

      <section id="reviews">
        <Reviews />{" "}
      </section>

      <section id="faq">
        <FAQSection items={FAQ_OFFLINE} />
      </section>

      <section id="contacts" style={{ scrollMarginTop: "80px" }}>
        <ConsultationSection />
      </section>

      <CookiePopup />

      {/* Подвал сайта */}
      <section id="footer">
        <Footer />
      </section>
    </PageLayout>
  );
}
