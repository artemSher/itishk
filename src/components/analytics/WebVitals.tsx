"use client";

import { useEffect } from "react";
import { useReportWebVitals } from "next/web-vitals";

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log Web Vitals to console in development
    if (process.env.NODE_ENV === "development") {
      console.log("[v0] Web Vitals:", {
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
        delta: metric.delta,
      });
    }

    // Send to analytics in production
    if (process.env.NODE_ENV === "production") {
      // Example: send to your analytics service
      // analytics.track('web-vitals', { ...metric });
      
      // Or use built-in Next.js analytics
      if (window.gtag) {
        window.gtag("event", metric.name, {
          value: Math.round(
            metric.name === "CLS" ? metric.value * 1000 : metric.value
          ),
          event_label: metric.id,
          non_interaction: true,
        });
      }
    }
  });

  return null;
}
