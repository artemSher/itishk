"use client";

import dynamic from "next/dynamic";
import { PageLayout } from "@/components/layout/PageLayout";
import { Footer } from "@/components/sections/footer/Footer";
import { FullscreenTextSection } from "@/components/sections/fullscreen-text/FullscreenTextSection";
import { CookiePopup } from "@/components/ui/CookiePopup/CookiePopup";
import { OnlineClassesSection } from "@/components/sections/online-сlasses/OnlineClassesSection";
import { CoursesSection } from "@/components/sections/courses/CoursesSection";
import { PlatformSection } from "@/components/sections/platform/PlatformSection";
import { EarningSection } from "@/components/sections/earning/EarningSection";
import { FAQSection } from "@/components/sections/faq/FAQSection";
import { SchoolSection } from "@/components/sections/school/school";
import FeaturesSection from "@/components/sections/features/FeaturesSection";
import { Reviews } from "@/components/sections/reviews/Reviews";

// консультация
const ConsultationSection = dynamic(
  () =>
    import("@/components/sections/consultation/ConsultationSection").then(
      (mod) => ({
        default: mod.ConsultationSection,
      }),
    ),
  { ssr: true },
);
const mockReviews = [
  {
    id: "1",
    name: "Имя",
    age: 1,
    avatar: "М",
    course: "Курс",
    rating: 4,
    text: "Текст для отзыва длиной примерно в несколько предложений. Очень понравились занятия, преподаватель объясняет доступно и интересно!",
    mediaType: "image" as const,
    mediaUrl: "/reviews/anya.jpg",
  },
  {
    id: "2",
    name: "Имя",
    age: 1,
    avatar: "А",
    course: "Курс",
    rating: 5,
    text: "Текст для отзыва длиной примерно в несколько предложений. Очень понравились занятия, преподаватель объясняет доступно и интересно!",
    mediaType: "video" as const,
    mediaUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];
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
        <OnlineClassesSection />
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
        <EarningSection />
      </section>

      {/* Онлайн курсы по программированию */}
      <section id="courses">
        <CoursesSection
          title="Онлайн-курсы по программированию"
          format="online"
          category="programming"
        />
      </section>
      <section id="reviews">
        <Reviews reviews={mockReviews} />{" "}
      </section>
      <section id="faq">
        <FAQSection />
      </section>
      {/* Консультация */}
      <section id="contacts" style={{ scrollMarginTop: "80px" }}>
        <ConsultationSection />
      </section>

      {/* Cookie */}
      <CookiePopup />

      {/* Footer */}
      <Footer />
    </PageLayout>
  );
}
