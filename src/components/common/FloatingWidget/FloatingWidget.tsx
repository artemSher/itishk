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
  if (tiktok.startsWith("http://") || tiktok.startsWith("https://")) return tiktok;
  const handle = tiktok.replace(/^@/, "");
  return `https://www.tiktok.com/@${handle}`;
}

function VkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M21.547 7H2.453A2.453 2.453 0 0 0 0 9.453v5.094A2.453 2.453 0 0 0 2.453 17h19.094A2.453 2.453 0 0 0 24 14.547V9.453A2.453 2.453 0 0 0 21.547 7zm-7.124 7.408s.195.192.073.29c-.122.098-.659.098-.659.098s-.293.024-.488-.183c-.22-.234-.427-.844-.588-.844-.161 0-.317.39-.317.39s-.122.537-.39.805c-.268.268-.561.22-.561.22l-.244-.024s-.537-.049-1.122-.756c-.634-.756-1.195-2.268-1.195-2.268s-.073-.171-.195-.268c-.122-.098-.317-.098-.317-.098H7.59s-.268 0-.366.122c-.098.122 0 .39 0 .39s.878 2.049 1.878 3.073c.927.951 1.951.878 1.951.878h.756s.22.024.341-.122c.098-.122.098-.39.098-.39s-.024-.756.341-1.024c.366-.268.878.878 1.415 1.268.39.293.707.22.707.22l1.415-.024s.756-.049.39-.659c-.024-.049-.195-.439-.976-1.244-.829-.854-.707-.707.268-2.171.585-.878.829-1.415.756-1.634-.073-.22-.512-.171-.512-.171l-1.585.012s-.122-.012-.195.037c-.073.049-.122.171-.122.171s-.22.585-.512 1.073c-.634 1.049-.878 1.098-1 1.024-.268-.171-.195-.707-.195-.707s0-1.171.122-1.659c.073-.293-.049-.415-.049-.415s-.171-.22-.488-.317c-.244-.073-.585-.098-.585-.098s-1.39-.012-2.024.012c-.39.012-.659.122-.659.122s.341.049.488.22c.195.22.195.707.195.707s.098 1.293-.244 1.463c-.244.122-.561-.122-1.268-1.22-.366-.561-.634-1.171-.634-1.171s-.049-.122-.122-.195c-.098-.073-.22-.098-.22-.098l-1.512.012s-.22 0-.293.098c-.073.073-.012.244-.012.244s.878 2.049 1.878 3.073c.927.951 1.951.878 1.951.878z"/>
    </svg>
  );
}

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.5 4.5c.6 1.1 1.6 2 2.8 2.4l1.2.4v3a6 6 0 0 1-3.4-1.1v5.7A5.1 5.1 0 0 1 12 19.9 5.1 5.1 0 0 1 6.9 15a5.1 5.1 0 0 1 5.1-5.1h.6v3a2.1 2.1 0 1 0 0 3.9V4.5h3.9Z" />
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
      label: "Написать в Telegram",
      icon: <Send className="h-5 w-5" />,
      bg: "bg-[#229ED9]",
    },
    whatsapp && {
      key: "wa",
      href: buildWhatsAppHref(whatsapp),
      label: "Написать в WhatsApp",
      icon: <MessageCircle className="h-5 w-5" />,
      bg: "bg-[#25D366]",
    },
    vk && {
      key: "vk",
      href: buildVkHref(vk),
      label: "Мы во ВКонтакте",
      icon: <VkIcon className="h-5 w-5" />,
      bg: "bg-[#2787F5]",
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
          open ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-95 pointer-events-none",
        ].join(" ")}
      >
        <div className="mb-3 w-56 rounded-2xl border border-gray-200 bg-white/95 shadow-xl backdrop-blur-sm">
          <div className="px-4 pt-3 pb-2">
            <p className="text-sm font-semibold text-gray-900">Мы на связи</p>
            <p className="mt-0.5 text-xs text-gray-500">Выберите удобный способ связи</p>
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
                      <span className={`flex h-8 w-8 items-center justify-center rounded-lg text-white ${a.bg}`}>{a.icon}</span>
                      <span className="flex-1">{a.label}</span>
                    </Link>
                  ) : (
                    <div className="flex items-center gap-3 rounded-xl border border-gray-200/70 bg-white px-3 py-2.5 text-sm text-gray-400">
                      <span className={`flex h-8 w-8 items-center justify-center rounded-lg text-white ${a.bg}`}>{a.icon}</span>
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