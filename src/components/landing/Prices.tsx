import { Section } from "./Section";

const PRICES = [
  {
    group: "Мягкая мебель",
    items: [
      { label: "Замена поролона и наполнителя", range: "от 10 000 до 48 000 ₽", note: "в среднем 32 000 ₽" },
      { label: "Замена пружинного блока", range: "от 12 000 ₽", note: "вместе с работой" },
      { label: "Усиление каркаса / деревянной опоры", range: "от 5 000 до 20 000 ₽", note: "в среднем 13 000 ₽" },
      { label: "Ремонт механизма раскладывания", range: "от 6 500 ₽", note: "«книжка», «клик-кляк», «аккордеон»" },
      { label: "Ремонт подлокотника", range: "от 3 500 ₽", note: "мелкий ремонт ткани" },
    ],
  },
  {
    group: "Стулья и кресла",
    items: [
      { label: "Ремонт и перетяжка стула", range: "от 6 500 до 18 000 ₽", note: "в среднем 11 000 ₽" },
    ],
  },
  {
    group: "Кровати и шкафы",
    items: [
      { label: "Сборка кровати", range: "от 6 000 ₽", note: "после переезда" },
      { label: "Сборка шкафа / купе", range: "от 6 000 ₽", note: "сложность влияет" },
      { label: "Ремонт шкафа", range: "от 4 000 до 5 000 ₽", note: "петли, фасады, направляющие" },
    ],
  },
  {
    group: "Сборка и прочее",
    items: [
      { label: "Сборка офисной мебели", range: "по договорённости", note: "столы, стеллажи, тумбы" },
    ],
  },
];

const CTA = [
  { label: "Выезд и диагностика по Южно-Сахалинску", value: "1 000 ₽" },
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
          Цены — настоящие, собранные из выполненных работ. Точная стоимость зависит от поломки, материалов и объёма, но эти цифры дают понятную ориентировку.
        </p>
      }
    >
      <div className="space-y-8">
        {PRICES.map((g) => (
          <div key={g.group}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">{g.group}</h3>
            <div className="overflow-hidden rounded-2xl border border-primary/15 bg-card shadow-[0_14px_40px_-22px_oklch(0.55_0.20_260/0.35)]">
              {g.items.map((o, i) => (
                <div
                  key={o.label}
                  className={`flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-5 ${i !== g.items.length - 1 ? "border-b border-primary/10" : ""}`}
                >
                  <div>
                    <dt className="text-[15px] font-medium text-foreground/90">{o.label}</dt>
                    <dd className="mt-0.5 text-xs text-muted-foreground">{o.note}</dd>
                  </div>
                  <div className="text-[18px] font-extrabold tracking-tight text-primary sm:text-[20px]">{o.range}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-primary/15 bg-card">
        {CTA.map((o, i) => (
          <div
            key={o.label}
            className={`flex flex-col gap-1 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-4 ${i !== CTA.length - 1 ? "border-b border-primary/10" : ""}`}
          >
            <dt className="text-[15px] font-medium text-foreground/85">{o.label}</dt>
            <dd className="text-base font-bold text-primary">{o.value}</dd>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <p className="rounded-xl border border-primary/15 bg-primary/5 p-5 text-[14px] leading-relaxed text-foreground/85">
          <strong className="font-semibold text-primary">Важно.</strong> Окончательную стоимость называю после диагностики — когда понятно, что именно сломалось, какие материалы нужны и какой объём работы предстоит.
        </p>
      </div>
    </Section>
  );
}
