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
import { StudentsSection } from "@/components/sections/students/StudentsSection";

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
      {/* Cookie */}
      <section id="projects" style={{ scrollMarginTop: "80px" }}>
        <StudentsSection />
      </section>
      <CookiePopup />

      {/* Footer */}
      <Footer />
    </PageLayout>
  );
}
