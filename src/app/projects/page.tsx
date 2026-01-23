"use client";

import dynamic from "next/dynamic";
import { PageLayout } from "@/components/layout/PageLayout";
import { Footer } from "@/components/sections/footer/Footer";
import { FullscreenTextSection } from "@/components/sections/fullscreen-text/FullscreenTextSection";
import { CookiePopup } from "@/components/ui/CookiePopup/CookiePopup";

import { StudentsSection } from "@/components/sections/students/StudentsSection";
import Gallery from "@/components/sections/gallery/Gallery";
import AboutSection from "@/components/sections/about/AboutSection";

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
      <section id="about" style={{ scrollMarginTop: "80px" }}>
        <AboutSection />
      </section>

      <section id="projects" style={{ scrollMarginTop: "80px" }}>
        <StudentsSection />
      </section>

      <section id="gallery" style={{ scrollMarginTop: "80px" }}>
        <Gallery />
      </section>
      {/* Cookie */}
      <CookiePopup />

      {/* Footer */}
      <Footer />
    </PageLayout>
  );
}
