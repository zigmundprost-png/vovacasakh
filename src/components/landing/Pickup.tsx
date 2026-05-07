import { Section } from "./Section";
import { Truck, Package, Camera, Home, MapPin, Users, Info } from "lucide-react";

const PERKS = [
  { icon: Truck, text: "Заберу мебель" },
  { icon: Home, text: "Привезу обратно и помогу занести" },
  { icon: Camera, text: "По желанию пришлю фото или видеоотчёт" },
  { icon: MapPin, text: "Возможен выезд за город" },
  { icon: Users, text: "Грузчики, если они нужны" },
  { icon: Package, text: "Меньше грязи и суеты у вас дома" },
];

export function Pickup() {
  return (
    <Section
      id="pickup"
      eyebrow="Забор и возврат"
      title="Если дома ремонтировать неудобно — заберу мебель к себе"
      intro={
        <>
          <p>
            Некоторые работы шумные, грязные или требуют нормального доступа к
            деталям. В таких случаях мне удобнее забрать мебель, спокойно её
            отремонтировать и привезти обратно.
          </p>
          <p className="mt-4">
            Особенно если нужно разобрать диван, заменить пружины, поролон или
            механизм — то, что неудобно делать у вас посреди квартиры.
          </p>
        </>
      }
    >
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {PERKS.map(({ icon: Icon, text }) => (
          <li key={text} className="rounded-xl border border-border bg-card p-5">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon className="h-4 w-4" aria-hidden />
            </span>
            <p className="mt-3 text-[14px] leading-relaxed text-foreground/85">{text}</p>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-start gap-3 rounded-xl border-l-4 border-[color:var(--accent-warm)] bg-[oklch(0.985_0.022_45)] px-4 py-3.5">
        <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-card text-[color:var(--accent-warm)]">
          <Info className="h-3.5 w-3.5" aria-hidden />
        </span>
        <p className="text-[14px] leading-relaxed text-foreground/90">
          Забор и возврат, грузчики и выезд за город — <strong>обсудим заранее</strong>.
        </p>
      </div>
    </Section>
  );
}
