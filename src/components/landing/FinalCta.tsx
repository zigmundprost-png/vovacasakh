import { MAX_LINK, PHONE_LINK, PHONE_NUMBER } from "@/lib/links";
import { Phone } from "lucide-react";
import { MaxLogo } from "./MaxLogo";

export function FinalCta() {
  return (
    <section id="contact" className="border-t border-border bg-[color:var(--card-soft)]">
      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 md:px-8 md:py-28 text-center">
        <span className="inline-flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.1em] text-[color:var(--accent-warm)]">
          <span className="h-[2px] w-7 rounded-full bg-[color:var(--accent-warm)]" aria-hidden />
          Следующий шаг
        </span>
        <h2 className="font-display mt-4 text-[28px] font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-[42px]">
          Покажите мне поломку — скажу,{" "}
          <span className="text-primary">что делать дальше</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-[1.6] text-muted-foreground">
          Пришлите фото или короткое видео в MAX. Так мне быстрее понять, нужен
          ли выезд и стоит ли ремонтировать.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={MAX_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[56px] w-full items-center justify-center gap-2.5 rounded-[20px] bg-primary px-7 text-[16px] font-bold text-primary-foreground transition-colors hover:bg-primary-hover sm:w-auto"
          >
            <MaxLogo className="h-6 w-6 shrink-0" />
            Написать в MAX
          </a>
          <a
            href={PHONE_LINK}
            className="inline-flex min-h-[56px] w-full items-center justify-center gap-2.5 rounded-[20px] border border-[color:var(--card-soft-border)] bg-card px-6 text-[15px] font-bold text-foreground transition-colors hover:bg-[color:var(--card-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
          >
            <Phone className="h-[18px] w-[18px] text-primary" aria-hidden />
            {PHONE_NUMBER}
          </a>
        </div>

        <p className="mx-auto mt-6 max-w-xl text-[13px] leading-relaxed text-muted-foreground">
          Снимите мебель целиком, место поломки крупно и то, как проявляется
          проблема. Если видео неудобно — пришлите 2–3 фото.
        </p>
      </div>
    </section>
  );
}
