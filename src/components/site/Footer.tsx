import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { NAV, SITE, whatsappUrl } from "@/lib/site";
import { Logo } from "./Logo";
import { btn } from "./ui";

export function Footer() {
  return (
    <footer className="bg-emerald-deep text-on-dark">
      <div className="mx-auto max-w-7xl px-5 pt-20 pb-10 sm:px-8">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo light />
            <p className="mt-6 max-w-xs font-display text-2xl leading-snug text-sand">{SITE.tagline}</p>
            <a href={whatsappUrl("Hello Windy Tour! I'd like to ask about a rental.")} target="_blank" rel="noopener noreferrer" className={btn({ variant: "sand", size: "sm", className: "mt-8" })}>
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
          <div>
            <p className="eyebrow text-sage">Explore</p>
            <ul className="mt-6 space-y-3 text-sm text-on-dark/80">
              {NAV.map((n) => (
                <li key={n.to}><Link to={n.to} className="hover:text-on-dark">{n.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-sage">Vehicles</p>
            <ul className="mt-6 space-y-3 text-sm text-on-dark/80">
              <li><Link to="/tuk-tuks" className="hover:text-on-dark">Tuk Tuk Rentals</Link></li>
              <li><Link to="/motorbikes" className="hover:text-on-dark">Motorbike Rentals</Link></li>
              <li><Link to="/contact" className="hover:text-on-dark">Booking Inquiry</Link></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow text-sage">Contact</p>
            <ul className="mt-6 space-y-3 text-sm text-on-dark/80">
              <li>WhatsApp: {SITE.phoneDisplay}</li>
              <li><a href={`mailto:${SITE.email}`} className="hover:text-on-dark">{SITE.email}</a></li>
              <li>{SITE.location}</li>
            </ul>
            <div className="mt-6 flex gap-5 text-sm">
              {SITE.socials.map((s) => (
                <a key={s.label} href={s.href} className="text-sand underline-offset-4 hover:underline">{s.label}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-20 flex flex-col justify-between gap-3 border-t border-on-dark/10 pt-8 text-xs text-on-dark/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Windy Tour. All rights reserved.</p>
          <p>Tuk Tuk & Motorbike Rentals · Sri Lanka</p>
        </div>
      </div>
    </footer>
  );
}
