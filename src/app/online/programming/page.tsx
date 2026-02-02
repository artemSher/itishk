"use client";

import dynamic from "next/dynamic";
import { PageLayout } from "@/components/layout/PageLayout";
import { Footer } from "@/components/sections/footer/Footer";
import { FullscreenTextSection } from "@/components/sections/fullscreen-text/FullscreenTextSection";
import { CookiePopup } from "@/components/ui/CookiePopup/CookiePopup";
import { OnlineClassesSection } from "@/components/sections/online-classes/OnlineClassesSection";
import { CoursesSection } from "@/components/sections/courses/CoursesSection";
import { PlatformSection } from "@/components/sections/platform/PlatformSection";
import { EarningSection } from "@/components/sections/earning/EarningSection";
import { FAQSection } from "@/components/sections/faq/FAQSection";
import { SchoolSection } from "@/components/sections/school/school";
import FeaturesSection from "@/components/sections/features/FeaturesSection";
import { Reviews } from "@/components/sections/reviews/Reviews";
import { FAQ_ONLINE } from "@/components/sections/faq/faqData";
import type { CardData } from "@/components/sections/online-classes/OnlineClassesSection";

const cards: CardData[] = [
  {
    title: "Индивидуальный формат",
    description:
      "1 на 1 с педагогом. Все внимание на Вашем ребенке. Программа подстраивается под темп и уровень ребенка.",
    image: "/images/onlineClasses/5.png",
    variant: "teal",
  },
  {
    title: "Оптимальная продолжительность",
    description:
      "60 минут — достаточно для объяснения, практики и закрепления без перегрузки внимания.",
    image: "/images/onlineClasses/3.png",
    variant: "white",
  },
  {
    title: "Гибкое расписание",
    description: "Время занятий подстраивается под Вас, а не наоборот.",
    image: "/images/onlineClasses/17.png",
    variant: "white",
  },
  {
    title: "Обучение из любой точки мира",
    description:
      "Нужен только интернет. География и переезды не имеют значения",
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
      {/* SchoolSection */}
      <SchoolSection
        title={["Онлайн-школа", "программирования", "для детей"]}
        imageSrc="/images/school/online-prog.png"
      />

      {/* Hero */}
      <section id="online-classes">
        <OnlineClassesSection
          title="Онлайн-занятия"
          subtitle="Индивидуальные занятия с преподавателем в удобное время"
          cards={cards}
        />
      </section>

      {/* Почему онлайн */}
      <FullscreenTextSection
        line1="Почему выбирают"
        line2="Айтишкино?"
        backgroundColor="#f8f9fa"
      />
      <section id="features">
        <FeaturesSection />
      </section>

      <section id="platform">
        <PlatformSection />
      </section>

      <section id="earnings" style={{ scrollMarginTop: "80px" }}>
        <EarningSection animationPath="EarningSection.json" />
      </section>

      {/* Онлайн курсы по программированию */}
      <section id="courses">
        <CoursesSection
          title="Онлайн-курсы по программированию"
          format="online"
          category="programming"
          twoColumns
        />
      </section>
      <section id="reviews">
        <Reviews />{" "}
      </section>
      <section id="faq">
        <FAQSection items={FAQ_ONLINE} />
      </section>
      {/* Консультация */}
      <section id="contacts" style={{ scrollMarginTop: "80px" }}>
        <ConsultationSection />
      </section>

      {/* Cookie */}
      <CookiePopup />

      {/* Подвал сайта */}
      <section id="footer">
        <Footer />
      </section>
    </PageLayout>
  );
}
