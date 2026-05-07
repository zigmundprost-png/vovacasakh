import { Section } from "./Section";

const SCENARIOS = [
  "Можно ли это вообще починить",
  "Сколько будет стоить ремонт",
  "Нужно ли везти мебель в мастерскую",
];

export function Problem() {
  return (
    <Section
      id="problem"
      eyebrow="Когда стоит обратиться"
      title="Когда мебель уже мешает жить"
      intro={
        <>
          <p>
            Диван просел. Кровать скрипит. Механизм не раскладывается. Пружины
            давят. Подлокотник шатается. Ткань порвалась из-за поломки внутри.
          </p>
          <p className="mt-4">
            Обычно в такой ситуации непонятно три вещи:
          </p>
        </>
      }
    >
      <ul className="grid gap-3 sm:grid-cols-3">
        {SCENARIOS.map((s) => (
          <li
            key={s}
            className="flex gap-3 rounded-xl border border-border bg-card p-4 text-[15px] leading-relaxed text-foreground/85"
          >
            <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            {s}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-[16px] leading-[1.6] text-foreground/85">
        Я посмотрю поломку, объясню варианты и честно скажу, есть ли смысл
        ремонтировать.
      </p>
    </Section>
  );
}
