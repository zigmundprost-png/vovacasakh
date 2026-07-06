import maxLogo from "@/assets/max-logo.jpg";

export function MaxLogo({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <img
      src={maxLogo}
      alt=""
      aria-hidden
      width={96}
      height={96}
      className={`${className} rounded-[6px] object-cover`}
      draggable={false}
      loading="lazy"
      decoding="async"
    />
  );
}
