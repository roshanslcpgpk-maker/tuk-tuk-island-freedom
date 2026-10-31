import { createFileRoute } from "@tanstack/react-router";
import { AboutStory, CtaBand, Destinations, Gallery, Hero, HowItWorks, PageHero, Vehicles, WhyUs } from "@/components/site/sections";
import { BookingForm } from "@/components/site/BookingForm";
import { IMG } from "@/lib/images";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Windy Tour — Tuk Tuk & Motorbike Rentals in Sri Lanka" },
      { name: "description", content: "Feel the freedom. Rent a tuk-tuk or motorbike and explore Sri Lanka your way with Windy Tour." },
      { property: "og:title", content: "Windy Tour — Tuk Tuk & Motorbike Rentals in Sri Lanka" },
      { property: "og:description", content: "Feel the freedom. Rent a tuk-tuk or motorbike and explore Sri Lanka your way with Windy Tour." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <Hero />
      <Vehicles />
      <WhyUs />
      <Destinations />
      <HowItWorks />
      <AboutStory />
      <Gallery />
      <BookingForm />
    </>
  );
}
