import { Section } from "./Section";
import { Sofa, Wrench, Check, X, Info } from "lucide-react";

const MAIN = [
  "Ремонт каркаса",
  "Замена или ремонт пружинного блока",
  "Замена поролона и наполнителя",
  "Ремонт механизма раскладывания",
  "Устранение скрипа",
  "Ремонт выкатной части",
  "Ремонт кресел, стульев, кроватей, пуфов",
  "Мелкий ремонт ткани, если это технически возможно",
];

const EXTRA = [
  "Ремонт шкафов, комодов, фасадов и ящиков",
  "Сборка мебели, если задача подходит по объёму",
];

const NOT_DOING = [
  "Полную перетяжку мебели",
  "Сложный пошив чехлов",
  "Встроенную мебель на заказ",
  "Мелкую дешёвую сборку из коробок",
  "Ремонт, где выгоднее купить новую мебель",
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Главный фокус"
      title="Что я ремонтирую"
      intro={
        <p>
          Мой основной фокус — диваны, кресла, стулья, кровати и другая мягкая
          мебель. Корпусную мебель и сборку тоже могу обсудить — если задача
          подходит мне по объёму.
        </p>
      }
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <ServiceCard
          icon={<Sofa className="h-5 w-5" />}
          title="Диваны и мягкая мебель"
          items={MAIN}
          primary
        />
        <ServiceCard icon={<Wrench className="h-5 w-5" />} title="Дополнительно" items={EXTRA} />
      </div>

      <div className="mt-4">
        <NotDoingCard items={NOT_DOING} />
      </div>

      {/* Важная заметка — выделена для внимания клиента */}
      <div className="mt-8 flex items-start gap-3 rounded-2xl border-l-4 border-[color:var(--accent-warm)] border-y border-r border-y-[color:var(--card-soft-border)] border-r-[color:var(--card-soft-border)] bg-[oklch(0.98_0.025_45)] p-5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-card text-[color:var(--accent-warm)]">
          <Info className="h-[18px] w-[18px]" strokeWidth={2.2} aria-hidden />
        </span>
        <div className="min-w-0">
          <p className="font-display text-[14px] font-extrabold uppercase tracking-[0.08em] text-[color:var(--accent-warm)]">
            Важно знать заранее
          </p>
          <p className="mt-1.5 text-[15px] leading-[1.55] text-foreground">
            Если сомневаетесь — пришлите фото, я подскажу, берусь или нет.
            Лучше честно сказать сразу, чем тратить ваше время.
          </p>
        </div>
      </div>
    </Section>
  );
}

function NotDoingCard({ items }: { items: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--tone-danger-soft)] text-[color:var(--tone-danger-fg)]">
          <X className="h-5 w-5" strokeWidth={2.4} />
        </span>
        <h3 className="font-display text-[19px] font-bold text-foreground">
          За что я не берусь
        </h3>
      </div>
      <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
        {items.map((it) => (
          <li
            key={it}
            className="flex items-start gap-2.5 text-[15px] leading-[1.5] text-foreground/85"
          >
            <span
              aria-hidden
              className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[color:var(--tone-danger-soft)] text-[color:var(--tone-danger-fg)]"
            >
              <X className="h-3 w-3" strokeWidth={3} />
            </span>
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  items,
  primary = false,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
  primary?: boolean;
}) {
  return (
    <div
      className={`relative rounded-2xl border p-6 md:p-8 ${
        primary
          ? "border-[color:var(--accent-warm)]/50 bg-[oklch(0.985_0.022_45)] shadow-[0_14px_40px_-22px_oklch(0.68_0.18_35/0.55)]"
          : "border-border bg-card"
      }`}
    >
      {primary && (
        <span className="absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-full bg-[color:var(--accent-warm)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-white shadow-[0_6px_16px_-6px_oklch(0.68_0.18_35/0.6)]">
          Главное направление
        </span>
      )}
      <div className="flex items-center gap-3">
        <span
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full ${
            primary ? "bg-[color:var(--accent-warm)] text-white" : "bg-[color:var(--card-soft)] text-primary"
          }`}
        >
          {icon}
        </span>
        <h3 className="font-display text-[19px] font-bold text-foreground">{title}</h3>
      </div>
      <ul className="mt-5 grid gap-2.5">
        {items.map((it) => (
          <li
            key={it}
            className="flex items-start gap-2.5 text-[15px] leading-[1.5] text-foreground/85"
          >
            <span
              aria-hidden
              className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                primary ? "bg-[color:var(--accent-warm)]/15 text-[color:var(--accent-warm)]" : "bg-[color:var(--card-soft)] text-primary"
              }`}
            >
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

