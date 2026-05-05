import { useMemo, useState } from "react";
import { Check, Copy } from "lucide-react";
import { Section } from "./Section";
import { MaxLogo } from "./MaxLogo";
import { MAX_LINK } from "@/lib/links";

type Field = {
  key: string;
  label: string;
  hint?: string;
  options: string[];
};

const FIELDS_TOP: Field[] = [
  {
    key: "item",
    label: "1. Что сломалось?",
    options: ["Диван", "Кресло", "Стул", "Кровать", "Шкаф", "Другое"],
  },
  {
    key: "issue",
    label: "2. Что именно произошло?",
    options: [
      "Просел",
      "Скрипит",
      "Не раскладывается",
      "Сломался механизм",
      "Порвалась ткань",
      "Шатается",
      "Другое",
    ],
  },
];

const FIELDS_BOTTOM: Field[] = [
  {
    key: "pickup",
    label: "4. Нужно ли забирать мебель?",
    options: ["Да", "Нет", "Не знаю"],
  },
  {
    key: "media",
    label: "5. Можете приложить фото или видео?",
    hint: "Лучше короткое видео: мебель целиком, место поломки и как проявляется проблема.",
    options: ["Прикреплю в MAX", "Отправлю отдельно", "Пока нет"],
  },
];

export function Brief() {
  const [values, setValues] = useState<Record<string, string>>({});
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [copied, setCopied] = useState(false);

  const message = useMemo(() => {
    const v = (k: string) => values[k]?.trim() || "—";
    return [
      "Здравствуйте, Владимир. Хочу узнать по ремонту мебели.",
      "",
      `Что сломалось: ${v("item")}`,
      `Что произошло: ${v("issue")}`,
      `Где находится мебель: ${location.trim() || "—"}`,
      `Нужно ли забирать мебель: ${v("pickup")}`,
      `Фото/видео: ${v("media")}`,
      "",
      `Меня зовут: ${name.trim() || "—"}`,
      `Телефон для связи: ${phone.trim() || "—"}`,
    ].join("\n");
  }, [values, location, name, phone]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      /* ignore */
    }
  };

  const handleSend = async () => {
    await copyToClipboard();
    window.open(MAX_LINK, "_blank", "noopener,noreferrer");
  };

  return (
    <Section
      id="brief"
      eyebrow="Перед отправкой в MAX"
      title="Ответьте на 5 вопросов — и я быстрее пойму поломку"
      intro={
        <p>
          Так лучше, чем писать «Здравствуйте, сколько стоит?». Я сразу увижу,
          что сломалось, где находится мебель и нужен ли выезд.
        </p>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">
        <div className="space-y-7">
          {FIELDS_TOP.map((f) => (
            <FieldBlock
              key={f.key}
              field={f}
              value={values[f.key]}
              onChange={(v) => setValues((s) => ({ ...s, [f.key]: v }))}
            />
          ))}

          <div>
            <label
              htmlFor="brief-location"
              className="block text-[15px] font-semibold text-foreground"
            >
              3. Где находится мебель?
            </label>
            <p className="mt-1 text-[13px] text-muted-foreground">
              Город и район — чтобы я понял, нужен ли выезд.
            </p>
            <input
              id="brief-location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value.slice(0, 120))}
              placeholder="Например: Южно-Сахалинск, район Дальнее"
              className="mt-3 w-full rounded-xl border border-border bg-card px-4 py-3 text-[15px] text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-2 focus:ring-foreground/10"
            />
          </div>

          {FIELDS_BOTTOM.map((f) => (
            <FieldBlock
              key={f.key}
              field={f}
              value={values[f.key]}
              onChange={(v) => setValues((s) => ({ ...s, [f.key]: v }))}
            />
          ))}

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="brief-name"
                className="block text-[15px] font-semibold text-foreground"
              >
                Как вас зовут?
              </label>
              <input
                id="brief-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value.slice(0, 60))}
                placeholder="Имя"
                className="mt-3 w-full rounded-xl border border-border bg-card px-4 py-3 text-[15px] text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-2 focus:ring-foreground/10"
              />
            </div>
            <div>
              <label
                htmlFor="brief-phone"
                className="block text-[15px] font-semibold text-foreground"
              >
                Телефон для связи
              </label>
              <input
                id="brief-phone"
                type="tel"
                inputMode="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value.slice(0, 30))}
                placeholder="+7 ___ ___ __ __"
                className="mt-3 w-full rounded-xl border border-border bg-card px-4 py-3 text-[15px] text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-2 focus:ring-foreground/10"
              />
            </div>
          </div>
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-muted-foreground">
                Это уйдёт в чат
              </span>
              <button
                type="button"
                onClick={copyToClipboard}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-[12px] font-semibold text-foreground transition-colors hover:bg-surface"
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
                {copied ? "Скопировано" : "Скопировать"}
              </button>
            </div>
            <pre className="font-sans mt-3 max-h-[280px] overflow-auto whitespace-pre-wrap rounded-xl bg-surface p-4 text-[13px] leading-[1.55] text-foreground">
              {message}
            </pre>

            <button
              type="button"
              onClick={handleSend}
              className="mt-4 inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-primary px-5 py-3.5 text-[15px] font-bold text-primary-foreground shadow-[0_10px_24px_-10px_oklch(0.555_0.205_260/0.6)] transition-colors hover:bg-primary-hover"
            >
              <MaxLogo className="h-5 w-5" />
              Отправить Владимиру в MAX
            </button>
            <p className="mt-3 text-center text-[12px] leading-relaxed text-muted-foreground">
              Текст заявки скопируется — вставьте его в MAX и приложите фото или видео.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function FieldBlock({
  field,
  value,
  onChange,
}: {
  field: Field;
  value?: string;
  onChange: (v: string) => void;
}) {
  const [other, setOther] = useState("");
  const isOther =
    value !== undefined && value !== "" && !field.options.includes(value);
  const otherActive = isOther || value === "Другое";

  return (
    <div>
      <label className="block text-[15px] font-semibold text-foreground">
        {field.label}
      </label>
      {field.hint && (
        <p className="mt-1 text-[13px] text-muted-foreground">{field.hint}</p>
      )}
      <div className="mt-3 flex flex-wrap gap-2">
        {field.options.map((opt) => {
          const active = opt === "Другое" ? otherActive : value === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => {
                if (opt === "Другое") {
                  onChange(other.trim() || "Другое");
                } else {
                  onChange(opt);
                }
              }}
              className={`rounded-full border px-4 py-2 text-[14px] font-medium transition-colors ${
                active
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-card text-foreground hover:bg-surface"
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {otherActive && (
        <input
          type="text"
          value={other}
          onChange={(e) => {
            const v = e.target.value.slice(0, 120);
            setOther(v);
            onChange(v.trim() || "Другое");
          }}
          placeholder="Опишите своими словами"
          className="mt-3 w-full rounded-xl border border-border bg-card px-4 py-2.5 text-[14px] text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-2 focus:ring-foreground/10"
        />
      )}
    </div>
  );
}
