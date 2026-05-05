import { Section } from "./Section";

const SCENARIOS = [
  "Диван стал неудобным, а новый такого же уровня стоит дорого",
  "Мебель хорошая, привычная — её жалко выбрасывать",
  "Нужен мастер, который по-человечески скажет: ремонтировать или нет",
];

export function Problem() {
  return (
    <Section
      id="problem"
      eyebrow="Когда стоит написать"
      title="Когда мебель уже мешает жить, а новую покупать не хочется"
      intro={
        <>
          <p>
            Диван просел. Кровать скрипит. Механизм не раскладывается. Пружины давят.
            Подлокотник шатается. Ткань порвалась из-за механизма.
          </p>
          <p className="mt-4">
            В такой момент обычно непонятно три вещи: можно ли это починить, сколько
            будет стоить ремонт и кто возьмёт на себя перевозку, если дома работать
            неудобно.
          </p>
        </>
      }
    >
      <ul className="grid gap-3 sm:grid-cols-2">
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
    </Section>
  );
}
