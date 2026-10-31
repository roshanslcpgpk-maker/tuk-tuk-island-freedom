import { createFileRoute } from "@tanstack/react-router";
import { AboutStory, CtaBand, Destinations, Gallery, Hero, HowItWorks, PageHero, Vehicles, WhyUs } from "@/components/site/sections";
import { BookingForm } from "@/components/site/BookingForm";
import { IMG } from "@/lib/images";
export const Route = createFileRoute("/tuk-tuks")({
  head: () => ({
    meta: [
      { title: "Tuk Tuk Rentals in Sri Lanka — Windy Tour" },
      { name: "description", content: "Rent a tuk-tuk and explore Sri Lankan villages, coastal roads and hidden destinations at your own pace." },
      { property: "og:title", content: "Tuk Tuk Rentals in Sri Lanka — Windy Tour" },
      { property: "og:description", content: "Rent a tuk-tuk and explore Sri Lankan villages, coastal roads and hidden destinations at your own pace." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Tuk Tuk Rentals" title="Explore More with a Tuk Tuk" text="Experience the real Sri Lankan adventure. Travel through beautiful villages, coastal roads and hidden destinations at your own pace." img={IMG.tukCoast} />
      <WhyUs />
      <HowItWorks />
      <Destinations />
      <BookingForm defaultVehicle="Tuk Tuk" />
    </>
  );
}
