import { Wrench, Camera, Truck, ShieldCheck } from "lucide-react";

const ITEMS = [
  { icon: Wrench, title: "20+ лет опыта", text: "В мебельной работе и ремонте на дому." },
  { icon: Camera, title: "Можно начать с фото", text: "Пришлите снимок или видео — посмотрю и подскажу." },
  { icon: Truck, title: "Забор и возврат", text: "По договорённости — если чинить дома неудобно." },
  { icon: ShieldCheck, title: "Гарантия до 1 года", text: "На выполненные работы и материалы." },
];

export function TrustStrip() {
  return (
    <section aria-label="Почему ко мне обращаются" className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 px-4 py-10 sm:grid-cols-2 md:px-8 md:py-12 lg:grid-cols-4">
        {ITEMS.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/20"
          >
            <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface text-primary">
              <Icon className="h-4 w-4" aria-hidden />
            </span>
            <div>
              <p className="text-[15px] font-semibold text-foreground">{title}</p>
              <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
