import { Section } from "./Section";
import { MapPin } from "lucide-react";

const NEARBY = ["Корсаков", "Холмск", "Невельск", "Долинск"];

export function Geography() {
  return (
    <Section id="geography" eyebrow="География работы" title="Где я работаю">
      <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr]">
        <div className="rounded-2xl border border-primary/30 bg-card p-6 md:p-8">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <MapPin className="h-5 w-5" aria-hidden />
          </span>
          <h3 className="mt-4 text-[20px] font-semibold text-foreground">Южно-Сахалинск</h3>
          <p className="mt-2 text-[14px] text-muted-foreground">Моя основная зона работы.</p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
          <h3 className="text-[16px] font-semibold text-foreground">По договорённости — выезжаю на юг Сахалина</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {NEARBY.map((c) => (
              <li
                key={c}
                className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-[14px] text-foreground/85"
              >
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[14px] leading-relaxed text-muted-foreground">
            По югу Сахалина — выезжаю по договорённости. Перед выездом лучше
            пришлите мне фото или видео.
          </p>
        </div>
      </div>
    </Section>
  );
}
