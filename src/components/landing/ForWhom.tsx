import { Section } from "./Section";
import { Check, X } from "lucide-react";

const FIT = [
  "У вас сломался диван, кресло, стул или кровать",
  "Готовы прислать фото или видео поломки",
  "Важно, чтобы мастер объяснил всё простым языком",
];

const NOT_FIT = [
  "Нужен самый дешёвый вариант любой ценой",
  "Хотите точную цену без фото, видео или осмотра",
  "Задача мелкая и экономически невыгодная",
  "Хотите «починить всё», не разбираясь в реальном состоянии мебели",
];

export function ForWhom() {
  return (
    <Section id="for-whom" eyebrow="Подходит / не подходит" title="Кому подойдёт такой ремонт">
      <div className="grid gap-5 lg:grid-cols-2">
        <Column title="Подходит, если" items={FIT} good />
        <Column title="Не лучший формат, если" items={NOT_FIT} />
      </div>
    </Section>
  );
}

function Column({ title, items, good = false }: { title: string; items: string[]; good?: boolean }) {
  const Icon = good ? Check : X;
  return (
    <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <h3 className="text-[18px] font-semibold text-foreground">{title}</h3>
      <ul className="mt-5 grid gap-3">
        {items.map((it) => (
          <li key={it} className="flex gap-3 text-[15px] leading-relaxed text-foreground/85">
            <span
              className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                good ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
              }`}
            >
              <Icon className="h-3 w-3" aria-hidden />
            </span>
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
