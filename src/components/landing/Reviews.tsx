import { useState } from "react";
import { Section } from "./Section";
import { Star, BadgeCheck, ChevronDown } from "lucide-react";


type Review = { name: string; date: string; text: string };

const REVIEWS: Review[] = [
  {
    name: "Dasha_0807",
    date: "6 декабря 2024",
    text: "Прекрасный мастер. Работа была выполнена в срок и очень качественно. Очень рекомендуем.",
  },
  {
    name: "Alenj",
    date: "30 декабря 2024",
    text: "Мастер действительно высококвалифицированный профессионал своего дела! Достаточно сложная работа по ремонту корпусной мебели была выполнена своевременно, а самое главное очень качественно! От души рекомендую всем — обращайтесь, не пожалеете.",
  },
  {
    name: "Shikh",
    date: "19 февраля 2025",
    text: "Выехали в другой город. Сделали хорошо. Мои лучшие рекомендации.",
  },
  {
    name: "4uppoku",
    date: "25 февраля 2025",
    text: "Была необходима замена пружинного блока у дивана-кровати. Забирал/привозил Владимир всё сам в оговорённое удобное нам время. Работать с ним приятно, результатом довольны. Рекомендуем. По второму дивану тоже к нему обратимся.",
  },
  {
    name: "Alex57399",
    date: "28 марта 2025",
    text: "Сломались пружины на одной части дивана. После посещения магазинов и откровенного отпада от цен на диваны схожего размера решил лучше ремонтировать. Обратился к этому мастеру и не прогадал. Оперативно договорились, что часть дивана привезу сам, с другого города. Через 2 дня диван был готов, с фотоотчётом о проделанных работах. Всё сделано качественно и по стоимости очень демократично. Всем советую.",
  },
  {
    name: "SakhalinStolitsa",
    date: "30 марта 2025",
    text: "Сразу видно, что мастер знает своё дело. Быстро оценил проблему и предложил решение. И конечно же максимально качественно сделал свою работу. Было приятно видеть, что мастер заинтересован в результате.",
  },
  {
    name: "Катерина888",
    date: "16 апреля 2025",
    text: "Огромное спасибо за помощь! Работа была сделана отлично, благодарю за профессионализм и внимание ко всем моим просьбам. Диван снова как новенький. Желаю ещё больше довольных клиентов!",
  },
  {
    name: "Bugaga",
    date: "27 апреля 2025",
    text: "Ребята! Огромное вам спасибо! Впечатлён профессионализмом! Произвели сложный, трудозатратный ремонт дивана и кровати. Своё дело знаете на 5 из 5 баллов! Процветания вам! Ваш телефон теперь у меня в золотой копилочке!",
  },
  {
    name: "1979inna",
    date: "3 мая 2025",
    text: "Быстро, качественно. Профессионал своего дела.",
  },
  {
    name: "v-ik-tuarikk",
    date: "4 мая 2025",
    text: "Работой осталась довольна! Быстро и качественно! Рекомендую!",
  },
  {
    name: "s_pervomaem",
    date: "13 мая 2025",
    text: "Мастер Владимир оперативно и качественно справился с задачей. Спас две кровати и стул. Это приятно. Чините, граждане, любимые изделия!",
  },
  {
    name: "Vokich",
    date: "16 мая 2025",
    text: "Отличный мастер! Рекомендую! Быстро и качественно всё сделал. Понравилось. Буду рекомендовать.",
  },
  {
    name: "Wait",
    date: "29 июня 2025",
    text: "Рекомендую мастера!",
  },
  {
    name: "сонькавадим",
    date: "21 июля 2025",
    text: "Добрый день. Хочу поблагодарить Владимира за его работу. Собрал для нас кухню всё очень чётко, быстро, качественно. Владимир приятный в общении, аккуратный. Бонусом отремонтировал мне шкаф-купе. Все мои пожелания учёл. Спасибо огромное. Я довольна.",
  },
  {
    name: "Scorp.43",
    date: "14 августа 2025",
    text: "Обращался к мастеру по ремонту дивана (замены пружинного блока). Всё было сделано в лучшем виде! Диван как новый! Большое спасибо мастеру! Рекомендую!",
  },
  {
    name: "irina.032012",
    date: "28 августа 2025",
    text: "Добрый день! Благодарю Владимира, мастер с золотыми руками, знающий, что делать и понимающий, что хочет клиент. Работает быстро, слаженно и главное качественно! Рекомендую однозначно. Собрал, заменил старые детали на мебели, которая прослужила уже долгое время, но теперь ещё прослужит долго после работы Владимира! Очень довольна, всё получилось даже лучше, чем ожидали. Спасибо Вам, Владимир, за мастерство. Буду рекомендовать и обращаться к Вам ещё.",
  },
  {
    name: "лиса13",
    date: "17 октября 2025",
    text: "Спасибо Владимир! Приехал как обещал по времени, всё сделал. СПАСИБО. Это МАСТЕР!",
  },
  {
    name: "Епанчева47",
    date: "21 октября 2025",
    text: "Работа сделана на отлично, сроки минимальные. Не пожалели что обратились к этому мастеру. Рекомендуем.",
  },
  {
    name: "aem02111990",
    date: "1 ноября 2025",
    text: "Благодарю Владимира за ремонт кресла, даже не ожидала, что это будет так быстро. Супер. Фотоотчёт предоставил, сам забрал, сам привёз. Сэкономил моё время. Спасибо большое!",
  },
  {
    name: "dili76",
    date: "2 ноября 2025",
    text: "Обращалась к мастеру по поводу замены поролона. После осмотра выяснилось, что нужно заменить пружинный блок. Работа была проведена качественно с видеоотчётом и в очень сжатые сроки. Результатом работы довольна! Однозначно рекомендую профессионала!",
  },
  {
    name: "piskorskiid",
    date: "22 января 2026",
    text: "Отличный мастер! Обращались по ремонту дивана, т.е. замене пружинного блока. Всё сделано качественно и в срок. Цены лояльные, сроки минимальные. Спасибо вам Владимир за работу. Всем рекомендую, обращайтесь.",
  },
  {
    name: "Aksa",
    date: "24 февраля 2026",
    text: "Если нужно быстро и качественно отреставрировать мебель, то вам сюда! Нужно было отреставрировать 6 стульев из массива. Позвонила мастеру — сам приехал, забрал, сделал и привёз обратно. Быстро и качественно! Большое спасибо!",
  },
  {
    name: "1979inna",
    date: "25 марта 2026",
    text: "Второй раз обращался по ремонту мебели. Всё сделано быстро и качественно. Номер сохранён в контактах.",
  },
  {
    name: "SunyashaAhn",
    date: "28 марта 2026",
    text: "Хочу поблагодарить Владимира за отличный ремонт комода. Вещь старая, но дорогая, теперь все ходит как новое! Всё сделано вовремя, без грязи и лишних вопросов. Приятно иметь дело с настоящим мастером. Всем, кому нужна мебель в порядок привести, рекомендую!",
  },
  {
    name: "Proper",
    date: "6 апреля 2026",
    text: "Мастер починил диван быстро и качественно. Пришёл, починил, убрал за собой и ушёл. Спасибо.",
  },
  {
    name: "tib2005",
    date: "11 апреля 2026",
    text: "Рекомендуем мастера! Отремонтировал наш шкаф и дал ему вторую жизнь! Быстро, качественно, шкаф ещё прослужит нам, благодаря умелым рукам мастера!",
  },
];

