import { Send } from "lucide-react";
import { MAX_LINK } from "@/lib/links";

export function MobileStickyCta() {
  return (
    <div
      className="md:hidden fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/90 backdrop-blur-md"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto max-w-6xl px-4 py-3">
        {/* MAX_LINK_PLACEHOLDER — заменить в src/lib/links.ts */}
        <a
          href={MAX_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Send className="h-4 w-4" aria-hidden />
          Фото в MAX
        </a>
      </div>
    </div>
  );
}
