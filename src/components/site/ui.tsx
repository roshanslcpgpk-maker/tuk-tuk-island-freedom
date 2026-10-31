import { cva, type VariantProps } from "class-variance-authority";
import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export const btn = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-60",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-emerald-deep",
        sand: "bg-sand text-emerald-deep hover:bg-on-dark",
        ghostLight: "border border-on-dark/60 text-on-dark hover:bg-on-dark hover:text-emerald-deep",
        outline: "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
        link: "px-0 text-primary underline-offset-8 hover:underline",
      },
      size: { md: "h-12 px-7", lg: "h-14 px-9", sm: "h-10 px-5" },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);
export type BtnProps = VariantProps<typeof btn>;

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e) return;
        if (e.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function SectionHead({ eyebrow, title, intro, light, center }: { eyebrow: string; title: string; intro?: string; light?: boolean; center?: boolean }) {
  return (
    <Reveal className={cn("max-w-2xl", center && "mx-auto text-center")}>
      <p className={cn("eyebrow", light ? "text-sage" : "text-primary")}>{eyebrow}</p>
      <h2 className={cn("mt-4 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl", light ? "text-on-dark" : "text-foreground")}>{title}</h2>
      {intro && <p className={cn("mt-6 text-base leading-relaxed sm:text-lg", light ? "text-on-dark/75" : "text-muted-foreground")}>{intro}</p>}
    </Reveal>
  );
}
