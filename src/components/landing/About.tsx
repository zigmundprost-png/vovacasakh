import masterPhoto from "@/assets/about-master-temp.png.asset.json";
import workPhoto1 from "@/assets/about-work-1.png.asset.json";
import workPhoto2 from "@/assets/about-work-2.png.asset.json";
import workPhoto3 from "@/assets/about-work-3.png.asset.json";
import workPhoto4 from "@/assets/about-work-4.png.asset.json";

const WORK_PHOTOS = [
  {
    src: workPhoto1.url,
    alt: "Владимир ремонтирует деревянную часть мебели шуруповертом",
  },
  {
    src: workPhoto2.url,
    alt: "Владимир укрепляет каркас мебели во время ремонта",
  },
  {
    src: workPhoto3.url,
    alt: "Владимир ремонтирует основание дивана",
  },
  {
    src: workPhoto4.url,
    alt: "Владимир работает с механизмом дивана во время ремонта",
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

            <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
              {WORK_PHOTOS.map((photo) => (
                <div
                  key={photo.src}
                  className="aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-[color:var(--card-soft)]"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
