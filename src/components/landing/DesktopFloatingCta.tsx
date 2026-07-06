import { useEffect, useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { PHONE_LINK, PHONE_NUMBER, WHATSAPP_LINK } from "@/lib/links";
import { MaxLogo } from "./MaxLogo";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { openMaxBrief } from "./MaxBriefDialog";

export function DesktopFloatingCta() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <aside
      aria-label="Быстрая связь"
      className={`hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3 transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {/* Раскрывающееся меню */}
      <div
        className={`flex flex-col gap-2 transition-all duration-200 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-2xl border border-border bg-card pl-2 pr-5 py-2 shadow-[0_10px_24px_-12px_rgba(15,23,42,0.25)] transition-all hover:border-[#25D366]/40 hover:shadow-[0_14px_28px_-12px_rgba(37,211,102,0.45)]"
        >
          <WhatsAppIcon className="h-10 w-10 shrink-0" />
          <span className="flex flex-col leading-tight">
            <span className="text-[13px] font-bold text-foreground">WhatsApp</span>
            <span className="text-[11px] text-muted-foreground">Написать в чат</span>
          </span>
        </a>

        <a
          href={PHONE_LINK}
          className="group flex items-center gap-3 rounded-2xl border border-border bg-card pl-2 pr-5 py-2 shadow-[0_10px_24px_-12px_rgba(15,23,42,0.25)] transition-all hover:border-foreground/30 hover:shadow-[0_14px_28px_-12px_rgba(15,23,42,0.4)]"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground text-background">
            <Phone className="h-[18px] w-[18px]" strokeWidth={2.4} aria-hidden />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[13px] font-bold text-foreground">{PHONE_NUMBER}</span>
            <span className="text-[11px] text-muted-foreground">Позвонить мне</span>
          </span>
        </a>

        <button
          type="button"
          onClick={() => {
            setOpen(false);
            openMaxBrief();
          }}
          className="group flex w-full items-center gap-3 rounded-2xl border border-border bg-card pl-2 pr-5 py-2 shadow-[0_10px_24px_-12px_rgba(15,23,42,0.25)] transition-all hover:border-primary/40 hover:shadow-[0_14px_28px_-12px_oklch(0.555_0.205_260/0.45)]"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center">
            <MaxLogo className="h-10 w-10" />
          </span>
          <span className="flex flex-col leading-tight text-left">
            <span className="text-[13px] font-bold text-foreground">MAX</span>
            <span className="text-[11px] text-muted-foreground">Отправить фото или видео</span>
          </span>
        </button>
      </div>

      {/* Главная плавающая кнопка */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Закрыть меню связи" : "Открыть меню связи"}
        aria-expanded={open}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_12px_28px_-8px_oklch(0.555_0.205_260/0.6)] transition-all hover:bg-primary-hover hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {!open && (
          <span aria-hidden className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
        )}
        <span className="relative">
          {open ? (
            <X className="h-6 w-6" strokeWidth={2.4} />
          ) : (
            <MessageCircle className="h-6 w-6" strokeWidth={2.2} />
          )}
        </span>
      </button>
    </aside>
  );
}
