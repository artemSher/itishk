"use client";

import dynamic from "next/dynamic";
import { HeroSection } from "../sections/hero/HeroSection";
import { KeyDirectionsSection } from "../sections/key-directions/KeyDirectionsSection";
import { FullscreenTextSection } from "../sections/fullscreen-text/FullscreenTextSection";
import { Footer } from "../sections/footer/Footer";
import { PageLayout } from "../layout/PageLayout";
import { CookiePopup } from "../ui/CookiePopup/CookiePopup";
import { OnlineClassesSection } from "../sections/online-сlasses/OnlineClassesSection";

const YouAreCodeSection = dynamic(
  () =>
    import("../sections/you-are-code/YouAreCodeSection").then((mod) => ({
      default: mod.YouAreCodeSection,
    })),
  { ssr: true }
);

const CoursesSection = dynamic(
  () =>
    import("../sections/courses/CoursesSection").then((mod) => ({
      default: mod.CoursesSection,
    })),
  { ssr: true }
);

const ApproachSection = dynamic(
  () =>
    import("../sections/approach/ApproachSection").then((mod) => ({
      default: mod.ApproachSection,
    })),
  { ssr: true }
);

const AdvantagesSection = dynamic(
  () =>
    import("../sections/advantages/AdvantagesSection").then((mod) => ({
      default: mod.AdvantagesSection,
    })),
  { ssr: true }
);

const PlatformSection = dynamic(
  () =>
    import("../sections/platform/PlatformSection").then((mod) => ({
      default: mod.PlatformSection,
    })),
  { ssr: true }
);

const EarningSection = dynamic(
  () =>
    import("../sections/earning/EarningSection").then((mod) => ({
      default: mod.EarningSection,
    })),
  { ssr: true }
);

const StudentsSection = dynamic(
  () =>
    import("../sections/students/StudentsSection").then((mod) => ({
      default: mod.StudentsSection,
    })),
  { ssr: true }
);

const ShopSection = dynamic(
  () =>
    import("../sections/shop/ShopSection").then((mod) => ({
      default: mod.ShopSection,
    })),
  { ssr: true }
);

const FAQSection = dynamic(
  () =>
    import("../sections/faq/FAQSection").then((mod) => ({
      default: mod.FAQSection,
    })),
  { ssr: true }
);

const ConsultationSection = dynamic(
  () =>
    import("../sections/consultation/ConsultationSection").then((mod) => ({
      default: mod.ConsultationSection,
    })),
  { ssr: true }
);

const ConsultationPopup = dynamic(
  () => import("../ui/ConsultationPopup/ConsultationPopup"),
  { ssr: false }
);

export default function ClientHomePage() {
  return (
    <PageLayout>
      {/* Секция 1: Научись говорить с гаджетами за час! */}
      <section id="home">
        <HeroSection />
      </section>

      {/* Секция 2: Ты — код, который изменит мир */}
      <section id="about">
        <YouAreCodeSection />
      </section>

      {/* Секция 3: Ключевые направления */}
      <section id="courses">
        <KeyDirectionsSection />
        <CoursesSection />
      </section>
      <section id="online classes">
        <OnlineClassesSection />
      </section>
      {/* Секция: Почему выбирают Айтишкино? */}
      <section id="why-us">
        <FullscreenTextSection
          line1="Почему выбирают"
          line2="Айтишкино?"
          backgroundColor="#f8f9fa"
        />
        <ApproachSection />
      </section>

      {/* Секция: Преимущества */}
      <section id="advantages">
        <AdvantagesSection />
      </section>

      {/* Секция: Платформа */}
      <section id="platform">
        <PlatformSection />
      </section>

      {/* Секция: Заработок */}
      <section id="earnings" style={{ scrollMarginTop: "80px" }}>
        <EarningSection />
      </section>

      {/* Секция: Проекты учеников */}
      <section id="projects" style={{ scrollMarginTop: "80px" }}>
        <StudentsSection />
      </section>

      {/* Секция: Магазин */}
      <section id="shop">
        <ShopSection />
      </section>

      {/* Секция: FAQ */}
      <section id="faq">
        <FAQSection />
      </section>

      {/* Секция: Консультация */}
      <section id="contacts">
        <ConsultationSection />
      </section>

      <section id="contacts">
        <CookiePopup />
      </section>

      {/* Подвал сайта */}
      <Footer />
      <ConsultationPopup />
    </PageLayout>
  );
}
