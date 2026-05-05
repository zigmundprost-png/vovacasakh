import { Wrench, Camera, Truck, ShieldCheck } from "lucide-react";

const ITEMS = [
  { icon: Wrench, title: "20+ лет опыта", text: "В мебельной работе и ремонте на дому." },
  { icon: Camera, title: "Можно начать с фото", text: "Пришлите снимок или видео — оценю." },
  { icon: Truck, title: "Забор и возврат", text: "По договорённости, если чинить дома неудобно." },
  { icon: ShieldCheck, title: "Гарантия до 1 года", text: "На выполненные работы и материалы." },
];

export function TrustStrip() {
  return (
    <section aria-label="Почему ко мне обращаются" className="border-y border-border bg-surface/60">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 px-4 py-8 sm:grid-cols-2 md:px-8 md:py-10 lg:grid-cols-4">
        {ITEMS.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="flex items-start gap-3 rounded-xl border border-border bg-background p-4 transition-colors hover:border-primary/40"
          >
            <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <p className="font-medium text-foreground">{title}</p>
              <p className="mt-0.5 text-sm text-muted-foreground">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
