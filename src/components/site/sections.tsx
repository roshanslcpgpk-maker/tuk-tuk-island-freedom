import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Bike, CalendarCheck, HeartHandshake, MapPinned, MessageCircle, ShieldCheck, Wallet } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { DESTINATIONS, IMG } from "@/lib/images";
import { btn, Reveal, SectionHead } from "./ui";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-overlay">
      <img src={IMG.hero} alt="Colourful tuk-tuks driving along a palm-lined coastal road in Sri Lanka at sunset" width={1920} height={1088} fetchPriority="high" className="hero-zoom absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-overlay/90 via-overlay/40 to-overlay/30" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-16 sm:px-8 sm:pb-24">
        <Reveal>
          <p className="eyebrow text-sand">Tuk Tuk & Motorbike Rentals · Sri Lanka</p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-6 max-w-4xl text-5xl leading-[0.98] text-on-dark sm:text-7xl lg:text-8xl">
            Discover Sri Lanka <em className="text-sand">Your Way.</em>
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-on-dark/85 sm:text-lg">
            Your journey, your freedom. Explore the beauty of Sri Lanka with our reliable Tuk Tuk and Motorbike rentals.
          </p>
        </Reveal>
        <Reveal delay={360} className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link to="/" hash="vehicles" className={btn({ variant: "sand", size: "lg" })}>
            Explore Our Vehicles <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/contact" className={btn({ variant: "ghostLight", size: "lg" })}>Book Your Ride</Link>
        </Reveal>
        <div className="mt-16 hidden items-center gap-10 border-t border-on-dark/20 pt-6 text-sm text-on-dark/75 md:flex">
          <span>Ella</span><span>Sigiriya</span><span>Mirissa</span><span>Galle</span><span>Kandy</span><span>Arugam Bay</span>
        </div>
      </div>
    </section>
  );
}

function VehicleRow({ index, eyebrow, title, text, cta, to, main, side, flip }: { index: string; eyebrow: string; title: string; text: string; cta: string; to: "/tuk-tuks" | "/motorbikes"; main: string; side: string; flip?: boolean }) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
      <Reveal className={cn("relative lg:col-span-7", flip && "lg:order-2")}>
        <div className="overflow-hidden">
          <img src={main} alt={title} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-[1.5s] hover:scale-105" />
        </div>
        <img src={side} alt="" loading="lazy" className={cn("absolute -bottom-10 hidden aspect-[3/4] w-44 border-8 border-background object-cover shadow-soft md:block", flip ? "-left-8" : "-right-8")} />
      </Reveal>
      <Reveal delay={150} className={cn("lg:col-span-5", flip && "lg:order-1")}>
        <p className="font-display text-7xl text-sage">{index}</p>
        <p className="eyebrow mt-4 text-primary">{eyebrow}</p>
        <h3 className="mt-4 text-4xl leading-tight sm:text-5xl">{title}</h3>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{text}</p>
        <Link to={to} className={btn({ className: "mt-10" })}>
          {cta} <ArrowRight className="h-4 w-4" />
        </Link>
      </Reveal>
    </div>
  );
}

export function Vehicles() {
  return (
    <section id="vehicles" className="scroll-mt-20 bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead eyebrow="Our Vehicles" title="Two ways to wander the island." intro="Choose the ride that suits your journey, from coastal cruises with friends to solo mountain escapes." />
        <div className="mt-20 space-y-32">
          <VehicleRow index="01" eyebrow="Tuk Tuk Rentals" title="Explore More with a Tuk Tuk" text="Experience the real Sri Lankan adventure. Travel through beautiful villages, coastal roads and hidden destinations at your own pace." cta="Explore Tuk Tuks" to="/tuk-tuks" main={IMG.tukTea} side={IMG.tukCoast} />
          <VehicleRow flip index="02" eyebrow="Motorbike Rentals" title="Ride Beyond the Ordinary" text="Feel the freedom of the open road. Discover breathtaking landscapes and unforgettable destinations on two wheels." cta="Explore Motorbikes" to="/motorbikes" main={IMG.motoCoast} side={IMG.motoJungle} />
        </div>
      </div>
    </section>
  );
}

