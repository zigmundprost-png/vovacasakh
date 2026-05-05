import { Section } from "./Section";
import { Hammer, PackageCheck, Users } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Hammer,
    title: "Знаю мебель изнутри",
    text: "Механизмы, пружинные блоки, каркасы, фасады, ящики и фурнитура — сначала смотрю поломку, потом предлагаю решение.",
  },
  {
    icon: PackageCheck,
    title: "Заберу и привезу",
    text: "Если работу неудобно делать дома — заберу мебель, отремонтирую в мастерской и верну обратно.",
  },
  {
    icon: Users,
    title: "Сборка с ответственностью",
    text: "Не беру мелкую работу ради галочки. На больших объёмах могу организовать проверенных сборщиков.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="Кто будет работать"
      title="Обо мне"
      intro={
        <div className="space-y-4">
          <p>
            Меня зовут Владимир. Я больше 20 лет работаю с мебелью: ремонтирую
            диваны, кресла, стулья, кровати, корпусную мебель и занимаюсь
            сборкой. За это время я работал с разными задачами — от обычного
            ремонта до сложных поломок, где нужно понять, что внутри мебели
            реально вышло из строя.
          </p>
          <p>
            Я хорошо знаю, как устроены диваны, механизмы, пружинные блоки,
            каркасы, фасады, ящики и фурнитура. Поэтому сначала смотрю
            поломку, объясняю, есть ли смысл ремонтировать, и только потом
            предлагаю решение. Если работу неудобно делать дома — могу
            забрать мебель, отремонтировать и привезти обратно.
          </p>
          <p>
            Сборкой я тоже занимаюсь, но не беру мелкую работу ради галочки.
            Если захожу в задачу, мне важно сделать аккуратно и отвечать за
            результат. При больших объёмах могу организовать проверенных
            сборщиков.
          </p>
        </div>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="rounded-2xl border border-border bg-card p-5 shadow-sm"
          >
            <span
              aria-hidden
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--card-soft)] text-primary"
            >
              <Icon className="h-5 w-5" strokeWidth={2.2} />
            </span>
            <h3 className="font-display mt-4 text-[17px] font-bold leading-tight text-foreground">
              {title}
            </h3>
            <p className="mt-2 text-[14px] leading-[1.55] text-muted-foreground">
              {text}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
