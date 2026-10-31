import { createFileRoute } from "@tanstack/react-router";
import { AboutStory, CtaBand, Destinations, Gallery, Hero, HowItWorks, PageHero, Vehicles, WhyUs } from "@/components/site/sections";
import { BookingForm } from "@/components/site/BookingForm";
import { IMG } from "@/lib/images";
export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book Your Ride — Contact Windy Tour" },
      { name: "description", content: "Send a booking inquiry for a tuk-tuk or motorbike rental in Sri Lanka via WhatsApp." },
      { property: "og:title", content: "Book Your Ride — Contact Windy Tour" },
      { property: "og:description", content: "Send a booking inquiry for a tuk-tuk or motorbike rental in Sri Lanka via WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Book Your Ride" text="Tell us your dates and pickup location, and we'll confirm on WhatsApp." img={IMG.motoCouple} />
      <BookingForm />
    </>
  );
}
