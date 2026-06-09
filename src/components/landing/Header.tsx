import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Phone,
  User,
  Wrench,
  ListChecks,
  Tag,
  Images,
  Star,
  ShieldCheck,
  HelpCircle,
  Send,
} from "lucide-react";
import { PHONE_LINK, WHATSAPP_LINK } from "@/lib/links";
import { MaxLogo } from "./MaxLogo";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { BrandMark } from "./BrandMark";

type NavItem = {
  href: string;
  label: string;
  hint: string;
  icon: React.ComponentType<{ className?: string }>;
};

const NAV: NavItem[] = [
  { href: "#about", label: "О мастере", hint: "Опыт 20+ лет", icon: User },
  { href: "#services", label: "Что я ремонтирую", hint: "Диваны, кресла, кровати", icon: Wrench },
  { href: "#process", label: "Как проходит работа", hint: "От фото до возврата", icon: ListChecks },
  { href: "#prices", label: "Цены", hint: "От 1000 ₽ за выезд", icon: Tag },
  { href: "#works", label: "Работы", hint: "40+ фото", icon: Images },
  { href: "#reviews", label: "Отзывы", hint: "Реальные люди", icon: Star },
  { href: "#guarantee", label: "Гарантия", hint: "Чиню честно", icon: ShieldCheck },
  { href: "#faq", label: "Вопросы", hint: "Частые ответы", icon: HelpCircle },
  { href: "#brief", label: "Заявка", hint: "Готовый текст в MAX", icon: Send },
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

  // блокировка скролла при открытой панели
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // закрытие по Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors ${
        scrolled || open
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "bg-background"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 md:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <BrandMark className="h-9 w-9 text-[12px]" />
          <span className="font-display text-[15px] font-extrabold tracking-tight text-foreground uppercase whitespace-nowrap sm:text-[17px]">
            ВОВА КАРЛО
          </span>
        </a>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Написать в WhatsApp"
            className="inline-flex h-9 w-9 items-center justify-center transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-background md:h-10 md:w-10"
          >
            <WhatsAppIcon className="h-9 w-9 md:h-10 md:w-10 drop-shadow-[0_4px_10px_rgba(37,211,102,0.4)]" />
          </a>

          <a
            href={PHONE_LINK}
            aria-label="Позвонить мне"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-background transition-colors hover:bg-foreground/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:h-10 md:w-10"
          >
            <Phone className="h-[17px] w-[17px]" strokeWidth={2.4} aria-hidden />
          </a>

          <a
            href="#brief"
            className="hidden sm:inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-primary px-4 py-2 text-[13px] font-bold text-primary-foreground transition-colors hover:bg-primary-hover md:px-5 md:py-2.5 md:text-[14px]"
          >
            <MaxLogo className="h-4 w-4 md:h-5 md:w-5" />
            <span className="hidden md:inline">Отправить фото в MAX</span>
            <span className="md:hidden">MAX</span>
          </a>

          <button
            type="button"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-[color:var(--card-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:h-10 md:w-10"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Выезжающая панель */}
      {open && (
        <>
          <div
            aria-hidden
            onClick={() => setOpen(false)}
            className="fixed inset-x-0 top-[57px] bottom-0 z-30 animate-fade-in bg-foreground/30 backdrop-blur-[2px] md:top-[61px]"
          />
          <div className="absolute inset-x-0 top-full z-40 origin-top animate-fade-in border-b border-border bg-background shadow-[0_20px_40px_-20px_oklch(0_0_0/0.18)]">
            <div className="mx-auto max-w-6xl px-4 py-5 md:px-8 md:py-7">
              <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                {NAV.map(({ href, label, hint, icon: Icon }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-3.5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_8px_20px_-12px_oklch(0.555_0.205_260/0.4)]"
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="flex flex-col leading-tight min-w-0">
                      <span className="text-[14px] font-bold text-foreground truncate">
                        {label}
                      </span>
                      <span className="text-[12px] text-muted-foreground truncate">
                        {hint}
                      </span>
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-5 flex flex-col gap-2 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[13px] text-muted-foreground">
                  Отвечаю в течение дня — пишите в любой удобный мессенджер.
                </p>
                <div className="flex items-center gap-2">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 text-[13px] font-semibold text-foreground hover:bg-[color:var(--card-soft)]"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    WhatsApp
                  </a>
                  <a
                    href="#brief"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-[13px] font-bold text-primary-foreground hover:bg-primary-hover"
                  >
                    <MaxLogo className="h-4 w-4" />
                    Заявка в MAX
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
