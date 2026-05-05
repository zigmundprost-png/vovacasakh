import { Phone } from "lucide-react";
import { MAX_LINK, PHONE_LINK, WHATSAPP_LINK } from "@/lib/links";
import { MaxLogo } from "./MaxLogo";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function MobileStickyCta() {
  return (
    <div
      className="md:hidden fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/92 backdrop-blur-md"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-2.5">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Написать в WhatsApp"
          className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[18px] transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <WhatsAppIcon className="h-[52px] w-[52px] drop-shadow-[0_8px_16px_rgba(37,211,102,0.45)]" rounded={false} />
        </a>

        <a
          href={MAX_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Написать в MAX"
          className="flex min-h-[52px] flex-1 items-center justify-center gap-2.5 rounded-[18px] bg-primary px-4 text-[15px] font-bold text-primary-foreground transition-colors hover:bg-primary-hover"
        >
          <MaxLogo className="h-5 w-5 shrink-0" />
          Фото в MAX
        </a>

        <a
          href={PHONE_LINK}
          aria-label="Позвонить мне"
          className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[18px] bg-foreground text-background transition-colors hover:bg-foreground/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Phone className="h-[20px] w-[20px]" strokeWidth={2.4} aria-hidden />
        </a>
      </div>
    </div>
  );
}
