import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { TrustStrip } from "@/components/landing/TrustStrip";
import { MobileStickyCta } from "@/components/landing/MobileStickyCta";
import { DesktopFloatingCta } from "@/components/landing/DesktopFloatingCta";
import { Problem } from "@/components/landing/Problem";
import { Services } from "@/components/landing/Services";
import { Process } from "@/components/landing/Process";
import { Prices } from "@/components/landing/Prices";
import { Pickup } from "@/components/landing/Pickup";
import { Works } from "@/components/landing/Works";
import { Reviews } from "@/components/landing/Reviews";
import { Guarantee } from "@/components/landing/Guarantee";
import { ForWhom } from "@/components/landing/ForWhom";
import { Geography } from "@/components/landing/Geography";
import { Faq } from "@/components/landing/Faq";
import { FinalCta } from "@/components/landing/FinalCta";
import { Brief } from "@/components/landing/Brief";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ВОВА КАРЛО — ремонт диванов в Южно-Сахалинске" },
      {
        name: "description",
        content:
          "Меня зовут Владимир, я частный мастер по ремонту диванов, кресел, стульев и кроватей в Южно-Сахалинске. Посмотрю поломку по фото или видео, при необходимости заберу и привезу мебель. Гарантия до 1 года.",
      },
      { property: "og:title", content: "ВОВА КАРЛО — ремонт диванов и мягкой мебели" },
      {
        property: "og:description",
        content:
          "Пришлите фото или видео поломки — я скажу, есть ли смысл ремонтировать, и помогу восстановить мебель.",
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
        <Problem />
        <Services />
        <Process />
        <Prices />
        <Pickup />
        <Works />
        <Reviews />
        <Guarantee />
        <ForWhom />
        <Geography />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileStickyCta />
      <DesktopFloatingCta />
    </div>
  );
}
