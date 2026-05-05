import { Section } from "./Section";
import { MAX_LINK } from "@/lib/links";
import { MaxLogo } from "./MaxLogo";

const STEPS = [
  {
    n: "01",
    title: "Покажите мне поломку",
    text: "Пришлите фото или, лучше, короткое видео в MAX: мебель целиком, место поломки и как она проявляется.",
  },
  {
    n: "02",
    title: "Я смотрю материалы",
    text: "По фото или видео обычно уже понимаю, нужен ли выезд, и могу дать предварительную оценку — стоит ли вообще ремонтировать.",
  },
  {
    n: "03",
    title: "Выезжаю и осматриваю",
    text: "Если по фото неясно, приезжаю, осматриваю мебель на месте и спокойно объясняю варианты.",
  },
  {
    n: "04",
    title: "Согласуем цену и формат",
    text: "Стоимость зависит от поломки, материалов, объёма работы, выезда и перевозки. Точную цену называю после осмотра.",
  },
  {
    n: "05",
    title: "Делаю ремонт — у вас или у себя",
    text: "Простые задачи делаю на месте. Если ремонт грязный, сложный или требует нормальных условий — забираю мебель к себе.",
  },
  {
    n: "06",
    title: "Привожу обратно и проверяем",
    text: "После ремонта привожу мебель обратно и проверяем её в работе. По желанию пришлю фото- или видеоотчёт.",
  },
];

export function Process() {
  return (
    <Section
      id="process"
      eyebrow="Как это устроено"
      title="Как проходит работа"
      intro={<p>Шесть простых шагов — от вашего первого фото до возврата мебели.</p>}
    >
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {STEPS.map((s) => (
          <li
            key={s.n}
            className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/20"
          >
            <div className="flex items-center gap-3">
              <span className="text-[13px] font-mono font-semibold text-primary">{s.n}</span>
              <h3 className="text-[16px] font-semibold text-foreground">{s.title}</h3>
            </div>
            <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{s.text}</p>
          </li>
        ))}
      </ol>

      <div className="mt-10 flex justify-center">
        <a
          href={MAX_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-[15px] font-bold text-primary-foreground transition-colors hover:bg-primary-hover"
        >
          <MaxLogo className="h-5 w-5" />
          Написать в MAX
        </a>
      </div>
    </Section>
  );
}
