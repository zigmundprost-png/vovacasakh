import { Section } from "./Section";

const ORIENTIRS = [
  { label: "Выезд и диагностика по Южно-Сахалинску", value: "1000 ₽" },
  { label: "Ремонт мягкой мебели", value: "от 3 500 ₽" },
  { label: "Перевозка мебели", value: "обсуждается отдельно" },
  { label: "Грузчики, этажи, сложный вынос", value: "отдельно, если нужны" },
];

export function Prices() {
  return (
    <Section
      id="prices"
      eyebrow="Деньги без сюрпризов"
      title="Сколько стоит ремонт"
      intro={
        <p>
          Точная стоимость зависит от поломки, материалов, состояния мебели и
          того, нужно ли забирать её в ремонт. Ниже — ориентиры.
        </p>
      }
    >
      <dl className="overflow-hidden rounded-2xl border border-[color:var(--accent-warm)]/40 bg-card shadow-[0_14px_40px_-22px_oklch(0.68_0.18_35/0.45)]">
        {ORIENTIRS.map((o, i) => (
          <div
            key={o.label}
            className={`flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-5 ${i !== ORIENTIRS.length - 1 ? "border-b border-[color:var(--accent-warm)]/20" : ""}`}
          >
            <dt className="text-[15px] font-medium text-foreground/85">{o.label}</dt>
            <dd className="text-[18px] font-extrabold tracking-tight text-[color:var(--accent-warm)] sm:text-[20px]">
              {o.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-6">
        <p className="rounded-xl border border-[color:var(--accent-warm)]/30 bg-[oklch(0.985_0.022_45)] p-5 text-[14px] leading-relaxed text-foreground/85">
          <strong className="font-semibold text-[color:var(--accent-warm)]">Важно.</strong> Окончательную
          стоимость называю после диагностики — когда понятно, что именно
          сломалось, какие материалы нужны и какой объём работы предстоит.
        </p>
      </div>
    </Section>
  );
}
