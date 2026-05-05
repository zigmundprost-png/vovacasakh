import { Section } from "./Section";
import { ImageIcon } from "lucide-react";

const CASES = [
  {
    title: "Диван или диван-кровать",
    breakage: "Пружины, механизм, поролон или каркас.",
    show: "Общий вид до, проблемное место, процесс и результат.",
    format: "На месте или с забором",
  },
  {
    title: "Кресло или стулья",
    breakage: "Проседание, каркас, материал, устойчивость.",
    show: "Состояние до и аккуратность после ремонта.",
    format: "На месте",
  },
  {
    title: "Комод, шкаф или кровать",
    breakage: "Фасады, ящики, петли, механизм.",
    show: "Понятные бытовые поломки — не только по диванам.",
    format: "На месте",
  },
];

export function Works() {
  return (
    <Section
      id="works"
      eyebrow="Работы руками"
      title="Примеры работ"
      intro={
        <p>
          Лучше один раз увидеть поломку и результат, чем читать длинное описание.
          Здесь — три кейса «до и после». Реальные фото добавим перед запуском.
        </p>
      }
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {CASES.map((c) => (
          <article
            key={c.title}
            className="overflow-hidden rounded-2xl border border-border bg-card"
          >
            <div className="grid grid-cols-2 gap-px bg-border">
              <Placeholder label="До" />
              <Placeholder label="После" />
            </div>
            <div className="p-5">
              <h3 className="text-[17px] font-semibold text-foreground">{c.title}</h3>
              <dl className="mt-4 grid gap-2 text-[14px] leading-relaxed">
                <Row k="Было" v={c.breakage} />
                <Row k="Сделано" v={c.show} />
                <Row k="Формат" v={c.format} />
              </dl>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Placeholder({ label }: { label: string }) {
  return (
    <div className="relative aspect-[4/3] bg-surface">
      <div className="absolute inset-0 flex flex-col items-start justify-between p-3">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-card text-muted-foreground">
          <ImageIcon className="h-3.5 w-3.5" />
        </span>
        <span className="text-[12px] font-medium text-muted-foreground">{label}</span>
      </div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
      <dt className="shrink-0 text-muted-foreground">{k}:</dt>
      <dd className="text-foreground/85">{v}</dd>
    </div>
  );
}
