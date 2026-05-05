import { useEffect, useState } from "react";
import { Menu, X, Send } from "lucide-react";
import { MAX_LINK } from "@/lib/links";

const NAV = [
  { href: "#services", label: "Что ремонтирую" },
  { href: "#process", label: "Как проходит работа" },
  { href: "#prices", label: "Цены" },
  { href: "#works", label: "Работы" },
  { href: "#reviews", label: "Отзывы" },
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
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "bg-background"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-8 md:py-4">
        {/* Лого */}
        <a href="#top" className="flex items-center gap-3 group">
          <span
            aria-hidden
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-display text-lg font-semibold text-primary"
          >
            ВК
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold text-foreground">
              Вова Карло
            </span>
            <span className="hidden text-xs text-muted-foreground sm:block">
              Ремонт диванов и мягкой мебели
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Основная навигация">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-foreground/75 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:text-foreground focus-visible:underline underline-offset-4"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA + бургер */}
        <div className="flex items-center gap-2">
          {/* MAX_LINK_PLACEHOLDER — заменить в src/lib/links.ts */}
          <a
            href={MAX_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Send className="h-4 w-4" aria-hidden />
            Отправить фото в MAX
          </a>

          <button
            type="button"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav
            className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3"
            aria-label="Мобильная навигация"
          >
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base text-foreground/85 hover:bg-surface hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            {/* MAX_LINK_PLACEHOLDER — заменить в src/lib/links.ts */}
            <a
              href={MAX_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="md:hidden mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-hover"
            >
              <Send className="h-4 w-4" aria-hidden />
              Отправить фото в MAX
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
