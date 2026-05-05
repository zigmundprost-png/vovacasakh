import { Send } from "lucide-react";
import { MAX_LINK } from "@/lib/links";

export function MobileStickyCta() {
  return (
    <div
      className="md:hidden fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/90 backdrop-blur-md"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto max-w-6xl px-4 py-2.5">
        {/* MAX_LINK_PLACEHOLDER — заменить в src/lib/links.ts */}
        <a
          href={MAX_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Отправить фото в MAX"
          className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-[18px] bg-primary px-6 text-[15px] font-bold text-primary-foreground shadow-[0_8px_20px_-8px_oklch(0.555_0.205_260/0.55)] transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Send className="h-[18px] w-[18px]" aria-hidden />
          Фото в MAX
        </a>
      </div>
    </div>
  );
}
