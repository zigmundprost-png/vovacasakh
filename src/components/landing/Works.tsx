import { useState } from "react";
import { Section } from "./Section";
import { Dialog, DialogContent } from "@/components/ui/dialog";
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
import work16 from "@/assets/works/work-16.webp";
import work17 from "@/assets/works/work-17.webp";
import work18 from "@/assets/works/work-18.webp";
import work19 from "@/assets/works/work-19.webp";
import work20 from "@/assets/works/work-20.webp";
import work21 from "@/assets/works/work-21.webp";
import work22 from "@/assets/works/work-22.webp";
import work23 from "@/assets/works/work-23.webp";
import work24 from "@/assets/works/work-24.webp";
import work25 from "@/assets/works/work-25.webp";

type Category = "Ремонт" | "Ремонт" | "Сборка";

type Work = { src: string; title: string; desc: string; category: Category };

const WORKS: Work[] = [
  { src: work25, title: "Угловой диван, бежевая ткань", desc: "Перетяжка и восстановление формы подушек.", category: "Ремонт" },
  { src: work1, title: "Большой угловой диван", desc: "Замена поролона и восстановление формы сидений.", category: "Ремонт" },
  { src: work2, title: "Прямой диван-книжка", desc: "Перетяжка и замена наполнителя.", category: "Ремонт" },
  { src: work3, title: "Угловой диван, светлая ткань", desc: "Восстановление сидений и подушек.", category: "Ремонт" },
  { src: work11, title: "Диван-книжка, серая ткань", desc: "Замена поролона и подтяжка обивки.", category: "Ремонт" },
  { src: work4, title: "Диван с ящиком для белья", desc: "Ремонт корпуса и механизма.", category: "Ремонт" },
  { src: work5, title: "Диван-аккордеон", desc: "Ремонт каркаса с заменой деталей.", category: "Ремонт" },
  { src: work16, title: "Диван-кровать с раскладкой", desc: "Ремонт раскладного механизма и замена ламелей.", category: "Ремонт" },
  { src: work24, title: "Механизм дивана-книжки", desc: "Замена и регулировка фурнитуры раскладки.", category: "Ремонт" },
  { src: work9, title: "Гинекологическое кресло", desc: "Полная разборка, ремонт механизма и обивки.", category: "Ремонт" },
  { src: work12, title: "Стулья из дерева, набор", desc: "Обновление сидений и ремонт каркаса.", category: "Ремонт" },
  { src: work13, title: "Светлые деревянные стулья", desc: "Склейка каркасов и восстановление.", category: "Ремонт" },
  { src: work14, title: "Стулья, тёмное дерево", desc: "Полная разборка, склейка и обновление сидений.", category: "Ремонт" },
  { src: work15, title: "Кровать, тёмный каркас", desc: "Сборка после переезда и подтяжка соединений.", category: "Сборка" },
  { src: work8, title: "Кровать, тёмный корпус", desc: "Восстановление сколов и торцов.", category: "Ремонт" },
  { src: work10, title: "Каркас кровати, торцы", desc: "Восстановление углов и кромки.", category: "Ремонт" },
  { src: work6, title: "Шкаф-купе с зеркалами", desc: "Ремонт направляющих и сборка дверей.", category: "Сборка" },
  { src: work7, title: "Комод с ящиками", desc: "Ремонт направляющих и фасадов.", category: "Ремонт" },
  { src: work23, title: "Кухонный гарнитур, венге", desc: "Ремонт фасадов и направляющих ящиков.", category: "Ремонт" },
  { src: work22, title: "Угловой офисный стол", desc: "Сборка стола после переезда офиса.", category: "Сборка" },
  { src: work21, title: "Большой угловой стол", desc: "Сборка рабочего места под ключ.", category: "Сборка" },
  { src: work20, title: "Стол для переговорной", desc: "Сборка стола и офисных кресел.", category: "Сборка" },
  { src: work19, title: "Офисные столы, белый каркас", desc: "Сборка партии столов в новом офисе.", category: "Сборка" },
  { src: work18, title: "Шкафы для документов", desc: "Сборка и установка шкафов в ряд.", category: "Сборка" },
  { src: work17, title: "Шкафы со стеклянными дверцами", desc: "Сборка медицинской мебели в коридоре.", category: "Сборка" },
];

const CATEGORIES: ("Все" | Category)[] = ["Все", "Ремонт", "Ремонт", "Сборка"];

export function Works() {
  const [active, setActive] = useState<"Все" | Category>("Все");
  const [open, setOpen] = useState<Work | null>(null);

  const filtered = active === "Все" ? WORKS : WORKS.filter((w) => w.category === active);

  return (
    <Section
      id="works"
      eyebrow="Работы руками"
      title="Примеры работ"
      intro={
        <p>
          Реальные фото с объектов. Нажмите на снимок, чтобы рассмотреть подробнее.
        </p>
      }
    >
      <div className="mb-6 flex flex-wrap gap-2">
        {CATEGORIES.map((c) => {
          const count = c === "Все" ? WORKS.length : WORKS.filter((w) => w.category === c).length;
          const isActive = active === c;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                isActive
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-card text-foreground hover:bg-surface"
              }`}
            >
              {c} <span className="opacity-60">· {count}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {filtered.map((w) => (
          <button
            key={w.title}
            type="button"
            onClick={() => setOpen(w)}
            className="group relative overflow-hidden rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-foreground"
          >
            <div className="relative aspect-square bg-surface">
              <img
                src={w.src}
                alt={`${w.title} — пример работы`}
                loading="lazy"
                className="h-full w-full object-cover transition group-hover:scale-105"
              />
              <span className="absolute left-2 top-2 rounded-full bg-background/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-foreground shadow-sm backdrop-blur">
                {w.category}
              </span>
            </div>
          </button>
        ))}
      </div>

      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          {open && (
            <div>
              <img src={open.src} alt={open.title} className="w-full max-h-[75vh] object-contain bg-black" />
              <div className="p-5">
                <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{open.category}</div>
                <h3 className="mt-1 text-lg font-semibold text-foreground">{open.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{open.desc}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
