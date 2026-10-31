import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { NAV } from "@/lib/site";
import { Logo } from "./Logo";
import { btn } from "./ui";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const solid = scrolled;

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", solid ? "bg-background/95 shadow-soft backdrop-blur" : "bg-transparent")}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo light={!solid} />
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Main">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={cn("relative text-sm font-medium tracking-wide transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all hover:after:w-full", solid ? "text-foreground hover:text-primary" : "text-on-dark/90 hover:text-on-dark")}
              activeProps={{ className: "after:w-full" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/contact" className={cn(btn({ size: "sm", variant: solid ? "primary" : "sand" }), "hidden sm:inline-flex")}>
            Book Your Ride
          </Link>
          <button onClick={() => setOpen(true)} aria-label="Open menu" className={cn("p-2 lg:hidden", solid ? "text-foreground" : "text-on-dark")}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div className={cn("fixed inset-0 z-50 bg-emerald-deep transition-all duration-500 lg:hidden", open ? "visible opacity-100" : "invisible opacity-0")} aria-hidden={!open}>
        <div className="flex h-20 items-center justify-between px-5 sm:px-8">
          <Logo light />
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 text-on-dark">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col px-8 pt-10" aria-label="Mobile">
          {NAV.map((n, i) => (
            <Link
              key={n.to}
              to={n.to}
              className={cn("border-b border-on-dark/10 py-5 font-display text-4xl text-on-dark transition-all duration-500", open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0")}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
            >
              {n.label}
            </Link>
          ))}
          <Link to="/contact" className={cn(btn({ variant: "sand", size: "lg" }), "mt-10")}>Book Your Ride</Link>
        </nav>
      </div>
    </header>
  );
}
