import { Image as ImageIcon, Wrench, Sparkles } from "lucide-react";
import { MAX_LINK } from "@/lib/links";

const TRUST_BITS = [
  "20+ лет в мебельной работе",
  "Диагностика по фото/видео",
  "Ремонт от 5 000 ₽",
  "Выезд по Южно-Сахалинску — 700 ₽",
];

export function Hero() {
  return (
    <section id="top" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 pt-12 pb-16 md:px-8 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:items-center">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-[13px] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
              Южно-Сахалинск и юг Сахалина
            </span>

            <h1 className="mt-5 text-[40px] font-semibold leading-[1.1] tracking-tight text-foreground sm:text-[52px] lg:text-[58px]">
              Сломался диван?
              <br />
              <span className="text-muted-foreground">Не спешите покупать новый.</span>
            </h1>

            <p className="mt-6 text-[17px] leading-relaxed text-muted-foreground">
              Владимир посмотрит поломку по фото или видео, скажет, есть ли смысл
              ремонтировать, и восстановит диван, кресло, стул или кровать. Если
              дома чинить неудобно — мебель можно забрать и вернуть обратно.
            </p>

            <ul className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-[14px] text-muted-foreground">
              {TRUST_BITS.map((bit, i) => (
                <li key={bit} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden className="text-border">·</span>}
                  <span>{bit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              {/* MAX_LINK_PLACEHOLDER — заменить в src/lib/links.ts */}
              <a
                href={MAX_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-[15px] font-medium text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Отправить фото или видео в MAX
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-6 py-3.5 text-[15px] font-medium text-foreground transition-colors hover:border-foreground/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Посмотреть, что ремонтируется
              </a>
            </div>

            <p className="mt-4 text-[13px] text-muted-foreground">
              Лучше прислать короткое видео: мебель целиком, место поломки и как
              проявляется проблема.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <PlaceholderCard label="Фото до" icon={<ImageIcon className="h-4 w-4" />} aspect="aspect-[4/5]" />
              <PlaceholderCard label="Фото после" icon={<Sparkles className="h-4 w-4" />} aspect="aspect-[4/5]" />
              <PlaceholderCard
                label="Процесс ремонта"
                icon={<Wrench className="h-4 w-4" />}
                aspect="aspect-[16/9]"
                className="col-span-2"
              />
            </div>
            <p className="mt-4 text-[12px] text-muted-foreground">
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
  aspect,
  className = "",
}: {
  label: string;
  icon: React.ReactNode;
  aspect: string;
  className?: string;
}) {
  return (
    <div className={`relative ${aspect} overflow-hidden rounded-xl border border-border bg-card ${className}`}>
      <div className="absolute inset-0 flex flex-col justify-between p-4">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-surface text-muted-foreground">
          {icon}
        </span>
        <span className="text-[13px] font-medium text-muted-foreground">{label}</span>
      </div>
    </div>
  );
}
