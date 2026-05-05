import { Phone } from "lucide-react";
import { MAX_LINK, PHONE_LINK } from "@/lib/links";
import { MaxLogo } from "./MaxLogo";

export function MobileStickyCta() {
  return (
    <div
      className="md:hidden fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/92 backdrop-blur-md"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-2.5">
        {/* MAX_LINK_PLACEHOLDER — заменить в src/lib/links.ts */}
        <a
          href={MAX_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Написать в MAX"
          className="flex min-h-[52px] flex-1 items-center justify-center gap-2.5 rounded-[18px] bg-primary px-5 text-[15px] font-bold text-primary-foreground shadow-[0_8px_20px_-8px_oklch(0.555_0.205_260/0.55)] transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <MaxLogo className="h-5 w-5 shrink-0" />
          Написать в MAX
        </a>

        <a
          href={PHONE_LINK}
          aria-label="Позвонить мастеру"
          className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[18px] border border-[color:var(--card-soft-border)] bg-card text-primary transition-colors hover:bg-[color:var(--card-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Phone className="h-[20px] w-[20px]" aria-hidden />
        </a>
      </div>
    </div>
  );
}
