import { Section } from "./Section";
import { ShieldCheck } from "lucide-react";

export function Guarantee() {
  return (
    <Section
      id="guarantee"
      eyebrow="Гарантия на работу"
      title="Гарантия на выполненный ремонт"
      intro={
        <>
          <p>
            На выполненный ремонт действует гарантия до 1 года при нормальной
            эксплуатации мебели.
          </p>
          <p className="mt-4">
            Перед работой Владимир объясняет, что именно ремонтируется, какие
            детали и материалы нужны и какие ограничения есть у конкретной
            мебели.
          </p>
        </>
      }
    >
      <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <ShieldCheck className="h-5 w-5" aria-hidden />
        </span>
        <p className="text-[15px] leading-relaxed text-foreground/85">
          Гарантия не означает, что старая мебель становится новой или что можно
          обещать ремонт любой поломки. Если ремонт невыгоден или технически
          сомнителен, лучше обсудить это до начала работы.
        </p>
      </div>
    </Section>
  );
}
