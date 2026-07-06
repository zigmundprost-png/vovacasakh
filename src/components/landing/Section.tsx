import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`border-t border-border bg-background ${className}`}>
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 md:px-8 md:py-24">
        <header className="max-w-2xl">
          {eyebrow && (
            <span className="inline-flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.1em] text-[color:var(--accent-warm-strong)]">
              <span className="h-[2px] w-7 rounded-full bg-[color:var(--accent-warm)]" aria-hidden />
              {eyebrow}
            </span>
          )}
          <h2 className="font-display mt-3 text-[26px] font-extrabold leading-[1.15] tracking-tight text-foreground sm:text-[32px] lg:text-[40px]">
            {title}
          </h2>
          {intro && (
            <div className="mt-5 text-[16px] leading-[1.6] text-muted-foreground">{intro}</div>
          )}
        </header>
        {children && <div className="mt-9 md:mt-12">{children}</div>}
      </div>
    </section>
  );
}
