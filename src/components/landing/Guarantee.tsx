import { Section } from "./Section";
import { ShieldCheck } from "lucide-react";

export function Guarantee() {
  return (
    <Section
      id="guarantee"
      eyebrow="Гарантия"
      title="Гарантия на мою работу"
      intro={
        <p>
          На выполненный ремонт я даю гарантию до 1 года при нормальной
          эксплуатации. Перед работой объясню, что именно собираюсь делать,
          какие материалы понадобятся и какие ограничения есть у вашей мебели.
        </p>
      }
    >
      <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <ShieldCheck className="h-5 w-5" aria-hidden />
        </span>
        <p className="text-[15px] leading-relaxed text-foreground/85">
          Гарантия не означает, что старая мебель станет новой или что я могу
          обещать ремонт любой поломки. Если ремонт невыгоден или технически
          сомнителен — скажу честно до начала работы.
        </p>
      </div>
    </Section>
  );
}
