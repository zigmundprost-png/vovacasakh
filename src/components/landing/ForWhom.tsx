import { Section } from "./Section";
import { Check, X } from "lucide-react";

const FIT = [
  "У вас сломался диван, кресло, стул или кровать",
  "Готовы прислать мне фото или видео поломки",
  "Хотите, чтобы я объяснил всё простым языком",
];

const NOT_FIT = [
  "Ищете самый дешёвый вариант любой ценой",
  "Хотите точную цену без фото, видео или осмотра",
  "Задача мелкая и невыгодная по деньгам",
  "Ждёте бесплатную консультацию без осмотра",
];

export function ForWhom() {
  return (
    <Section id="for-whom" eyebrow="Подходит / не подходит" title="Кому я подойду">
      <div className="grid gap-5 lg:grid-cols-2">
        <Column title="Подходит, если" items={FIT} good />
        <Column title="Не лучший формат, если" items={NOT_FIT} />
      </div>
    </Section>
  );
}

function Column({ title, items, good = false }: { title: string; items: string[]; good?: boolean }) {
  const Icon = good ? Check : X;
  const tone = good
    ? {
        card: "border-[oklch(0.85_0.09_150)] bg-[oklch(0.985_0.025_150)]",
        badge: "bg-[oklch(0.94_0.06_150)] text-[oklch(0.45_0.15_150)]",
        chip: "bg-[oklch(0.92_0.08_150)] text-[oklch(0.42_0.16_150)]",
        label: "Подходит",
      }
    : {
        card: "border-[oklch(0.88_0.06_25)] bg-[oklch(0.985_0.022_25)]",
        badge: "bg-[oklch(0.96_0.04_25)] text-[oklch(0.55_0.21_27)]",
        chip: "bg-[oklch(0.94_0.06_25)] text-[oklch(0.52_0.2_27)]",
        label: "Не подходит",
      };

  return (
    <div className={`rounded-2xl border-2 ${tone.card} p-6 md:p-8`}>
      <div className="flex items-center gap-3">
        <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${tone.badge}`}>
          <Icon className="h-5 w-5" strokeWidth={2.6} aria-hidden />
        </span>
        <div>
          <span className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide ${tone.chip}`}>
            {tone.label}
          </span>
          <h3 className="mt-1 text-[18px] font-bold text-foreground leading-tight">{title}</h3>
        </div>
      </div>
      <ul className="mt-5 grid gap-3">
        {items.map((it) => (
          <li key={it} className="flex gap-3 text-[15px] leading-relaxed text-foreground/85">
            <span className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${tone.badge}`}>
              <Icon className="h-3 w-3" strokeWidth={3} aria-hidden />
            </span>
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
