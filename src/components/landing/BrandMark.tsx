type Props = { className?: string };

export function BrandMark({ className = "h-10 w-10 text-[13px]" }: Props) {
  return (
    <span
      aria-hidden
      className={`inline-flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-hover font-bold text-primary-foreground shadow-[0_4px_12px_-4px_oklch(0.555_0.205_260/0.45)] ${className}`}
    >
      ВК
    </span>
  );
}