const FEATURES = [
  { icon: ShieldCheck, title: "Reliable Vehicles", text: "Well-maintained tuk-tuks and motorbikes, checked before every rental." },
  { icon: Wallet, title: "Affordable Rental Options", text: "Flexible daily and longer rentals to suit your travel plans and budget." },
  { icon: CalendarCheck, title: "Easy Booking Process", text: "Send an inquiry, confirm on WhatsApp and you're ready to ride." },
  { icon: HeartHandshake, title: "Friendly Local Support", text: "A local team on hand with route tips and help whenever you need it." },
];

export function WhyUs() {
  return (
    <section className="bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead eyebrow="Why Windy Tour" title="Travel with confidence." center />
        <div className="mt-16 grid border-t border-l border-border sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 100} className="border-r border-b border-border p-8 sm:p-10">
              <f.icon className="h-8 w-8 text-primary" strokeWidth={1.25} />
              <h3 className="mt-8 text-2xl">{f.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Destinations() {
  return (
    <section className="bg-emerald-deep py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHead light eyebrow="Explore Sri Lanka" title="Sri Lanka Is Waiting. Let's Explore." />
          <Reveal><p className="max-w-sm text-on-dark/70">Six places our riders love. Every one of them is better reached on your own wheels.</p></Reveal>
        </div>
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DESTINATIONS.map((d, i) => (
            <Reveal key={d.name} delay={(i % 3) * 120} className={cn(i % 3 === 1 && "lg:mt-16")}>
              <article className="group relative overflow-hidden">
                <img src={d.img} alt={`${d.name}, Sri Lanka`} loading="lazy" width={896} height={1152} className="aspect-[4/5] w-full object-cover transition-transform duration-[1.4s] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-overlay/85 via-overlay/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p className="eyebrow text-sand">{d.region}</p>
                  <h3 className="mt-2 text-4xl text-on-dark">{d.name}</h3>
                  <p className="mt-3 max-h-0 overflow-hidden text-sm text-on-dark/80 transition-all duration-500 group-hover:max-h-20">{d.note}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { n: "01", icon: Bike, title: "Choose Your Ride", text: "Pick a tuk-tuk or motorbike that fits your route, group and travel style." },
  { n: "02", icon: MessageCircle, title: "Contact Us & Confirm", text: "Send a booking inquiry and we'll confirm the details with you on WhatsApp." },
  { n: "03", icon: MapPinned, title: "Pick Up & Explore", text: "Collect your vehicle and set off to discover Sri Lanka at your own pace." },
];

export function HowItWorks() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead eyebrow="How It Works" title="Three steps to the open road." center />
        <div className="relative mt-20 grid gap-14 md:grid-cols-3 md:gap-8">
          <div className="absolute top-14 right-[16%] left-[16%] hidden h-px bg-border md:block" />
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 150} className="relative text-center">
              <div className="relative mx-auto grid h-28 w-28 place-items-center rounded-full border border-border bg-background">
                <span className="font-display text-4xl text-primary">{s.n}</span>
                <span className="absolute -right-1 -bottom-1 grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground">
                  <s.icon className="h-4 w-4" />
                </span>
              </div>
              <h3 className="mt-8 text-2xl">{s.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-16 text-center">
          <Link to="/contact" className={btn({ size: "lg" })}>Start Your Booking <ArrowUpRight className="h-4 w-4" /></Link>
        </Reveal>
      </div>
    </section>
  );
}

export function AboutStory({ full }: { full?: boolean }) {
  return (
    <section className="bg-sand py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24">
        <Reveal className="relative">
          <img src={IMG.tukHills} alt="A tuk-tuk on a quiet hill-country road in Sri Lanka" loading="lazy" className="aspect-[4/5] w-full object-cover" />
          <div className="absolute -bottom-6 left-6 bg-primary px-6 py-5 text-primary-foreground sm:left-10">
            <p className="font-display text-xl italic">"Feel the freedom."</p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <p className="eyebrow text-primary">About Windy Tour</p>
          <h2 className="mt-4 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">More Than a Ride. It's a Journey.</h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>Sri Lanka is best discovered slowly: a roadside king coconut, a detour to a quiet beach, a village wave as you pass. Windy Tour exists to give international travellers that freedom.</p>
            <p>With our tuk-tuks and motorbikes, you set the route and the rhythm. No fixed tours, no rushing between stops. Just the island, opening up mile by mile.</p>
            {full && <p>We're a local team who love these roads. We help you choose the right vehicle, share the routes we ride ourselves, and stay a message away throughout your trip.</p>}
          </div>
          {!full && <Link to="/about" className={btn({ variant: "outline", className: "mt-10" })}>Our Story <ArrowRight className="h-4 w-4" /></Link>}
        </Reveal>
      </div>
    </section>
  );
}

function G({ src, alt, className, label }: { src: string; alt: string; className?: string; label: string }) {
  return (
    <figure className={cn("group relative overflow-hidden", className)}>
      <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-105" />
      <figcaption className="eyebrow absolute bottom-4 left-4 bg-background/90 px-3 py-2 text-[0.6rem] text-foreground opacity-0 transition-opacity group-hover:opacity-100">{label}</figcaption>
    </figure>
  );
}

export function Gallery() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead eyebrow="Gallery" title="Moments from the road." />
        <Reveal className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] md:grid-cols-4 md:gap-4">
          <G className="col-span-2 row-span-2" src={IMG.tukRow} alt="Row of colourful tuk-tuks" label="Tuk Tuks" />
          <G className="row-span-2" src={IMG.motoRider} alt="Smiling rider on a scooter" label="Travel Experiences" />
          <G src={IMG.tukGreen} alt="Green tuk-tuk on a tea estate road" label="Mountain Roads" />
          <G src={IMG.motoSunset} alt="Motorbike on a coastal road at sunset" label="Coastal Roads" />
          <G className="col-span-2" src={IMG.tukCoast} alt="Tuk-tuk beside the ocean" label="Coastal Roads" />
          <G src={IMG.motoCouple} alt="Couple riding a scooter through palms" label="Motorbikes" />
          <G className="col-span-2 md:col-span-1" src={IMG.motoJungle} alt="Rider in tropical jungle" label="Tropical Landscapes" />
        </Reveal>
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, text, img, children }: { eyebrow: string; title: string; text: string; img: string; children?: ReactNode }) {
  return (
    <section className="relative flex min-h-[78svh] items-end overflow-hidden bg-overlay">
      <img src={img} alt="" className="hero-zoom absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-overlay/90 via-overlay/40 to-overlay/30" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-16 sm:px-8 sm:pb-20">
        <Reveal><p className="eyebrow text-sand">{eyebrow}</p></Reveal>
        <Reveal delay={120}><h1 className="mt-5 max-w-3xl text-5xl leading-[1] text-on-dark sm:text-7xl">{title}</h1></Reveal>
        <Reveal delay={240}><p className="mt-6 max-w-xl text-lg text-on-dark/85">{text}</p></Reveal>
        {children && <Reveal delay={360} className="mt-10 flex flex-col gap-4 sm:flex-row">{children}</Reveal>}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-primary py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 sm:px-8 md:flex-row md:items-center">
        <Reveal><h2 className="max-w-2xl text-4xl leading-tight text-primary-foreground sm:text-5xl">Your island adventure starts with one message.</h2></Reveal>
        <Reveal delay={150}><Link to="/contact" className={btn({ variant: "sand", size: "lg" })}>Book Your Ride <ArrowRight className="h-4 w-4" /></Link></Reveal>
      </div>
    </section>
  );
}
