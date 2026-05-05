import { Section } from "./Section";

const ORIENTIRS = [
  { label: "Выезд и диагностика по Южно-Сахалинску", value: "700 ₽" },
  { label: "Ремонт мягкой мебели", value: "700₽" },
  { label: "Перевозка мебели", value: "обсуждаем отдельно" },
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
          того, нужно ли мне забирать её в ремонт. Ниже — мои ориентиры.
        </p>
      }
    >
      <dl className="overflow-hidden rounded-2xl border border-border bg-card divide-y divide-border">
        {ORIENTIRS.map((o) => (
          <div
            key={o.label}
            className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-5"
          >
            <dt className="text-[15px] text-foreground/85">{o.label}</dt>
            <dd className="text-[16px] font-semibold text-foreground">{o.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-6">
        <p className="rounded-xl border border-border bg-surface p-5 text-[14px] leading-relaxed text-foreground/85">
          <strong className="font-semibold">Важно.</strong> По фото или видео я
          могу дать предварительное понимание. Окончательную стоимость называю
          после диагностики — когда вижу, что именно сломалось и какие материалы нужны.
        </p>
      </div>
    </Section>
  );
}
