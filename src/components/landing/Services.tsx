import { Section } from "./Section";
import { Sofa, Wrench } from "lucide-react";

const MAIN = [
  "Ремонт каркаса дивана",
  "Ремонт подлокотников",
  "Замена или ремонт пружинного блока",
  "Замена поролона и наполнителя",
  "Замена «змейки»",
  "Устранение скрипов",
  "Ремонт выкатной части",
  "Ремонт и замена отдельных механизмов",
  "Ремонт кресел, стульев, пуфов",
  "Мелкий ремонт ткани, если технически возможно",
];

const EXTRA = [
  "Ремонт стульев, кроватей, комодов, шкафов",
  "Регулировка фасадов, ящиков и дверей",
  "Замена части фурнитуры",
  "Сборка мебели, если задача адекватна по объёму",
  "Крупные сборки — с подключением проверенных людей",
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Главный фокус"
      title="Что ремонтирует Владимир"
      intro={
        <p>
          Основной фокус — диваны, кресла, стулья, кровати и другая мягкая мебель.
          Корпусную мебель и сборку можно обсудить отдельно, если задача подходит
          по объёму и экономике.
        </p>
      }
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <ServiceCard
          icon={<Sofa className="h-5 w-5" />}
          title="Диваны и мягкая мебель"
          items={MAIN}
          primary
        />
        <ServiceCard icon={<Wrench className="h-5 w-5" />} title="Дополнительно" items={EXTRA} />
      </div>

      <p className="mt-6 text-[14px] text-muted-foreground">
        Не беру в центр работы: полную перетяжку, сложный пошив, встроенную мебель,
        мелкую дешёвую сборку и обещание «чиню всё».
      </p>
    </Section>
  );
}

function ServiceCard({
  icon,
  title,
  items,
  primary = false,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
  primary?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border bg-card p-6 md:p-8 ${
        primary ? "border-primary/30" : "border-border"
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {icon}
        </span>
        <h3 className="text-[18px] font-semibold text-foreground">{title}</h3>
      </div>
      <ul className="mt-5 grid gap-2.5">
        {items.map((it) => (
          <li key={it} className="flex gap-2.5 text-[15px] leading-relaxed text-foreground/85">
            <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
