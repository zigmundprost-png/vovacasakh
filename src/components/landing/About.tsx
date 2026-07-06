import masterPhoto from "@/assets/about-photo-9.png.asset.json";
import work12 from "@/assets/work-12.png.asset.json";
import work13 from "@/assets/work-13.png.asset.json";
import work14 from "@/assets/work-14.png.asset.json";
import work15 from "@/assets/work-15.png.asset.json";
import work16 from "@/assets/work-16.png.asset.json";
import work17 from "@/assets/work-17.png.asset.json";
import work18 from "@/assets/work-18.png.asset.json";
import work19 from "@/assets/work-19.png.asset.json";
import work20 from "@/assets/work-20.png.asset.json";

const WORK_PHOTOS = [
  {
    src: work12.url,
    alt: "Ремонт дивана из эко-кожи: замена продольных брусков",
    title: "Диван из эко-кожи",
    desc: "Замена и усиление продольной деревянной опоры (бруски). Забирал изделие к себе.",
    price: "20 000 ₽",
  },
  {
    src: work13.url,
    alt: "Ремонт модульного дивана: замена пружинной змейки",
    title: "Модульный диван",
    desc: "Замена креплений пружинной системы «змейка» на всех модулях. Заказчик привозил диван из Томари.",
    price: "30 000 ₽",
  },
  {
    src: work14.url,
    alt: "Ремонт выкатной части углового дивана",
    title: "Угловой диван, выкатная часть",
    desc: "Полная замена креплений пружинной системы (металлическая змейка). Ремонт на дому у заказчицы, 3,5–4 часа.",
    price: "12 000 ₽",
  },
  {
    src: work15.url,
    alt: "Замена поролоновой аппликации на диване",
    title: "Аппликация из поролона",
    desc: "Привёз идентичный поролон, зачистил старый, вырезал и вклеил новый. Работа на дому.",
    price: "10 000 ₽",
  },
  {
    src: work16.url,
    alt: "Мелкий ремонт ткани на подлокотнике дивана",
    title: "Подлокотник дивана",
    desc: "Мелкий ремонт ткани на подлокотнике — аккуратно и незаметно.",
    price: "3 500 ₽",
  },
  {
    src: work17.url,
    alt: "Ремонт выкатной части углового дивана у клиента",
    title: "Угловой диван, выкатная часть",
    desc: "Ремонт выкатной части у клиента дома.",
    price: "8 000 ₽",
  },
  {
    src: work18.url,
    alt: "Усиление мебельных строп на угловом диване",
    title: "Усиление строп",
    desc: "Усиление мебельных строп на двух частях углового дивана, мой материал. Работа за два дня.",
    price: "20 000 ₽",
  },
  {
    src: work19.url,
    alt: "Ремонт каркаса нижней части линейного дивана",
    title: "Каркас линейного дивана",
    desc: "Замена брусков, фанеры, поролона и его элементов, стирка чехла. С материалом.",
    price: "35 000 ₽",
  },
  {
    src: work20.url,
    alt: "Ремонт дивана-книжки: замена пружинного блока",
    title: "Диван-книжка",
    desc: "Замена пружинного блока и поролона на одной части. Забирал диван к себе.",
    price: "28 000 ₽",
  },
];

export function About() {
  return (
    <section id="about" className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 md:px-8 md:py-24">
        <header className="max-w-2xl">
          <span className="inline-flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.1em] text-[color:var(--accent-warm)]">
            <span className="h-[2px] w-7 rounded-full bg-[color:var(--accent-warm)]" aria-hidden />
            Кто будет работать
          </span>
          <h2 className="font-display mt-3 text-[26px] font-extrabold leading-[1.15] tracking-tight text-foreground sm:text-[32px] lg:text-[40px]">
            Обо мне
          </h2>
        </header>

        <div className="mt-9 grid gap-8 md:mt-12 md:grid-cols-[280px_1fr] md:gap-10 lg:grid-cols-[320px_1fr] lg:gap-14">
          <div className="mx-auto w-full max-w-[280px] md:mx-0 md:max-w-none">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-border bg-[color:var(--card-soft)] shadow-[0_18px_40px_-22px_oklch(0.555_0.205_260/0.4)]">
              <img
                src={masterPhoto.url}
                alt="Владимир за работой с мебелью"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <span className="absolute bottom-3 left-3 right-3 rounded-xl bg-background/90 px-3 py-2 text-center text-[12px] font-bold uppercase tracking-[0.08em] text-foreground backdrop-blur">
                Владимир · 20+ лет опыта
              </span>
            </div>
          </div>

          <div>
            <div className="space-y-4 text-[16px] leading-[1.6] text-muted-foreground">
              <p>
                Меня зовут Владимир. Больше 20 лет работаю с мебелью: ремонтирую
                диваны, кресла, стулья, кровати и другую мягкую мебель.
              </p>
              <p>
                Сначала смотрю поломку, объясняю, что произошло, и честно говорю,
                есть ли смысл ремонтировать. Если дома работать неудобно, можем
                договориться о заборе и возврате мебели.
              </p>
            </div>

            <h3 className="font-display mt-8 text-[18px] font-extrabold text-foreground sm:text-[20px]">
              Примеры выполненных работ
            </h3>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {WORK_PHOTOS.map((photo) => (
                <figure
                  key={photo.src}
                  className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_10px_28px_-22px_oklch(0.2_0.02_260/0.35)]"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[color:var(--card-soft)]">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="flex flex-col gap-1.5 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-[14px] font-bold leading-tight text-foreground">
                        {photo.title}
                      </span>
                      <span className="shrink-0 rounded-full bg-[color:var(--card-soft)] px-2.5 py-1 text-[12px] font-bold text-[color:var(--accent-warm)]">
                        {photo.price}
                      </span>
                    </div>
                    <p className="text-[13px] leading-snug text-muted-foreground">
                      {photo.desc}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
