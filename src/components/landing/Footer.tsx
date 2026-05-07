import { MAX_LINK, PHONE_LINK, PHONE_NUMBER, WHATSAPP_LINK } from "@/lib/links";
import { Phone, MapPin, Clock } from "lucide-react";
import { MaxLogo } from "./MaxLogo";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { BrandMark } from "./BrandMark";

const SECTIONS: [string, string][] = [
  ["#about", "О мастере"],
  ["#services", "Что я ремонтирую"],
  ["#process", "Как проходит работа"],
  ["#prices", "Цены"],
  ["#works", "Работы"],
  ["#reviews", "Отзывы"],
  ["#guarantee", "Гарантия"],
  ["#faq", "FAQ"],
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-[color:var(--card-soft)]">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Бренд */}
          <div className="md:col-span-4">
            <a href="#top" className="inline-flex items-center gap-3">
              <BrandMark />
              <span className="font-display text-[17px] font-extrabold tracking-tight text-foreground uppercase">
                ВОВА КАРЛО
              </span>
            </a>
            <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">
              Я частный мастер по ремонту диванов и мягкой мебели. Работаю
              честно: смотрю поломку, объясняю и берусь только за то, что
              реально могу сделать аккуратно.
            </p>

            <ul className="mt-5 space-y-2.5 text-[13px] text-foreground/85">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                Южно-Сахалинск и южная часть Сахалина
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                Отвечаю в течение дня — ежедневно
              </li>
            </ul>
          </div>

          {/* Разделы */}
          <div className="md:col-span-4">
            <h3 className="text-[12px] font-bold uppercase tracking-[0.08em] text-muted-foreground">
              Разделы
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-y-2.5 text-[14px]">
              {SECTIONS.map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-foreground/85 transition-colors hover:text-primary"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Связь */}
          <div className="md:col-span-4">
            <h3 className="text-[12px] font-bold uppercase tracking-[0.08em] text-muted-foreground">
              Связь
            </h3>
            <div className="mt-4 flex flex-col gap-2.5">
              <a
                href={MAX_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3 text-[14px] font-bold text-primary-foreground transition-colors hover:bg-primary-hover"
              >
                <MaxLogo className="h-5 w-5" />
                Написать в MAX
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[color:var(--card-soft-border)] bg-card px-5 py-3 text-[14px] font-bold text-foreground transition-colors hover:bg-[color:var(--card-soft)]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={PHONE_LINK}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[color:var(--card-soft-border)] bg-card px-5 py-3 text-[14px] font-bold text-foreground transition-colors hover:bg-[color:var(--card-soft)]"
              >
                <Phone className="h-4 w-4 text-primary" aria-hidden />
                {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-[12px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} ВОВА КАРЛО · Ремонт мягкой мебели</span>
          <span>Сделано с заботой о ваших диванах</span>
        </div>
      </div>
    </footer>
  );
}
