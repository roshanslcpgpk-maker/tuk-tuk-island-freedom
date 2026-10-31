import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ light, className }: { light?: boolean; className?: string }) {
  return (
    <Link to="/" aria-label="Windy Tour home" className={cn("group flex items-center gap-3", className)}>
      <svg viewBox="0 0 40 40" className={cn("h-9 w-9 shrink-0", light ? "text-sand" : "text-primary")} aria-hidden>
        <circle cx="20" cy="20" r="19" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <path d="M8 17c5-4 10 4 16 0s7-3 8-2M8 23c5-4 10 4 16 0s7-3 8-2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      <span className="leading-none">
        <span className={cn("block font-display text-xl tracking-[0.18em]", light ? "text-on-dark" : "text-foreground")}>WINDY TOUR</span>
        <span className={cn("mt-1 block text-[0.6rem] tracking-[0.32em] uppercase", light ? "text-sage" : "text-muted-foreground")}>Sri Lanka</span>
      </span>
    </Link>
  );
}
