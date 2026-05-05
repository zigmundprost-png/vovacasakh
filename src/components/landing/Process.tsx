import { Section } from "./Section";
import { MAX_LINK } from "@/lib/links";
import { MaxLogo } from "./MaxLogo";

const STEPS = [
  {
    n: "01",
    title: "Покажите поломку",
    text: "Пришлите фото или, лучше, короткое видео в MAX: мебель целиком, место поломки и как она проявляется.",
  },
  {
    n: "02",
    title: "Владимир смотрит материалы",
    text: "По фото или видео можно понять, нужен ли выезд, и дать предварительную оценку — стоит ли рассматривать ремонт.",
  },
  {
    n: "03",
    title: "Диагностика или выезд",
    text: "Если по материалам неясно, Владимир приезжает, осматривает мебель на месте и объясняет варианты.",
  },
  {
    n: "04",
    title: "Согласование цены и формата",
    text: "Стоимость зависит от поломки, материалов, объёма работы, выезда и перевозки. Точную цену называем после осмотра.",
  },
  {
    n: "05",
    title: "Ремонт на месте или с забором",
    text: "Простые задачи можно сделать дома. Если ремонт грязный, сложный или требует нормальных условий, мебель можно забрать.",
  },
  {
    n: "06",
    title: "Возврат и проверка",
    text: "После ремонта мебель привозим обратно и проверяем в работе. При необходимости пришлю фото- или видеоотчёт.",
  },
];

export function Process() {
  return (
    <Section
      id="process"
      eyebrow="Как это устроено"
      title="Как проходит работа"
      intro={<p>Шесть простых шагов от первого фото до возврата мебели.</p>}
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
        {/* MAX временно отключён */}
        <button
          type="button"
          disabled
          title="Скоро будет доступно"
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-[15px] font-bold text-primary-foreground opacity-55 grayscale cursor-not-allowed"
        >
          <MaxLogo className="h-5 w-5" />
          Написать в MAX (скоро)
        </button>
      </div>
    </Section>
  );
}
