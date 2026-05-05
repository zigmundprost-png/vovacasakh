import {
  Image as ImageIcon,
  Wrench,
  Sparkles,
  ArrowRight,
  Sofa,
  Video,
  ShieldCheck,
  Truck,
  Lightbulb,
  MapPin,
  Award,
  Wallet,
  Car,
  CheckCircle2,
} from "lucide-react";
import { MAX_LINK } from "@/lib/links";
import { MaxLogo } from "./MaxLogo";


const VALUE_PROPS = [
  { icon: Sofa, text: "Ремонтирую диваны, кресла, стулья и кровати" },
  { icon: Video, text: "Начнём с фото или видео — так проще" },
  { icon: ShieldCheck, text: "По-человечески объясню, что сломалось" },
  { icon: Truck, text: "Если нужно — заберу и привезу обратно" },
];

const TRUST_STATS = [
  { icon: Award, value: "20+ лет", label: "работаю с мебелью" },
  { icon: CheckCircle2, value: "500+", label: "ремонтов сделал" },
  { icon: Wallet, value: "от 5 000 ₽", label: "ремонт мягкой мебели" },
  { icon: Car, value: "700 ₽", label: "выезд и диагностика" },
];

export function Hero() {
  return (
    <section id="top" className="bg-background">
      <div className="mx-auto max-w-6xl px-5 pt-8 pb-12 sm:px-6 md:px-8 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:items-start">
          {/* Текст */}
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-[13px] font-medium text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden />
              Южно-Сахалинск и юг Сахалина
            </span>

            <h1 className="font-display mt-5 text-[34px] font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-[52px] lg:text-[60px]">
              Сломался диван?
              <br />
              <span className="relative inline-block text-primary">
                Не спешите покупать новый
                <svg
                  aria-hidden
                  viewBox="0 0 320 14"
                  preserveAspectRatio="none"
                  className="pointer-events-none absolute -bottom-1.5 left-0 h-2.5 w-full text-[color:var(--accent-warm)]"
                >
                  <path
                    d="M2 8 C 60 2, 140 12, 220 6 S 310 4, 318 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-6 text-[16px] leading-[1.6] text-muted-foreground sm:text-[17px]">
              Меня зовут Владимир, я частный мастер по ремонту мягкой мебели.
              Покажите поломку на фото или видео — скажу, есть ли смысл ремонта.
            </p>

            {/* Feature cards */}
            <ul className="mt-7 grid gap-2.5">
              {VALUE_PROPS.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-center gap-3 rounded-2xl border border-[color:var(--card-soft-border)] bg-card px-4 py-3.5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color:var(--card-soft)] text-primary">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden />
                  </span>
                  <span className="text-[15px] font-medium leading-snug text-foreground">{text}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={MAX_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex min-h-[56px] w-full items-center justify-center gap-2.5 rounded-[20px] bg-primary px-7 text-[16px] font-bold text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
              >
                <MaxLogo className="h-6 w-6 shrink-0" />
                Написать в MAX
              </a>

              <a
                href="#brief"
                className="inline-flex min-h-[56px] w-full items-center justify-center gap-2 rounded-[20px] border-2 border-[color:var(--accent-warm)] bg-card px-7 text-[16px] font-bold text-[color:var(--accent-warm)] transition-colors hover:bg-[oklch(0.98_0.025_45)] sm:w-auto"
              >
                Заполнить заявку на ремонт
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>

            {/* Подсказка */}
            <div className="mt-5 flex items-start gap-3 rounded-2xl border border-border bg-card px-4 py-3.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[oklch(0.96_0.04_35)] text-[color:var(--accent-warm)]">
                <Lightbulb className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden />
              </span>
              <p className="text-[14px] leading-relaxed text-foreground/80">
                Лучше короткое видео: покажите мебель целиком, место поломки и как проявляется проблема — мне будет проще понять.
              </p>
            </div>

            {/* Полоса доверия с цифрами */}
            <dl className="mt-8 grid grid-cols-2 gap-3 border-t border-border pt-6 sm:grid-cols-4 sm:gap-4">
              {TRUST_STATS.map(({ icon: Icon, value, label }) => (
                <div
                  key={value}
                  className="rounded-2xl border border-[color:var(--card-soft-border)] bg-card p-4 transition-colors hover:border-primary/30"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--card-soft)] text-primary">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden />
                  </span>
                  <dt className="font-display mt-3 text-[18px] font-extrabold leading-tight text-foreground">
                    {value}
                  </dt>
                  <dd className="mt-0.5 text-[12px] leading-snug text-muted-foreground">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Визуальный блок */}
          <div className="hidden lg:block lg:sticky lg:top-24">
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
              Мои реальные работы — добавлю фото перед запуском.
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
    <div className={`relative ${aspect} overflow-hidden rounded-2xl border border-[color:var(--card-soft-border)] bg-[color:var(--card-soft)] ${className}`}>
      <div className="absolute inset-0 flex flex-col justify-between p-4">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-card text-primary">
          {icon}
        </span>
        <span className="text-[13px] font-semibold text-foreground/70">{label}</span>
      </div>
    </div>
  );
}
