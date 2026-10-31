import { CheckCircle2, MessageCircle, Send } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { bookingMessage, bookingSchema, type Booking } from "@/lib/booking";
import { IMG } from "@/lib/images";
import { whatsappUrl } from "@/lib/site";
import { btn, Reveal } from "./ui";

const field = "h-12 w-full border-0 border-b border-input bg-transparent px-0 text-base text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:ring-0 focus:outline-none transition-colors";

function Field({ label, error, children, className }: { label: string; error?: string; children: ReactNode; className?: string }) {
  return (
    <label className={cn("block", className)}>
      <span className="eyebrow text-[0.65rem] text-muted-foreground">{label}</span>
      {children}
      {error && <span role="alert" className="mt-2 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

export function BookingForm({ defaultVehicle }: { defaultVehicle?: "Tuk Tuk" | "Motorbike" }) {
  const [errors, setErrors] = useState<Partial<Record<keyof Booking, string>>>({});
  const [sent, setSent] = useState<string | null>(null);
  const today = new Date().toISOString().slice(0, 10);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const res = bookingSchema.safeParse(data);
    if (!res.success) {
      const errs: Record<string, string> = {};
      for (const i of res.error.issues) errs[i.path[0] as string] ??= i.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    const url = whatsappUrl(bookingMessage(res.data));
    setSent(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="booking" className="scroll-mt-20 bg-background py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="relative hidden lg:block">
          <img src={IMG.motoCoast} alt="Rider on a scooter along a Sri Lankan coastal road" loading="lazy" className="h-full w-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-overlay/85 to-transparent p-10">
            <p className="font-display text-3xl leading-snug text-on-dark">Tell us where you're headed. We'll get you rolling.</p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow text-primary">Booking & Contact</p>
          <h2 className="mt-4 text-4xl leading-[1.05] sm:text-5xl">Reserve Your Ride</h2>
          <p className="mt-5 max-w-lg text-muted-foreground">Share your travel details and your inquiry opens in WhatsApp, ready to send. We'll reply to confirm availability.</p>

          {sent ? (
            <div className="mt-12 border border-border bg-sand p-8 sm:p-10" role="status">
              <CheckCircle2 className="h-10 w-10 text-primary" strokeWidth={1.25} />
              <h3 className="mt-6 text-3xl">Your inquiry is ready.</h3>
              <p className="mt-3 text-muted-foreground">We've opened WhatsApp with your booking details. Just press send and our team will get back to you to confirm.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={sent} target="_blank" rel="noopener noreferrer" className={btn()}><MessageCircle className="h-4 w-4" /> Open WhatsApp Again</a>
                <button onClick={() => setSent(null)} className={btn({ variant: "outline" })}>New Inquiry</button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2">
              <Field label="Full Name" error={errors.name}><input name="name" autoComplete="name" className={field} placeholder="Your name" maxLength={100} /></Field>
              <Field label="Email Address" error={errors.email}><input name="email" type="email" autoComplete="email" className={field} placeholder="you@email.com" maxLength={255} /></Field>
              <Field label="WhatsApp Number" error={errors.whatsapp}><input name="whatsapp" type="tel" autoComplete="tel" className={field} placeholder="+44 7700 900000" maxLength={20} /></Field>
              <Field label="Vehicle Type" error={errors.vehicle}>
                <select name="vehicle" defaultValue={defaultVehicle ?? ""} className={field}>
                  <option value="" disabled>Select a vehicle</option>
                  <option>Tuk Tuk</option>
                  <option>Motorbike</option>
                </select>
              </Field>
              <Field label="Preferred Pickup Date" error={errors.pickupDate}><input name="pickupDate" type="date" min={today} className={field} /></Field>
              <Field label="Preferred Return Date" error={errors.returnDate}><input name="returnDate" type="date" min={today} className={field} /></Field>
              <Field label="Pickup Location" error={errors.location} className="sm:col-span-2"><input name="location" className={field} placeholder="e.g. Colombo airport, Ella, Mirissa" maxLength={150} /></Field>
              <Field label="Additional Message" error={errors.message} className="sm:col-span-2"><textarea name="message" rows={3} className={cn(field, "h-auto py-3")} placeholder="Travel plans, number of riders, questions…" maxLength={1000} /></Field>
              <div className="sm:col-span-2">
                <button type="submit" className={btn({ size: "lg", className: "w-full sm:w-auto" })}><Send className="h-4 w-4" /> Send Booking Inquiry</button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
