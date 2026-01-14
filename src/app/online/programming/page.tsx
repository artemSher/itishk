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
