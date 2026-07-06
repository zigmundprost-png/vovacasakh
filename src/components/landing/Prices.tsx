import { Section } from "./Section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const PRICES = [
  {
    group: "Мягкая мебель",
    summary: "от 3 500 до 48 000 ₽",
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
    summary: "от 6 500 до 18 000 ₽",
    items: [
      { label: "Ремонт и перетяжка стула", range: "от 6 500 до 18 000 ₽", note: "в среднем 11 000 ₽" },
    ],
  },
  {
    group: "Кровати и шкафы",
    summary: "от 4 000 до 6 000 ₽",
    items: [
      { label: "Сборка кровати", range: "от 6 000 ₽", note: "после переезда" },
      { label: "Сборка шкафа / купе", range: "от 6 000 ₽", note: "сложность влияет" },
      { label: "Ремонт шкафа", range: "от 4 000 до 5 000 ₽", note: "петли, фасады, направляющие" },
    ],
  },
  {
    group: "Сборка и прочее",
    summary: "по договорённости",
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
      <Accordion type="single" collapsible defaultValue="prices-0" className="rounded-2xl border border-primary/15 bg-card shadow-[0_14px_40px_-22px_oklch(0.55_0.20_260/0.35)]">
        {PRICES.map((g, gi) => (
          <AccordionItem key={g.group} value={`prices-${gi}`} className="border-b border-primary/10 last:border-b-0">
            <AccordionTrigger className="px-4 py-4 text-[15px] font-semibold hover:no-underline sm:px-6 sm:py-5">
              <span className="flex w-full flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                <span className="[overflow-wrap:anywhere]">{g.group}</span>
                <span className="text-[15px] font-bold text-primary sm:text-[18px] [overflow-wrap:anywhere]">{g.summary}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-5 pb-5 sm:px-6">
              <div className="overflow-hidden rounded-xl border border-primary/10">
                {g.items.map((o, i) => (
                  <div
                    key={o.label}
                    className={`flex flex-col gap-1 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-4 ${i !== g.items.length - 1 ? "border-b border-primary/10" : ""}`}
                  >
                    <div>
                      <div className="text-[15px] font-medium text-foreground/90">{o.label}</div>
                      <div className="mt-0.5 text-xs text-muted-foreground">{o.note}</div>
                    </div>
                    <div className="text-[17px] font-extrabold tracking-tight text-primary">{o.range}</div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <dl className="mt-8 overflow-hidden rounded-2xl border border-primary/15 bg-card">
        {CTA.map((o, i) => (
          <div
            key={o.label}
            className={`flex flex-col gap-1 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-4 ${i !== CTA.length - 1 ? "border-b border-primary/10" : ""}`}
          >
            <dt className="text-[15px] font-medium text-foreground/85">{o.label}</dt>
            <dd className="text-base font-bold text-primary">{o.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-6">
        <p className="rounded-xl border border-primary/15 bg-primary/5 p-5 text-[14px] leading-relaxed text-foreground/85">
          <strong className="font-semibold text-[color:var(--primary-hover)]">Важно.</strong> Окончательную стоимость называю после диагностики — когда понятно, что именно сломалось, какие материалы нужны и какой объём работы предстоит.
        </p>
      </div>
    </Section>
  );
}
