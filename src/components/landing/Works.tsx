import { Section } from "./Section";
import work1 from "@/assets/works/work-1.webp";
import work2 from "@/assets/works/work-2.webp";
import work3 from "@/assets/works/work-3.webp";
import work4 from "@/assets/works/work-4.webp";
import work5 from "@/assets/works/work-5.webp";
import work6 from "@/assets/works/work-6.webp";
import work7 from "@/assets/works/work-7.webp";
import work8 from "@/assets/works/work-8.webp";
import work9 from "@/assets/works/work-9.webp";
import work10 from "@/assets/works/work-10.webp";
import work11 from "@/assets/works/work-11.webp";
import work12 from "@/assets/works/work-12.webp";
import work13 from "@/assets/works/work-13.webp";
import work14 from "@/assets/works/work-14.webp";
import work15 from "@/assets/works/work-15.webp";

const WORKS = [
  { src: work1, title: "Большой угловой диван", desc: "Замена поролона и восстановление формы сидений." },
  { src: work2, title: "Прямой диван-книжка", desc: "Перетяжка и замена наполнителя." },
  { src: work3, title: "Угловой диван, светлая ткань", desc: "Восстановление сидений и подушек." },
  { src: work11, title: "Диван-книжка, серая ткань", desc: "Замена поролона и подтяжка обивки." },
  { src: work4, title: "Диван с ящиком для белья", desc: "Ремонт корпуса и механизма." },
  { src: work5, title: "Диван-аккордеон", desc: "Сборка и ремонт каркаса с заменой деталей." },
  { src: work12, title: "Стулья из дерева, набор", desc: "Замена обивки сидений на новую ткань." },
  { src: work13, title: "Светлые деревянные стулья", desc: "Склейка каркасов и восстановление." },
  { src: work14, title: "Стулья, тёмное дерево", desc: "Полная разборка, склейка и обновление сидений." },
  { src: work15, title: "Кровать, тёмный каркас", desc: "Сборка после переезда и подтяжка соединений." },
  { src: work6, title: "Шкаф-купе с зеркалами", desc: "Ремонт направляющих и сборка дверей." },
  { src: work7, title: "Комод с ящиками", desc: "Ремонт направляющих и фасадов." },
  { src: work8, title: "Кровать, тёмный корпус", desc: "Восстановление сколов и торцов." },
  { src: work9, title: "Гинекологическое кресло", desc: "Полная разборка, ремонт механизма и обивки." },
  { src: work10, title: "Каркас кровати, торцы", desc: "Восстановление углов и кромки." },
];

export function Works() {
  return (
    <Section
      id="works"
      eyebrow="Работы руками"
      title="Примеры работ — до и после"
      intro={
        <p>
          Реальные фото с объектов: каждая картинка — «до» и «после» одной задачи.
          Не глянцевые рендеры, а то, как это выглядит в жизни.
        </p>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {WORKS.map((w) => (
          <figure
            key={w.title}
            className="overflow-hidden rounded-2xl border border-border bg-card"
          >
            <div className="relative aspect-[3/4] bg-surface">
              <img
                src={w.src}
                alt={`${w.title} — фото до и после ремонта`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-foreground shadow-sm backdrop-blur">
                До / После
              </span>
            </div>
            <figcaption className="p-4">
              <h3 className="text-[15px] font-semibold text-foreground">{w.title}</h3>
              <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">{w.desc}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
