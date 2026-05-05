import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { MAX_LINK, PHONE_LINK, WHATSAPP_LINK } from "@/lib/links";
import { MaxLogo } from "./MaxLogo";
import { WhatsAppIcon } from "./WhatsAppIcon";

const NAV = [
  { href: "#services", label: "Что я ремонтирую" },
  { href: "#process", label: "Как проходит работа" },
  { href: "#prices", label: "Цены" },
  { href: "#works", label: "Работы" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#guarantee", label: "Гарантия" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors ${
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : "bg-background"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-6 md:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span
            aria-hidden
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-hover text-[13px] font-bold text-primary-foreground shadow-[0_4px_12px_-4px_oklch(0.555_0.205_260/0.45)]"
          >
            ВК
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-[17px] font-extrabold tracking-tight text-foreground uppercase">
              ВОВА КАРЛО
            </span>
            <span className="hidden text-[11px] text-muted-foreground sm:block">
              Ремонт диванов и мягкой мебели
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Основная навигация">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14px] text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Написать в WhatsApp"
            className="inline-flex h-10 w-10 items-center justify-center transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-background md:h-11 md:w-11"
          >
            <WhatsAppIcon className="h-10 w-10 md:h-11 md:w-11 drop-shadow-[0_4px_10px_rgba(37,211,102,0.4)]" />
          </a>

          <a
            href={PHONE_LINK}
            aria-label="Позвонить мне"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background transition-colors hover:bg-foreground/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:h-11 md:w-11"
          >
            <Phone className="h-[18px] w-[18px]" strokeWidth={2.4} aria-hidden />
          </a>

          <a
            href="#brief"
            className="hidden md:inline-flex items-center gap-2 rounded-2xl bg-primary px-4 py-2.5 text-[14px] font-bold text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            <MaxLogo className="h-5 w-5" />
            Подготовить заявку
          </a>

          <button
            type="button"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3" aria-label="Мобильная навигация">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-[15px] text-foreground/85 hover:bg-surface hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#brief"
              onClick={() => setOpen(false)}
              className="md:hidden mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 text-[15px] font-bold text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              <MaxLogo className="h-5 w-5" />
              Подготовить заявку
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
