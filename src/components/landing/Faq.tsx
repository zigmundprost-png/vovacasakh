import { useState } from "react";
import { Section } from "./Section";
import { Plus, Minus } from "lucide-react";

const QUESTIONS = [
  {
    q: "Можете назвать цену по фото?",
    a: "Предварительно — да, если на фото или видео видно проблему. Точную цену называю после осмотра.",
  },
  {
    q: "Что лучше прислать: фото или видео?",
    a: "Лучше короткое видео. Снимите мебель целиком, место поломки и то, как проблема проявляется. Если видео неудобно — пришлите 2–3 фото.",
  },
  {
    q: "Вы сами забираете мебель?",
    a: "Да, если ремонт неудобно делать дома. Вывоз, возврат, грузчиков и выезд за город обсуждаем заранее.",
  },
  {
    q: "Сколько стоит выезд?",
    a: "Выезд и диагностика по Южно-Сахалинску — 1000 ₽.",
  },
  {
    q: "Есть ли гарантия?",
    a: "Качество гарантирую! Каждую работу проверяю перед сдачей.",
  },
  {
    q: "Делаете ли сборку мебели?",
    a: "Да, если задача подходит по объёму. Мелкую дешёвую сборку из коробок не беру.",
  },
  {
    q: "Когда ремонтировать не стоит?",
    a: "Если ремонт выйдет почти как новая мебель или задача технически сомнительная, скажу об этом до начала работы.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" eyebrow="Частые вопросы" title="Что обычно спрашивают">
      <div className="overflow-hidden rounded-2xl border border-border bg-card divide-y divide-border">
        {QUESTIONS.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-surface focus-visible:outline-none focus-visible:bg-surface md:px-6"
              >
                <span className="text-[15px] font-medium text-foreground sm:text-[16px]">
                  {item.q}
                </span>
                <span
                  aria-hidden
                  className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-surface text-foreground"
                >
                  {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                </span>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 text-[15px] leading-relaxed text-muted-foreground md:px-6">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
