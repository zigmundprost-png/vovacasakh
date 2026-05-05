import {
  Image as ImageIcon,
  Wrench,
  Sparkles,
  Sofa,
  Camera,
  MessageCircleQuestion,
  Truck,
  ArrowRight,
  Video,
} from "lucide-react";
import { MAX_LINK } from "@/lib/links";

const VALUE_PROPS = [
  { icon: Sofa, text: "Диваны, кресла, стулья и кровати" },
  { icon: Camera, text: "Можно начать с фото или видео" },
  { icon: MessageCircleQuestion, text: "Скажу честно, есть ли смысл ремонтировать" },
  { icon: Truck, text: "Если нужно — заберу и верну обратно" },
];

const STATS = [
  { value: "20+ лет", label: "в мебельной работе" },
  { value: "от 5 000 ₽", label: "стоимость ремонта" },
  { value: "700 ₽", label: "выезд по Южно-Сахалинску" },
  { value: "до 1 года", label: "гарантия на работу" },
];

export function Hero() {
  return (
    <section id="top" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-14 md:px-8 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:items-center">
          {/* Текст */}
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-[13px] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
              Южно-Сахалинск и юг Сахалина
            </span>

            <h1 className="mt-5 text-[40px] font-semibold leading-[1.1] tracking-tight text-foreground sm:text-[52px] lg:text-[58px]">
              Ремонт диванов
              <br />
              и мягкой мебели
              <br />
              <span className="text-muted-foreground">по фото и видео.</span>
            </h1>

            <p className="mt-6 text-[17px] leading-relaxed text-muted-foreground">
              Пришлите фото или видео поломки — Владимир посмотрит, скажет, есть
              ли смысл ремонтировать, и восстановит мебель. Если дома чинить
              неудобно — заберём и вернём обратно.
            </p>

            {/* Ключевые ценности — заметная иерархия с первого взгляда */}
            <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
              {VALUE_PROPS.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-2.5 text-[14px] text-foreground/90">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                    <Icon className="h-3 w-3" aria-hidden />
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            {/* CTA-блок */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              {/* MAX_LINK_PLACEHOLDER — заменить в src/lib/links.ts */}
              <a
                href={MAX_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 text-[16px] font-semibold text-primary-foreground shadow-[0_8px_24px_-8px_oklch(0.665_0.155_47/0.55)] ring-1 ring-primary/20 transition-all hover:bg-primary-hover hover:shadow-[0_10px_28px_-8px_oklch(0.665_0.155_47/0.65)] hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Отправить фото или видео в MAX
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center text-[14px] font-medium text-foreground/75 underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:text-foreground focus-visible:underline"
              >
                Что ремонтирую →
              </a>
            </div>

            <p className="mt-4 flex items-start gap-2 text-[13px] text-muted-foreground">
              <Video className="mt-0.5 h-3.5 w-3.5 shrink-0 text-foreground/50" aria-hidden />
              <span>
                Удобнее всего — короткое видео: мебель целиком, место поломки и как
                проявляется проблема.
              </span>
            </p>

            {/* Строка доверия с цифрами */}
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border pt-6 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.value}>
                  <dt className="text-[16px] font-semibold tracking-tight text-foreground">
                    {s.value}
                  </dt>
                  <dd className="mt-0.5 text-[12px] leading-snug text-muted-foreground">
                    {s.label}
                  </dd>
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