const PRIORITY_NAMES = new Set([
  "4uppoku",
  "Alex57399",
  "aem02111990",
  "dili76",
  "piskorskiid",
  "Aksa",
  "1979inna",
  "сонькавадим",
]);

const SORTED: Review[] = [
  ...REVIEWS.filter((r) => PRIORITY_NAMES.has(r.name)),
  ...REVIEWS.filter((r) => !PRIORITY_NAMES.has(r.name)),
];

export function Reviews() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? SORTED : SORTED.slice(0, 8);
  const hiddenCount = SORTED.length - 8;

  return (
    <Section
      id="reviews"
      eyebrow="Отзывы клиентов"
      title="Что говорят те, кто уже ко мне обращался"
      intro={
        <p>
          Это реальные отзывы с площадок объявлений. Я их не правил и не выдумывал имена.
        </p>
      }
    >
      <div className="mb-6 flex items-start gap-3 rounded-2xl border-l-4 border-[color:var(--accent-warm)] border-y border-r border-y-[color:var(--card-soft-border)] border-r-[color:var(--card-soft-border)] bg-[oklch(0.98_0.025_45)] p-5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-card text-[color:var(--accent-warm-strong)]">
          <BadgeCheck className="h-[18px] w-[18px]" strokeWidth={2.2} aria-hidden />
        </span>
        <div className="min-w-0">
          <p className="font-display text-[14px] font-extrabold uppercase tracking-[0.08em] text-[color:var(--accent-warm-strong)]">
            Отзывы настоящие
          </p>
          <p className="mt-1.5 text-[15px] leading-[1.55] text-foreground">
            Все отзывы — с реальной площадки объявлений, их можно проверить по ссылке.{" "}
            <a
              href="https://mnogotovarov.ru/3191299.html"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[color:var(--accent-warm-strong)] underline underline-offset-2 hover:opacity-80"
            >
              Открыть отзывы
            </a>
            .
          </p>
        </div>
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid">
        {visible.map((r) => (
          <article
            key={`${r.name}-${r.date}`}
            className="rounded-xl border border-border bg-card p-5"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  {r.name.charAt(0).toUpperCase()}
                </span>
                <div>
                  <div className="text-[14px] font-semibold text-foreground leading-tight">
                    {r.name}
                  </div>
                  <div className="text-[12px] text-muted-foreground">{r.date}</div>
                </div>
              </div>
              <div className="flex gap-0.5 text-amber-500" role="img" aria-label="Оценка 5 из 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" aria-hidden />
                ))}
              </div>
            </div>
            <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{r.text}</p>
          </article>
        ))}
      </div>

      {hiddenCount > 0 && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-6 py-3 text-[15px] font-semibold text-foreground transition-colors hover:bg-surface"
          >
            {expanded ? "Свернуть отзывы" : `Показать ещё (${hiddenCount})`}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
              aria-hidden
            />
          </button>
        </div>
      )}
    </Section>
  );
}
