import { MAX_LINK } from "@/lib/links";
import { Send } from "lucide-react";

export function FinalCta() {
  return (
    <section id="contact" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-4xl px-4 py-20 md:px-8 md:py-28 text-center">
        <span className="inline-flex items-center gap-2 text-[13px] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
          Следующий шаг
        </span>
        <h2 className="mt-4 text-[32px] font-semibold leading-[1.15] tracking-tight text-foreground sm:text-[42px]">
          Покажите поломку — Владимир скажет, какой следующий шаг лучше
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-muted-foreground">
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
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 text-[16px] font-semibold text-primary-foreground shadow-[0_8px_24px_-8px_oklch(0.5_0.15_155/0.55)] transition-all hover:bg-primary-hover hover:shadow-[0_12px_28px_-8px_oklch(0.5_0.15_155/0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Send className="h-4 w-4" aria-hidden />
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
