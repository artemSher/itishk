import type { Metadata, Viewport } from "next";
import "./globals.css";
import SchemaScript from "./SchemaScriptNew";
import OrganizationSchema from "@/components/seo/OrganizationSchema";

// Viewport settings for proper mobile rendering
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
  userScalable: false
};

export const metadata: Metadata = {
  title: "Айтишкино",
  description: "Онлайн-школа программирования и робототехники.",
  keywords: ["программирование для детей", "обучение детей программированию", "курсы по программированию", "робототехника для детей", "IT-школа для детей"],
  
  openGraph: {
    title: "Айтишкино",
    description: "Онлайн-обучение программированию и робототехнике для детей 8-17 лет. Первое занятие бесплатно!",
    url: "https://aitishkino.ru",
    siteName: "Айтишкино",
    images: [{
      url: "/images/og-image.jpg",
      width: 1200,
      height: 630,
    }],
    locale: 'ru_RU',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Айтишкино - Школа программирования для детей",
    description: "Онлайн-обучение программированию и робототехнике для детей 8-17 лет",
    images: ["/images/og-image.jpg"], 
  },
  
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Айтишкино',
  },
  
  formatDetection: {
    telephone: false,
  },
  
  metadataBase: new URL('https://aitishkino.ru'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'google-site-verification=your-verification-code',
    yandex: 'yandex-verification=your-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full">
      <head>
        {/* Preload критичных шрифтов */}
        <link
          rel="preload"
          href="/fonts/SFProText-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/SFProText-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* DNS prefetch для внешних ресурсов */}
        <link rel="dns-prefetch" href="https://docs.google.com" />
        <link rel="dns-prefetch" href="https://yandex.ru" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <OrganizationSchema />
        <SchemaScript />
      </body>
    </html>
  );
}
