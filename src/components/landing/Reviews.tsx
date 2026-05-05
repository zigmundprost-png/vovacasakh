import { Section } from "./Section";
import { Truck, Sparkles, Sofa, RotateCcw } from "lucide-react";

const GROUPS = [
  {
    icon: Truck,
    title: "Сам забрал и привёз",
    text: "Клиенту не пришлось самому решать вопросы с машиной, грузчиками и временем.",
  },
  {
    icon: Sparkles,
    title: "Быстро и аккуратно",
    text: "Сроки, чистота и спокойный процесс без лишней суеты.",
  },
  {
    icon: Sofa,
    title: "Мебель снова служит",
    text: "Диваны, кресла, кровати, комоды — ремонт помог не покупать новое.",
  },
  {
    icon: RotateCcw,
    title: "Обращаются повторно",
    text: "Сохраняют номер, рекомендуют и возвращаются с новой задачей.",
  },
];

export function Reviews() {
  return (
    <Section
      id="reviews"
      eyebrow="Что говорят клиенты"
      title="Клиенты отмечают не только результат, но и процесс"
      intro={
        <p>
          В отзывах клиенты чаще всего отмечают: быстро, аккуратно, сам приехал,
          забрал, сделал, привёз обратно, прислал отчёт, объяснил по-человечески.
        </p>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {GROUPS.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-4 w-4" aria-hidden />
              </span>
              <h3 className="text-[16px] font-semibold text-foreground">{title}</h3>
            </div>
            <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
