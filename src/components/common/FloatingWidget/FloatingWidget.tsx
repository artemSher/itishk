"use client";

import { useEffect, useState, type ReactElement } from "react";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Send,
  Instagram,
  Youtube,
  X,
  Plus,
} from "lucide-react";

export type FloatingWidgetProps = {
  phone?: string;
  whatsapp?: string;
  telegram?: string;
  instagram?: string;
  youtube?: string;
  vk?: string;
  tiktok?: string;
};

function formatTelHref(phone?: string) {
  if (!phone) return undefined;
  const normalized = phone.replace(/[^+\d]/g, "");
  return `tel:${normalized}`;
}

function buildWhatsAppHref(whatsapp?: string) {
  if (!whatsapp) return undefined;
  const digits = whatsapp.replace(/\D/g, "");
  if (!digits) return undefined;
  return `https://wa.me/${digits}`;
}

function buildTelegramHref(telegram?: string) {
  if (!telegram) return undefined;
  const handle = telegram.replace(/^@/, "");
  return `https://t.me/${handle}`;
}

function buildVkHref(vk?: string) {
  if (!vk) return undefined;
  const handle = vk.replace(/^@/, "");
  return `https://vk.com/${handle}`;
}

function buildTikTokHref(tiktok?: string) {
  if (!tiktok) return undefined;
  if (tiktok.startsWith("http://") || tiktok.startsWith("https://"))
    return tiktok;
  const handle = tiktok.replace(/^@/, "");
  return `https://www.tiktok.com/@${handle}`;
}

function VkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M0 23.04C0 12.1788 0 6.74826 3.37413 3.37413C6.74826 0 12.1788 0 23.04 0h1.92C35.8212 0 41.2517 0 44.6259 3.37413C48 6.74826 48 12.1788 48 23.04v1.92C48 35.8212 48 41.2517 44.6259 44.6259C41.2517 48 35.8212 48 24.96 48h-1.92C12.1788 48 6.74826 48 3.37413 44.6259C0 41.2517 0 35.8212 0 24.96v-1.92Z"
        fill="#0077FF"
      />
      <path
        d="M25.54 34.5801C14.6 34.5801 8.3601 27.0801 8.1001 14.6001H13.5801C13.7601 23.7601 17.8201 27.6401 21.0401 28.4401V14.6001H26.1602V22.5001C29.3402 22.1601 32.7402 18.5601 33.8602 14.6001H38.9803C38.1803 19.4801 34.4403 23.0801 31.7603 24.5601C34.4403 25.7601 38.7803 28.9201 40.4003 34.5801H34.8203C33.5403 30.7801 30.4803 27.8601 26.1602 27.4401V34.5801H25.54Z"
        fill="white"
      />
    </svg>
  );
}

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M34.3171 4H27.2196V30.6405C27.2196 34.0732 24.4206 36.8588 20.9825 36.8588C17.5444 36.8588 14.7454 34.0732 14.7454 30.6405C14.7454 27.2586 17.4936 24.5238 20.8301 24.4223V17.2623C13.5841 17.3638 7.75 23.2541 7.75 30.6405C7.75 38.0777 13.6858 44.0188 21.0333 44.0188C28.3808 44.0188 34.3171 38.0269 34.3171 30.6405V16.2989C37.0144 18.2689 40.3509 19.4367 43.9417 19.4875V12.3275C38.9702 12.1244 34.3171 8.0988 34.3171 4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TelegramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4Z"
        fill="#29B6F6"
      />
      <path
        d="M34.4 15.2L13.6 23.2C12.4 23.6 12.4 24.4 13.4 24.7L18.6 26.4L31 18.6C31.6 18.2 32.2 18.4 31.8 18.8L22.2 27.6L21.8 32.6C22.4 32.6 22.7 32.3 23 32L25.6 29.5L30.8 33.4C31.8 33.9 32.5 33.7 32.8 32.6L36.2 16.6C36.5 15.2 35.6 14.6 34.6 15.1L34.4 15.2Z"
        fill="white"
      />
    </svg>
  );
}
function WhatsappIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {/* фон-квадрат как у VkIcon */}
      <path
        d="M0 23.04C0 12.1788 0 6.74826 3.37413 3.37413C6.74826 0 12.1788 0 23.04 0h1.92C35.8212 0 41.2517 0 44.6259 3.37413C48 6.74826 48 12.1788 48 23.04v1.92C48 35.8212 48 41.2517 44.6259 44.6259C41.2517 48 35.8212 48 24.96 48h-1.92C12.1788 48 6.74826 48 3.37413 44.6259C0 41.2517 0 35.8212 0 24.96v-1.92Z"
        fill="#25D366"
      />
      {/* белый круг + хвостик снизу (пузырь чата) */}
      <path
        d="M24 11C17.924 11 13 15.924 13 22C13 24.294 13.69 26.43 14.97 28.25L13.6 33L18.52 31.67C20.276 32.69 22.31 33.2 24.36 33.2C30.436 33.2 35.36 28.276 35.36 22.2C35.36 16.124 30.436 11.2 24.36 11.2H24Z"
        fill="white"
      />
      {/* трубка внутри круга */}
      <path
        d="M29.18 26.32C28.86 26.18 27.13 25.33 26.84 25.22C26.54 25.1 26.33 25.05 26.12 25.35C25.92 25.65 25.33 26.32 25.15 26.52C24.98 26.71 24.8 26.73 24.48 26.59C22.88 25.9 21.62 24.86 20.62 23.5C20.46 23.25 20.5 23.07 20.64 22.93C20.78 22.79 20.98 22.53 21.12 22.35C21.26 22.17 21.31 22.03 21.42 21.82C21.54 21.61 21.5 21.43 21.42 21.29C21.34 21.15 20.64 19.47 20.37 18.86C20.1 18.25 19.83 18.34 19.61 18.34C19.42 18.33 19.2 18.33 18.98 18.33C18.76 18.33 18.41 18.41 18.15 18.71C17.89 19.01 17.19 19.67 17.19 21.01C17.19 22.34 18.13 23.63 18.26 23.82C18.4 24.01 20.18 26.67 22.89 27.82C24.06 28.33 24.9 28.58 25.44 28.73C26.42 28.99 27.33 28.95 28.03 28.84C28.82 28.71 30.14 28.01 30.47 27.19C30.8 26.37 30.8 25.69 30.7 25.54C30.6 25.39 30.38 25.31 30.06 25.17Z"
        fill="#25D366"
      />
    </svg>
  );
}

