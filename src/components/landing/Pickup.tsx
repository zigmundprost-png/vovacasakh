import { Section } from "./Section";
import { Truck, Package, Camera, Home } from "lucide-react";

const PERKS = [
  { icon: Home, text: "Вам не нужно искать машину" },
  { icon: Package, text: "Меньше грязи и суеты у вас дома" },
  { icon: Truck, text: "Привезу обратно и помогу занести" },
  { icon: Camera, text: "По желанию пришлю фото- или видеоотчёт" },
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

      <p className="mt-6 text-[13px] text-muted-foreground">
        Забор и возврат, грузчики и выезд за город — обсуждаем заранее.
      </p>
    </Section>
  );
}
