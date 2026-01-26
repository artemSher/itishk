import React from "react";
import type { Metadata, Viewport } from "next";
import { WebVitals } from "@/components/analytics/WebVitals";
import { Analytics } from "@/components/analytics/Analytics";

import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  maximumScale: 5,
  userScalable: true,
  themeColor: "#00b18f",
};

export const metadata: Metadata = {
  title: "Айтишкино",
  description: "Школа программирования и робототехники.",
  metadataBase: new URL("https://itishkino.ru"),
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        {/* Critical CSS — минимальный */}
        <style>{`
          html, body {
            margin: 0;
            background: #ffffff;
            color: #171717;
            font-family: 'SF Pro Text', system-ui, -apple-system;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          h1 {
            font-weight: 700;
            line-height: 1.2;
          }
          
          /* Critical hero styles для быстрой отрисовки */
          .hero-section {
            min-height: 100vh;
            display: flex;
            align-items: center;
            background: #ffffff;
          }
          
          /* Prevent layout shift */
          img {
            max-width: 100%;
            height: auto;
          }
        `}</style>

        {/* INLINE font-face — НЕ render-blocking */}
        <style>{`
          @font-face {
            font-family: "SF Pro Text";
            src: url("/fonts/SFProText-Regular.woff2") format("woff2");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: "SF Pro Text";
            src: url("/fonts/SFProText-Bold.woff2") format("woff2");
            font-weight: 700;
            font-style: normal;
            font-display: swap;
          }
        `}</style>

        {/* DNS prefetch для внешних доменов */}
        <link rel="dns-prefetch" href="https://mc.yandex.ru" />
        <link rel="dns-prefetch" href="https://mc.yandex.com" />

        {/* preconnect для критических ресурсов */}
        <link
          rel="preconnect"
          href="https://mc.yandex.ru"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://mc.yandex.com"
          crossOrigin="anonymous"
        />

        {/* Prefetch DNS для CDN если используется */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* preload ТОЛЬКО критических шрифтов */}
        <link
          rel="preload"
          href="/fonts/SFProText-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/SFProText-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>

      <body className="font-sans antialiased">
        <WebVitals />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
