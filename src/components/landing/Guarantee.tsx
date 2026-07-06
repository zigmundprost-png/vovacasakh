import { Section } from "./Section";
import { ShieldCheck } from "lucide-react";

export function Guarantee() {
  return (
    <Section
      id="guarantee"
      eyebrow="Качество"
      title="Качество гарантирую!"
    >
      <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <ShieldCheck className="h-5 w-5" aria-hidden />
        </span>
        <p className="text-[15px] leading-relaxed text-foreground/85">
          Каждую работу проверяю перед сдачей. Делаю так, чтобы результат
          держался и служил дальше.
        </p>
      </div>
    </Section>
  );
}
