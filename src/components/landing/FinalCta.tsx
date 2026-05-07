import { MaxLogo } from "./MaxLogo";
import { openMaxBrief } from "./MaxBriefDialog";

export function FinalCta() {
  return (
    <section id="contact" className="border-t border-border bg-[color:var(--card-soft)]">
      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 md:px-8 md:py-28 text-center">
        <span className="inline-flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.1em] text-[color:var(--accent-warm)]">
          <span className="h-[2px] w-7 rounded-full bg-[color:var(--accent-warm)]" aria-hidden />
          Следующий шаг
        </span>
        <h2 className="font-display mt-4 text-[28px] font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-[42px]">
          Покажите поломку — скажу,{" "}
          <span className="text-primary">что делать дальше</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-[1.6] text-muted-foreground">
          Пришлите фото или короткое видео в MAX. Я посмотрю и отвечу: можно ли
          ремонтировать, нужен ли выезд и какой следующий шаг лучше.
        </p>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={openMaxBrief}
            className="inline-flex min-h-[56px] w-full items-center justify-center gap-2.5 rounded-[20px] bg-primary px-7 text-[16px] font-bold text-primary-foreground transition-colors hover:bg-primary-hover sm:w-auto"
          >
            <MaxLogo className="h-6 w-6 shrink-0" />
            Отправить фото или видео в MAX
          </button>
        </div>
      </div>
    </section>
  );
}
