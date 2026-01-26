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
    rating: 5,
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
      <section id="school">
        <SchoolSection
          title={["Школы", "программирования", "для детей"]}
          imageSrc="/images/school/offline-prog.png"
        />
      </section>

      <section id="online-classes">
        <OnlineClassesSection
          title="Очные занятия"
          subtitle="Обучение в классе с преподавателем, живое общение и практика на каждом уроке."
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
        <EarningSection />
      </section>

      <section id="shop">
        <ShopSection />
      </section>

      <section id="courses">
        <CoursesSection
          title="Очные курсы по программированию"
          format="offline"
          category="programming"
        />
      </section>

      <section id="map" style={{ scrollMarginTop: "80px" }}>
        <SchoolsMapSection />
      </section>

      <section id="reviews">
        <Reviews reviews={mockReviews} />{" "}
      </section>

      <section id="faq">
        <FAQSection />
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
