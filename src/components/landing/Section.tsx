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
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <header className="max-w-2xl">
          {eyebrow && (
            <span className="inline-flex items-center gap-2 text-[13px] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
              {eyebrow}
            </span>
          )}
          <h2 className="mt-3 text-[28px] font-semibold leading-[1.15] tracking-tight text-foreground sm:text-[34px] lg:text-[40px]">
            {title}
          </h2>
          {intro && (
            <div className="mt-5 text-[16px] leading-relaxed text-muted-foreground">{intro}</div>
          )}
        </header>
        {children && <div className="mt-10 md:mt-12">{children}</div>}
      </div>
    </section>
  );
}
