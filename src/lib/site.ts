/**
 * Business contact settings. Replace these placeholders with the real
 * business details before going live.
 * WHATSAPP_NUMBER: international format, digits only, no "+" (e.g. 9477xxxxxxx).
 */
export const SITE = {
  name: "Windy Tour",
  tagline: "Feel the Freedom. Explore Sri Lanka.",
  whatsappNumber: (import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined) ?? "",
  phoneDisplay: "+94 XX XXX XXXX",
  email: "hello@windytour.com",
  location: "Sri Lanka",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "TikTok", href: "#" },
  ],
};

export function whatsappUrl(message?: string) {
  const base = SITE.whatsappNumber ? `https://wa.me/${SITE.whatsappNumber}` : "https://wa.me/";
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/tuk-tuks", label: "Tuk Tuks" },
  { to: "/motorbikes", label: "Motorbikes" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
] as const;
