import { Hammer, PackageCheck, Users, ImageIcon } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Hammer,
    title: "Знаю мебель изнутри",
    text: "Механизмы, пружины, каркасы, фасады и фурнитура.",
  },
  {
    icon: PackageCheck,
    title: "Заберу и привезу",
    text: "Если чинить дома неудобно — забор и возврат по договорённости.",
  },
  {
    icon: Users,
    title: "Сборка с ответственностью",
    text: "Беру задачи, где можно сделать аккуратно и отвечать за результат.",
  },
];

export function About() {
  return (
    <section id="about" className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 md:px-8 md:py-24">
        <header className="max-w-2xl">
          <span className="inline-flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.1em] text-[color:var(--accent-warm)]">
            <span className="h-[2px] w-7 rounded-full bg-[color:var(--accent-warm)]" aria-hidden />
            Кто будет работать
          </span>
          <h2 className="font-display mt-3 text-[26px] font-extrabold leading-[1.15] tracking-tight text-foreground sm:text-[32px] lg:text-[40px]">
            Обо мне
          </h2>
        </header>

        <div className="mt-9 grid gap-8 md:mt-12 md:grid-cols-[260px_1fr] md:gap-10 lg:grid-cols-[300px_1fr] lg:gap-14">
          {/* Фото мастера */}
          <div className="mx-auto w-full max-w-[260px] md:mx-0 md:max-w-none">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-border bg-[color:var(--card-soft)] shadow-[0_18px_40px_-22px_oklch(0.555_0.205_260/0.4)]">
              {/* Плейсхолдер под фото — просто замени src ниже */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground">
                <ImageIcon className="h-10 w-10" strokeWidth={1.6} aria-hidden />
                <span className="text-[12px] font-medium">Фото мастера</span>
              </div>
              {/* <img src="/master.jpg" alt="Владимир, мастер по ремонту мебели" className="absolute inset-0 h-full w-full object-cover" /> */}

              <span className="absolute bottom-3 left-3 right-3 rounded-xl bg-background/90 px-3 py-2 text-center text-[12px] font-bold uppercase tracking-[0.08em] text-foreground backdrop-blur">
                Владимир · 20+ лет опыта
              </span>
            </div>
          </div>

          {/* Текст */}
          <div className="space-y-4 text-[16px] leading-[1.6] text-muted-foreground">
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
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-14">
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
      </div>
    </section>
  );
}
