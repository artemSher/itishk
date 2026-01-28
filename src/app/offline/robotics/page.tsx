"use client";

import dynamic from "next/dynamic";
import { PageLayout } from "@/components/layout/PageLayout";
import { Footer } from "@/components/sections/footer/Footer";
import { FullscreenTextSection } from "@/components/sections/fullscreen-text/FullscreenTextSection";
import { CookiePopup } from "@/components/ui/CookiePopup/CookiePopup";
import { OnlineClassesSection } from "@/components/sections/online-classes/OnlineClassesSection";
import { CoursesSection } from "@/components/sections/courses/CoursesSection";

import { EarningSection } from "@/components/sections/earning/EarningSection";
import { FAQSection } from "@/components/sections/faq/FAQSection";
import { SchoolsMapSection } from "@/components/sections/map/SchoolsMapSection";
import { SchoolSection } from "@/components/sections/school/school";
import FeaturesSection from "@/components/sections/features/FeaturesSection";
import { ShopSection } from "@/components/sections/shop/ShopSection";
import { Reviews } from "@/components/sections/reviews/Reviews";
import { FAQ_OFFLINE } from "@/components/sections/faq/faqData";

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
      {/* SchoolSection */}
      <section id="school">
        <SchoolSection
          title={["Школы", "Робототехники", "для детей"]}
          imageSrc="/images/school/offline-robot.png"
        />
      </section>

      <section id="online-classes">
        <OnlineClassesSection
          title="Очные занятия"
          subtitle="Обучение в классе с преподавателем, живое общение и практика на каждом уроке."
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

      {/* Секция: Заработок */}
      <section id="earnings" style={{ scrollMarginTop: "80px" }}>
        <EarningSection animationPath="ItShop.json" />
      </section>

      {/* Секция: Магазин */}
      <section id="shop">
        <ShopSection />
      </section>

      <section id="robotics" className="py-20">
        <div className="max-w-[1100px] mx-auto px-5 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0F172A] mb-4">
            Робототехника в «Айтишкино»:
          </h2>
          <p className="text-lg md:text-xl text-[#64748B]">
            от первых механизмов до умных гаджетов
          </p>
        </div>

        <CoursesSection title="" format="offline" category="robotics" />
      </section>

      <section id="map" style={{ scrollMarginTop: "80px" }}>
        <SchoolsMapSection />
      </section>

      <section id="reviews">
        <Reviews reviews={mockReviews} />{" "}
      </section>

      <section id="faq">
        <FAQSection items={FAQ_OFFLINE} />
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
