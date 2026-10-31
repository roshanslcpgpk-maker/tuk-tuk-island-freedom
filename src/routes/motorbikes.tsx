import { createFileRoute } from "@tanstack/react-router";
import { AboutStory, CtaBand, Destinations, Gallery, Hero, HowItWorks, PageHero, Vehicles, WhyUs } from "@/components/site/sections";
import { BookingForm } from "@/components/site/BookingForm";
import { IMG } from "@/lib/images";
export const Route = createFileRoute("/motorbikes")({
  head: () => ({
    meta: [
      { title: "Motorbike Rentals in Sri Lanka — Windy Tour" },
      { name: "description", content: "Feel the freedom of the open road. Rent a motorbike and discover Sri Lanka on two wheels." },
      { property: "og:title", content: "Motorbike Rentals in Sri Lanka — Windy Tour" },
      { property: "og:description", content: "Feel the freedom of the open road. Rent a motorbike and discover Sri Lanka on two wheels." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Motorbike Rentals" title="Ride Beyond the Ordinary" text="Feel the freedom of the open road. Discover breathtaking landscapes and unforgettable destinations on two wheels." img={IMG.motoSunset} />
      <WhyUs />
      <HowItWorks />
      <Destinations />
      <BookingForm defaultVehicle="Motorbike" />
    </>
  );
}
