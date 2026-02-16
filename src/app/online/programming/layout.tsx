import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Онлайн-школа программирования для детей",
  description:
    "Онлайн-курсы по программированию для детей 5-15 лет. Индивидуальный формат, гибкое расписание. Первый урок бесплатно!",
  openGraph: {
    title: "Онлайн-школа программирования для детей | Айтишкино",
    description:
      "Онлайн-курсы по программированию для детей 5-15 лет. Индивидуальный формат, гибкое расписание. Первый урок бесплатно!",
  },
  alternates: {
    canonical: "/online/programming",
  },
};

export default function OnlineProgrammingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
