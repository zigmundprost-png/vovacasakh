import {
  Image as ImageIcon,
  Wrench,
  Sparkles,
  Send,
  Lightbulb,
  Truck,
  MessageSquare,
  Sofa,
  ArrowRight,
} from "lucide-react";
import { MAX_LINK } from "@/lib/links";

const VALUE_PROPS = [
  { icon: Sofa, text: "Диваны, кресла, стулья и кровати" },
  { icon: MessageSquare, text: "Можно начать с фото или видео" },
  { icon: Lightbulb, text: "Скажу честно, есть ли смысл ремонтировать" },
  { icon: Truck, text: "Если нужно — заберём и вернём обратно" },
];

const TRUST_STATS = [
  { value: "20+ лет", label: "в мебельной работе" },
  { value: "от 5 000 ₽", label: "ремонт" },
  { value: "700 ₽", label: "выезд по Южно-Сахалинску" },
];

export function Hero() {
  return (
    <section id="top" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 pt-12 pb-16 md:px-8 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:items-center">
          {/* Текст */}
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
              Владимир — частный мастер по ремонту мягкой мебели. Посмотрит поломку
              по фото или видео и скажет, есть ли смысл ремонтировать.
            </p>

            {/* Value props — что важно понять с первого взгляда */}
            <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
              {VALUE_PROPS.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-2.5 text-[14px] text-foreground/85">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-3 w-3" aria-hidden />
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              {/* MAX_LINK_PLACEHOLDER — заменить в src/lib/links.ts */}
              <a
                href={MAX_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 text-[16px] font-semibold text-primary-foreground shadow-[0_8px_24px_-8px_oklch(0.5_0.15_155/0.55)] transition-all hover:bg-primary-hover hover:shadow-[0_12px_28px_-8px_oklch(0.5_0.15_155/0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Send className="h-4 w-4" aria-hidden />
                Отправить фото или видео в MAX
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-1.5 text-[14px] font-medium text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline focus-visible:outline-none focus-visible:text-primary focus-visible:underline"
              >
                Что ремонтирую
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </a>
            </div>

            <p className="mt-3 flex items-start gap-2 text-[13px] leading-relaxed text-muted-foreground">
              <span aria-hidden className="mt-[3px] inline-block h-1 w-1 shrink-0 rounded-full bg-muted-foreground/60" />
              Лучше короткое видео: мебель целиком, место поломки и как проявляется проблема.
            </p>

            {/* Полоса доверия с цифрами */}
            <dl className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6">
              {TRUST_STATS.map((s, i) => (
                <div key={s.value} className="flex items-center gap-6">
                  {i > 0 && <span aria-hidden className="hidden sm:block h-8 w-px bg-border" />}
                  <div>
                    <dt className="text-[15px] font-semibold text-foreground">{s.value}</dt>
                    <dd className="text-[12px] text-muted-foreground">{s.label}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          {/* Визуальный блок */}
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
