import { MAX_LINK } from "@/lib/links";
import { Send } from "lucide-react";

export function FinalCta() {
  return (
    <section id="contact" className="border-t border-border bg-[color:var(--card-soft)]">
      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 md:px-8 md:py-28 text-center">
        <span className="inline-flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.1em] text-[color:var(--accent-warm)]">
          <span className="h-[2px] w-7 rounded-full bg-[color:var(--accent-warm)]" aria-hidden />
          Следующий шаг
        </span>
        <h2 className="font-display mt-4 text-[28px] font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-[42px]">
          Покажите поломку — Владимир скажет,{" "}
          <span className="text-primary">какой следующий шаг лучше</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-[1.6] text-muted-foreground">
          Отправьте фото или короткое видео в MAX. Так быстрее понять, можно ли
          дать предварительную оценку, нужен ли выезд и стоит ли ремонт
          рассматривать.
        </p>

        <div className="mt-8 flex justify-center">
          {/* MAX_LINK_PLACEHOLDER — заменить в src/lib/links.ts */}
          <a
            href={MAX_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[56px] items-center justify-center gap-2.5 rounded-[20px] bg-primary px-7 text-[16px] font-bold text-primary-foreground shadow-[0_10px_28px_-8px_oklch(0.555_0.205_260/0.55)] transition-all hover:bg-primary-hover hover:shadow-[0_14px_32px_-8px_oklch(0.555_0.205_260/0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Send className="h-[18px] w-[18px]" aria-hidden />
            Отправить фото или видео в MAX
          </a>
        </div>

        <p className="mx-auto mt-6 max-w-xl text-[13px] leading-relaxed text-muted-foreground">
          Снимите мебель целиком, место поломки крупно и то, как проблема
          проявляется. Если видео неудобно, пришлите 2–3 фото.
        </p>
      </div>
    </section>
  );
}
