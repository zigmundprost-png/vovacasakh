import { Section } from "./Section";
import { MapPin } from "lucide-react";

export function Geography() {
  return (
    <Section id="geography" eyebrow="География работы" title="Где я работаю">
      <div className="rounded-2xl border border-primary/30 bg-card p-6 md:p-8">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <MapPin className="h-5 w-5" aria-hidden />
        </span>
        <p className="mt-4 text-[16px] leading-relaxed text-foreground/90">
          Работаю в Южно-Сахалинске. В Корсаков, Холмск, Невельск и Долинск
          выезжаю по договорённости.
        </p>
      </div>
    </Section>
  );
}
