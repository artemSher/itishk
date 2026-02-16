import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Школа программирования для детей 5-15 лет",
  description:
    "Очные курсы по программированию для детей 5-15 лет. Оборудованные классы, группы по возрасту. Первый урок бесплатно!",
  openGraph: {
    title: "Школа программирования для детей 5-15 лет | Айтишкино",
    description:
      "Очные курсы по программированию для детей 5-15 лет. Оборудованные классы, группы по возрасту. Первый урок бесплатно!",
  },
  alternates: {
    canonical: "/offline/programming",
  },
};

export default function OfflineProgrammingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
