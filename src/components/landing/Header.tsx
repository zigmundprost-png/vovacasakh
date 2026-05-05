import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : "bg-background"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span
            aria-hidden
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-[12px] font-semibold text-background"
          >
            ВК
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[15px] font-semibold tracking-tight text-foreground">
              Вова Карло
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
          {/* MAX_LINK_PLACEHOLDER — заменить в src/lib/links.ts */}
          <a
            href={MAX_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center rounded-lg bg-primary px-4 py-2 text-[14px] font-medium text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Отправить фото в MAX
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
            {/* MAX_LINK_PLACEHOLDER — заменить в src/lib/links.ts */}
            <a
              href={MAX_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="md:hidden mt-2 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-3 text-[15px] font-medium text-primary-foreground hover:bg-primary-hover"
            >
              Отправить фото в MAX
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
