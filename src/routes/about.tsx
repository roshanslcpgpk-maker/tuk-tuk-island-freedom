import { createFileRoute } from "@tanstack/react-router";
import { AboutStory, CtaBand, Destinations, Gallery, Hero, HowItWorks, PageHero, Vehicles, WhyUs } from "@/components/site/sections";
import { BookingForm } from "@/components/site/BookingForm";
import { IMG } from "@/lib/images";
export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Windy Tour — More Than a Ride" },
      { name: "description", content: "How Windy Tour helps international travellers explore Sri Lanka with tuk-tuk and motorbike rentals." },
      { property: "og:title", content: "About Windy Tour — More Than a Ride" },
      { property: "og:description", content: "How Windy Tour helps international travellers explore Sri Lanka with tuk-tuk and motorbike rentals." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="About Us" title="More Than a Ride. It's a Journey." text="Freedom and flexibility for travellers exploring Sri Lanka." img={IMG.tukRow} />
      <AboutStory full />
      <Gallery />
      <CtaBand />
    </>
  );
}
