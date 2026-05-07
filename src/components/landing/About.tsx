import { ImageIcon } from "lucide-react";

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
          <div className="mx-auto w-full max-w-[260px] md:mx-0 md:max-w-none">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-border bg-[color:var(--card-soft)] shadow-[0_18px_40px_-22px_oklch(0.555_0.205_260/0.4)]">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground">
                <ImageIcon className="h-10 w-10" strokeWidth={1.6} aria-hidden />
                <span className="text-[12px] font-medium">Фото мастера</span>
              </div>
              <span className="absolute bottom-3 left-3 right-3 rounded-xl bg-background/90 px-3 py-2 text-center text-[12px] font-bold uppercase tracking-[0.08em] text-foreground backdrop-blur">
                Владимир · 20+ лет опыта
              </span>
            </div>
          </div>

          <div className="space-y-4 text-[16px] leading-[1.6] text-muted-foreground">
            <p>
              Меня зовут Владимир. Больше 20 лет работаю с мебелью: ремонтирую
              диваны, кресла, стулья, кровати и другую мягкую мебель.
            </p>
            <p>
              Сначала смотрю поломку, объясняю, что произошло, и честно говорю,
              есть ли смысл ремонтировать. Если дома работать неудобно, можем
              договориться о заборе и возврате мебели.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
