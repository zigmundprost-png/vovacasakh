import { MAX_LINK } from "@/lib/links";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-[12px] font-semibold text-background"
              >
                ВК
              </span>
              <span className="text-[15px] font-semibold tracking-tight text-foreground uppercase">
                ВОВА КАРЛО
              </span>
            </div>
            <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
              Частный мастер по ремонту диванов и мягкой мебели. Южно-Сахалинск
              и юг Сахалина.
            </p>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-wide text-muted-foreground">
              Разделы
            </h3>
            <ul className="mt-3 grid grid-cols-2 gap-y-1.5 text-[14px]">
              {[
                ["#services", "Что ремонтирую"],
                ["#process", "Как проходит работа"],
                ["#prices", "Цены"],
                ["#works", "Работы"],
                ["#reviews", "Отзывы"],
                ["#guarantee", "Гарантия"],
                ["#faq", "FAQ"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-wide text-muted-foreground">
              Связь
            </h3>
            {/* MAX_LINK_PLACEHOLDER — заменить в src/lib/links.ts */}
            <a
              href={MAX_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-[14px] font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Написать в MAX
            </a>
            <p className="mt-3 text-[13px] text-muted-foreground">
              Отвечаю в течение дня. Лучше прислать фото или короткое видео
              поломки.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-[12px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} ВОВА КАРЛО · Ремонт мягкой мебели</span>
          <span>Южно-Сахалинск · юг Сахалина</span>
        </div>
      </div>
    </footer>
  );
}
