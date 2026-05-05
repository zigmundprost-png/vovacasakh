import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { TrustStrip } from "@/components/landing/TrustStrip";
import { MobileStickyCta } from "@/components/landing/MobileStickyCta";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Вова Карло — ремонт диванов в Южно-Сахалинске" },
      {
        name: "description",
        content:
          "Частный мастер Владимир: ремонт диванов, кресел, стульев и кроватей в Южно-Сахалинске. Диагностика по фото или видео, забор и возврат мебели, гарантия до 1 года.",
      },
      { property: "og:title", content: "Вова Карло — ремонт диванов и мягкой мебели" },
      {
        property: "og:description",
        content:
          "Пришлите фото или видео поломки — Владимир скажет, есть ли смысл ремонтировать, и восстановит мебель.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pb-24 md:pb-0">
        <Hero />
        <TrustStrip />

        {/* Заглушки-якоря под будущие секции, чтобы навигация не вела в пустоту */}
        <SectionStub id="services" title="Что ремонтирую" />
        <SectionStub id="process" title="Как проходит работа" />
        <SectionStub id="prices" title="Цены" />
        <SectionStub id="works" title="Работы" />
        <SectionStub id="reviews" title="Отзывы" />
        <SectionStub id="faq" title="FAQ" />
      </main>
      <MobileStickyCta />
    </div>
  );
}

function SectionStub({ id, title }: { id: string; title: string }) {
  return (
    <section id={id} className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-20">
        <h2 className="font-display text-2xl font-semibold text-foreground/70 sm:text-3xl">
          {title}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Раздел в разработке.
        </p>
      </div>
    </section>
  );
}