export default function FloatingWidget({
  phone = "+7 (495) 123 35-85",
  whatsapp,
  telegram,
  instagram,
  youtube,
  vk,
  tiktok,
}: FloatingWidgetProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    setMounted(true);
    const updateViewport = () => setIsDesktop(window.innerWidth >= 1024);
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  const insetBottom = "var(--safe-area-inset-bottom)";
  const insetRight = "var(--safe-area-inset-right)";

  const actions = [
    tiktok && {
      key: "tiktok",
      href: buildTikTokHref(tiktok),
      label: "Мы в TikTok",
      icon: <TikTokIcon className="h-5 w-5" />,
      bg: "bg-black",
    },
    telegram && {
      key: "tg",
      href: buildTelegramHref(telegram),
      label: "Мы в Telegram",
      icon: <TelegramIcon className="h-10 w-10" />,
      bg: "bg-[#29B6F6]",
    },
    whatsapp && {
      key: "wa",
      href: buildWhatsAppHref(whatsapp),
      label: "Мы в WhatsApp",
      icon: <WhatsappIcon className="h-20 w-20" />,
      bg: "bg-[#25D366]",
    },
    vk && {
      key: "vk",
      href: buildVkHref(vk),
      label: "Мы во ВКонтакте",
      icon: <VkIcon className="h-10 w-10" />,
      bg: "bg-[#FFFFFF]",
    },
    {
      key: "call",
      href: formatTelHref(phone),
      label: "Позвонить",
      icon: <Phone className="h-5 w-5" />,
      bg: "bg-[#00B18F]",
    },
  ].filter(Boolean) as Array<{
    key: string;
    href?: string;
    label: string;
    icon: ReactElement;
    bg: string;
  }>;

  if (!mounted) return null;

  return (
    <div
      className={`fixed z-50 flex flex-col items-end pointer-events-none`}
      style={{
        bottom: `calc(1rem + ${insetBottom})`,
        right: `calc(1rem + ${insetRight})`,
      }}
      aria-live="polite"
    >
      {/* Panel */}
      <div
        className={[
          "transition-all duration-200 ease-out origin-bottom-right pointer-events-auto",
          open
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-2 scale-95 pointer-events-none",
        ].join(" ")}
      >
        <div className="mb-3 w-56 rounded-2xl border border-gray-200 bg-white/95 shadow-xl backdrop-blur-sm">
          <div className="px-4 pt-3 pb-2">
            <p className="text-sm font-semibold text-gray-900">Мы на связи</p>
            <p className="mt-0.5 text-xs text-gray-500">
              Выберите удобный способ связи
            </p>
          </div>
          <div className="px-2 pb-2">
            <ul className="flex flex-col gap-2">
              {actions.map((a) => (
                <li key={a.key}>
                  {a.href ? (
                    <Link
                      href={a.href}
                      target={a.key !== "call" ? "_blank" : undefined}
                      rel={a.key !== "call" ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-3 rounded-xl border border-gray-200/70 bg-white px-3 py-2.5 text-sm text-gray-900 shadow-sm transition hover:border-gray-300 hover:bg-gray-50"
                      aria-label={a.label}
                    >
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-lg text-white ${a.bg}`}
                      >
                        {a.icon}
                      </span>
                      <span className="flex-1">{a.label}</span>
                    </Link>
                  ) : (
                    <div className="flex items-center gap-3 rounded-xl border border-gray-200/70 bg-white px-3 py-2.5 text-sm text-gray-400">
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-lg text-white ${a.bg}`}
                      >
                        {a.icon}
                      </span>
                      <span className="flex-1">{a.label}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#00B18F] text-white shadow-lg transition hover:scale-105 hover:bg-[#00997a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B18F]/30"
        aria-label={open ? "Закрыть виджет связи" : "Открыть виджет связи"}
      >
        <span className="sr-only">Contact widget toggle</span>
        <div className="transition-transform duration-200">
          {open ? <X className="h-6 w-6" /> : <Plus className="h-7 w-7" />}
        </div>
      </button>
    </div>
  );
}
