import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Школа робототехники для детей 5-15 лет",
  description:
    "Очные курсы по робототехнике для детей 5-15 лет. Оборудованные классы, группы по возрасту. Первый урок бесплатно!",
  openGraph: {
    title: "Школа робототехники для детей 5-15 лет | Айтишкино",
    description:
      "Очные курсы по робототехнике для детей 5-15 лет. Оборудованные классы, группы по возрасту. Первый урок бесплатно!",
  },
  alternates: {
    canonical: "/offline/robotics",
  },
};

export default function OfflineRoboticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
