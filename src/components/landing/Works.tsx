import { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
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
import work26 from "@/assets/works/work-26.webp";
import work27 from "@/assets/works/work-27.webp";
import work28 from "@/assets/works/work-28.webp";
import work29 from "@/assets/works/work-29.webp";
import work30 from "@/assets/works/work-30.webp";
import work31 from "@/assets/works/work-31.webp";
import work32 from "@/assets/works/work-32.webp";
import work33 from "@/assets/works/work-33.webp";
import work34 from "@/assets/works/work-34.webp";
import work35 from "@/assets/works/work-35.webp";
import work36 from "@/assets/works/work-36.webp";
import work37 from "@/assets/works/work-37.webp";
import work38 from "@/assets/works/work-38.webp";
import work39 from "@/assets/works/work-39.webp";
import work40 from "@/assets/works/work-40.webp";
import work41 from "@/assets/works/work-41.webp";
import work42 from "@/assets/works/work-42.webp";
import work43 from "@/assets/works/work-43.webp";
import work44 from "@/assets/works/work-44.webp";

type Category = "Ремонт" | "Сборка";

type Work = { src: string; title: string; desc: string; category: Category; tag: string };

const WORKS: Work[] = [
  { src: work25, title: "Угловой диван, бежевая ткань", desc: "Восстановление формы подушек и обивки.", category: "Ремонт", tag: "замена поролона" },
  { src: work26, title: "Диван с разобранным каркасом", desc: "Ремонт дивана, ткань ЭКО кожа:\nЗамена, усиления продольной деревянной опоры(бруски) Увозил изделие к себе.\u00a0\nЦена работ под ключ - 20 000₽", category: "Ремонт", tag: "усиление каркаса" },
  { src: work27, title: "Модульный диван, серая ткань", desc: "Ремон модульного дивана, замена креплений пружинной системы змейка, полностью на всех модулях.\u00a0 Заказчик привозил диван\u00a0 сам из г. Тамари.\n\u00a0Цена ремонта- 30 000₽", category: "Ремонт", tag: "замена поролона" },
  { src: work29, title: "Диван с пружинным блоком", desc: "Ремон выкатной части углового дивана:\u00a0\nЗамена креплений пружинной системы ( металлическая змейка) полностью. Делал ремонт дома у заказчицы. Вскрывал, аккуратно раъ единял детали друг, от друга, менял крепления, приклеивал спец клеем всё обратно.\nЦена работ-12 000₽. Время потраченное на ремонт -(3,5 - 4) часа.", category: "Ремонт", tag: "замена пружинного блока" },
  { src: work31, title: "Диван-клик-кляк", desc: "Ремонт дивана у заказчицы дома( аппликация) привёз мною купленный паралон, идентичный тому который наклеин на диване. Зачистил, вырезал, вклеил новый.\u00a0\nЦена работа- 10 000₽", category: "Ремонт", tag: "замена поролона" },
  { src: work33, title: "Диван с порванной обивкой", desc: "Мелкий ремонт ткани на подлокотнике дивана. 3500₽", category: "Ремонт", tag: "ремонт подлокотника" },
  { src: work35, title: "Усиление каркаса дивана", desc: "Ремонт выкатной части углового дивана у клиента дома.\u00a0\nЦена-8000₽", category: "Ремонт", tag: "усиление каркаса" },
  { src: work38, title: "Угловой диван, белая ткань", desc: "Усиление мебельных строп на двух частях углового дивана у заказчика дома, с моим материалом. Работа была выполнена за два дня.\nЦена работ- 20 000₽.", category: "Ремонт", tag: "усиление каркаса" },
  { src: work40, title: "Диван-книжка с обновлением", desc: "Ремон каркаса нижней части линейного дивана:\nЗамена брусков,\u00a0 замена фанеры,замена поролона, элементов поролона, стирал чехол. Цена работ с материалом 35 000р", category: "Ремонт", tag: "замена поролона" },
  { src: work41, title: "Диван с раскладкой и пружинами", desc: "Ремонт деревянного каркаса, замена деревянных элементов подлокотника, увозил подлокотник к себе. Цена работ\n-7000₽", category: "Ремонт", tag: "ремонт механизма раскладывания" },
  { src: work43, title: "Диван-книжка, светлый велюр", desc: "Ремонт одной части линейного дивана (книжка) замена пружинного блока, поролона. Забирал диван к себе.\nЦена вместе с материалом\n\u00a0-28000₽", category: "Ремонт", tag: "замена поролона" },
  { src: work44, title: "Диван с тканью «лён»", desc: "Замена поролона, пружинного блока увозил диван.\nПружинный блок/пороло-\n10 000₽\nСпустить/увезти- поднять/ привезти\n- 5000₽\nКлей\n- 2000₽\nСкобы мебельные 2 упаковки -700₽\nРабота- 10 000₽.\nИтог:  Цена работы- 28 000₽", category: "Ремонт", tag: "замена поролона" },
  { src: work1, title: "Большой угловой диван", desc: "Замена поролона и восстановление формы сидений.", category: "Ремонт", tag: "замена поролона" },
  { src: work2, title: "Прямой диван-книжка", desc: "Замена наполнителя и восстановление обивки.", category: "Ремонт", tag: "замена поролона" },
  { src: work3, title: "Угловой диван, светлая ткань", desc: "Восстановление сидений и подушек.", category: "Ремонт", tag: "замена поролона" },
  { src: work11, title: "Диван-книжка, серая ткань", desc: "Ремонт двух частей линейного дивана, наполнение подушек.\nПололон-12 000₽\nПружинный блок 8000₽\nНаполнение подушек 5000₽\nДоставка- 5 000₽\nСпец. Клей. (Казеиновый)-2000₽\nСкобы: 3 упаковк1000₽\nМоя работа 12 000₽\nИтог работы- 45 000₽\nсли заказчик хочет сделать две части дивана( поменять наполнение, делаю скидку).", category: "Ремонт", tag: "замена поролона" },
  { src: work4, title: "Диван с ящиком для белья", desc: "Ремонт корпуса и механизма.", category: "Ремонт", tag: "ремонт механизма раскладывания" },
  { src: work5, title: "Диван-аккордеон", desc: "Ремонт каркаса с заменой деталей.", category: "Ремонт", tag: "усиление каркаса" },
  { src: work16, title: "Диван-кровать с раскладкой", desc: "Ремонт дивана\" Аккардион\" у заказчицы дома. Замена части раздвижного элемента, и частичная замена деревянных ламелей.\n Сломанную запасную часть раскладного элемента клиент покупала сама, ламели приобритал  сам.\nЦена работы -6500₽", category: "Ремонт", tag: "ремонт механизма раскладывания" },
  { src: work24, title: "Механизм дивана-книжки", desc: "Замена механизма \" книжка\"  на новый, у заказчицы дома.\nЦена работы -7000₽", category: "Ремонт", tag: "ремонт механизма раскладывания" },
  { src: work9, title: "Гинекологическое кресло", desc: "Ремонт генекологического кресла. Цена 15000₽", category: "Ремонт", tag: "усиление каркаса" },
  { src: work12, title: "Стулья из дерева, набор", desc: "Обновление сидений и ремонт каркаса.", category: "Ремонт", tag: "ремонт стула" },
  { src: work13, title: "Светлые деревянные стулья", desc: "Склейка каркасов и восстановление.", category: "Ремонт", tag: "ремонт стула" },
  { src: work14, title: "Стулья, тёмное дерево", desc: "Полная разборка, склейка и обновление сидений.", category: "Ремонт", tag: "ремонт стула" },
  { src: work39, title: "Светлые стулья с тканью «дамаск»", desc: "Склейка каркасов и обновление сидений и спинок.", category: "Ремонт", tag: "ремонт стула" },
  { src: work42, title: "Стулья с тёмной кожей", desc: "Разборка, склейка и сборка обратно.", category: "Ремонт", tag: "ремонт стула" },
  { src: work30, title: "Деревянные стулья, реставрация", desc: "Разборка, склейка каркасов и обновление сидений.", category: "Ремонт", tag: "ремонт стула" },
  { src: work28, title: "Круглая детская кроватка", desc: "Сборка и подгонка трансформируемой кроватки.", category: "Сборка", tag: "сборка кровати" },
  { src: work15, title: "Кровать, тёмный каркас", desc: "Сборка после переезда и подтяжка соединений.", category: "Сборка", tag: "сборка кровати" },
  { src: work8, title: "Кровать, тёмный корпус", desc: "Восстановление сколов и торцов.", category: "Ремонт", tag: "усиление каркаса" },
  { src: work10, title: "Каркас кровати, торцы", desc: "Восстановление углов и кромки.", category: "Ремонт", tag: "усиление каркаса" },
  { src: work6, title: "Шкаф-купе с зеркалами", desc: "Ремонт направляющих и сборка дверей.", category: "Сборка", tag: "сборка шкафа" },
  { src: work7, title: "Комод с ящиками", desc: "Ремонт направляющих и фасадов.", category: "Ремонт", tag: "ремонт шкафа" },
  { src: work32, title: "Угловой шкаф с зеркалом", desc: "Сборка и ремонт дверей углового шкафа.", category: "Сборка", tag: "сборка шкафа" },
  { src: work34, title: "Замена петель на шкафу", desc: "Перенавеска дверей и установка новых петель.", category: "Ремонт", tag: "ремонт шкафа" },
  { src: work36, title: "Скол на фасаде шкафа", desc: "Аккуратная реставрация скола на дверце.", category: "Ремонт", tag: "ремонт шкафа" },
  { src: work37, title: "Платяной шкаф с ящиками", desc: "Сборка шкафа и установка по месту.", category: "Сборка", tag: "сборка шкафа" },
  { src: work23, title: "Кухонный гарнитур, венге", desc: "Ремонт фасадов и направляющих ящиков.", category: "Ремонт", tag: "ремонт шкафа" },
  { src: work22, title: "Угловой офисный стол", desc: "Сборка стола после переезда офиса.", category: "Сборка", tag: "сборка мебели" },
  { src: work21, title: "Большой угловой стол", desc: "Сборка рабочего места под ключ.", category: "Сборка", tag: "сборка мебели" },
  { src: work20, title: "Стол для переговорной", desc: "Сборка стола и офисных кресел.", category: "Сборка", tag: "сборка мебели" },
  { src: work19, title: "Офисные столы, белый каркас", desc: "Сборка партии столов в новом офисе.", category: "Сборка", tag: "сборка мебели" },
  { src: work18, title: "Шкафы для документов", desc: "Сборка и установка шкафов в ряд.", category: "Сборка", tag: "сборка шкафа" },
  { src: work17, title: "Шкафы со стеклянными дверцами", desc: "Сборка медицинской мебели в коридоре.", category: "Сборка", tag: "сборка шкафа" },
];

const CATEGORIES: ("Все" | Category)[] = ["Все", "Ремонт", "Сборка"];

export function Works() {
  const [active, setActive] = useState<"Все" | Category>("Все");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = active === "Все" ? WORKS : WORKS.filter((w) => w.category === active);
  const open = openIndex !== null ? filtered[openIndex] : null;

  const goPrev = useCallback(() => {
    setOpenIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length));
  }, [filtered.length]);
  const goNext = useCallback(() => {
    setOpenIndex((i) => (i === null ? i : (i + 1) % filtered.length));
  }, [filtered.length]);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, goPrev, goNext]);

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
              onClick={() => {
                setActive(c);
                setOpenIndex(null);
              }}
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
        {filtered.map((w, i) => (
          <button
            key={w.title}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group relative overflow-hidden rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-foreground"
          >
            <div className="relative aspect-square bg-surface">
              <img
                src={w.src}
                alt={`${w.title} — пример работы`}
                loading="lazy"
                className="h-full w-full object-cover transition group-hover:scale-105"
              />
              <span className="absolute left-2 bottom-2 right-2 rounded-md bg-background/90 px-2 py-1 text-[11px] font-semibold text-foreground shadow-sm backdrop-blur">
                {w.tag}
              </span>
            </div>
          </button>
        ))}
      </div>

      <Dialog open={openIndex !== null} onOpenChange={(v) => !v && setOpenIndex(null)}>
        <DialogContent
          className="max-w-3xl p-0 overflow-hidden [&>button]:hidden"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          {open && (
            <div
              className="relative"
              onTouchStart={(e) => {
                (e.currentTarget as HTMLDivElement).dataset.tx = String(e.touches[0].clientX);
                (e.currentTarget as HTMLDivElement).dataset.ty = String(e.touches[0].clientY);
              }}
              onTouchEnd={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                const sx = Number(el.dataset.tx ?? 0);
                const sy = Number(el.dataset.ty ?? 0);
                const dx = e.changedTouches[0].clientX - sx;
                const dy = e.changedTouches[0].clientY - sy;
                if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
                  if (dx < 0) goNext();
                  else goPrev();
                }
              }}
            >
              {/* Close — дизайнерский крестик: тонкое стекло + красный значок */}
              <button
                type="button"
                onClick={() => setOpenIndex(null)}
                aria-label="Закрыть"
                className="group absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-red-600 shadow-[0_4px_20px_rgba(0,0,0,0.25)] ring-1 ring-black/5 backdrop-blur-md transition hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-400 active:scale-95"
              >
                <X className="h-5 w-5" strokeWidth={2.5} />
              </button>

              {/* Стрелки навигации — минималистичные, со стеклом */}
              <button
                type="button"
                onClick={goPrev}
                aria-label="Предыдущая работа"
                className="absolute left-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-foreground shadow-[0_4px_20px_rgba(0,0,0,0.25)] ring-1 ring-black/5 backdrop-blur-md transition hover:bg-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-foreground active:scale-95 sm:flex"
              >
                <ArrowLeft className="h-5 w-5" strokeWidth={2.25} />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Следующая работа"
                className="absolute right-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-foreground shadow-[0_4px_20px_rgba(0,0,0,0.25)] ring-1 ring-black/5 backdrop-blur-md transition hover:bg-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-foreground active:scale-95 sm:flex"
              >
                <ArrowRight className="h-5 w-5" strokeWidth={2.25} />
              </button>

              <img
                src={open.src}
                alt={open.title}
                draggable={false}
                className="w-full max-h-[75vh] select-none object-contain bg-black"
              />

              {/* Подсказка о свайпе — только на мобилках */}
              <div className="pointer-events-none absolute bottom-[calc(theme(spacing.5)+72px)] left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/55 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur sm:hidden">
                Свайп ← →
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {open.category}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {(openIndex ?? 0) + 1} / {filtered.length}
                  </div>
                </div>
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
