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
import { SchoolsMapSection } from "@/components/sections/map/SchoolsMapSection";

// консультация
const ConsultationSection = dynamic(
  () =>
    import("@/components/sections/consultation/ConsultationSection").then(
      (mod) => ({
        default: mod.ConsultationSection,
      })
    ),
  { ssr: true }
);

export default function OnlineProgrammingPage() {
  return (
    <PageLayout>
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

      <section id="robotics" className="py-20">
        <div className="max-w-[1100px] mx-auto px-5 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0F172A] mb-4">
            Робототехника в «Айтишкино»:
          </h2>
          <p className="text-lg md:text-xl text-[#64748B]">
            от первых механизмов до умных гаджетов
          </p>
        </div>

        <CoursesSection
          title="" // 👈 заголовок уже свой
          format="offline" // или "online", если нужно
          category="robotics"
        />
      </section>

      <section id="map" style={{ scrollMarginTop: "80px" }}>
        <SchoolsMapSection />
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
