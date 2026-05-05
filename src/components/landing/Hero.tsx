import { Send, ArrowDown, Image as ImageIcon, Wrench, Sparkles } from "lucide-react";
import { MAX_LINK } from "@/lib/links";

const TRUST_BITS = [
  "20+ лет в мебельной работе",
  "Диагностика по фото/видео",
  "Ремонт от 5 000 ₽",
  "Выезд по Южно-Сахалинску — 700 ₽",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
    >
      {/* Деликатное тёплое свечение в фоне */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--color-primary)/8%,transparent_60%)]"
      />

      <div className="mx-auto max-w-6xl px-4 pt-10 pb-16 md:px-8 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:items-center">
          {/* Текстовая колонка */}
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
              Южно-Сахалинск и юг Сахалина
            </span>

            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] text-foreground sm:text-5xl lg:text-[3.5rem]">
              Сломался диван?{" "}
              <span className="text-primary">Не спешите покупать новый</span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-foreground/80 sm:text-lg">
              Владимир посмотрит поломку по фото или видео, скажет, есть ли смысл
              ремонтировать, и восстановит диван, кресло, стул или кровать. Если
              дома чинить неудобно — мебель можно забрать и вернуть обратно.
            </p>

            {/* Доверительная строка */}
            <ul className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
              {TRUST_BITS.map((bit, i) => (
                <li key={bit} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden className="text-border">·</span>}
                  <span>{bit}</span>
                </li>
              ))}
            </ul>

            {/* Кнопки */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              {/* MAX_LINK_PLACEHOLDER — заменить в src/lib/links.ts */}
              <a
                href={MAX_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Send className="h-4 w-4" aria-hidden />
                Отправить фото или видео в MAX
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-surface hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Посмотреть, что ремонтируется
                <ArrowDown className="h-4 w-4" aria-hidden />
              </a>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              Лучше прислать короткое видео: мебель целиком, место поломки и как
              проявляется проблема.
            </p>
          </div>

          {/* Визуальный блок с placeholder-карточками */}
          <div className="relative">
            <div className="grid grid-cols-5 grid-rows-6 gap-3 sm:gap-4">
              <PlaceholderCard
                label="Фото до"
                icon={<ImageIcon className="h-5 w-5" />}
                className="col-span-3 row-span-3"
              />
              <PlaceholderCard
                label="Фото после"
                icon={<Sparkles className="h-5 w-5" />}
                className="col-span-2 row-span-3"
              />
              <PlaceholderCard
                label="Процесс ремонта"
                icon={<Wrench className="h-5 w-5" />}
                className="col-span-5 row-span-3"
                tall
              />
            </div>
            <p className="mt-4 text-xs italic text-muted-foreground">
              Реальные работы мастера — фото будут заменены перед запуском.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlaceholderCard({
  label,
  icon,
  className = "",
  tall = false,
}: {
  label: string;
  icon: React.ReactNode;
  className?: string;
  tall?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-border bg-surface ${className}`}
    >
      {/* мягкий «тканевый» паттерн */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--color-surface-strong) 0 2px, transparent 2px 12px)",
        }}
      />
      <div className={`relative flex h-full ${tall ? "min-h-[160px]" : "min-h-[120px]"} flex-col justify-between p-4`}>
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-primary backdrop-blur-sm">
          {icon}
        </span>
        <span className="text-sm font-medium text-foreground/85">{label}</span>
      </div>
    </div>
  );
}
