import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const INSTAGRAM_URL = "https://instagram.com/geturweb_";

type BtnProps = { to: "/" | "/services" | "/process" | "/pricing" | "/about" | "/contact"; children: ReactNode; variant?: "primary" | "outline" | "ivory" };

const styles = {
  primary: "bg-primary text-primary-foreground hover:bg-forest-deep shadow-soft",
  outline: "border border-primary/25 text-primary hover:border-primary hover:bg-primary/5",
  ivory: "bg-ivory text-primary hover:bg-paper",
};

export function Btn({ to, children, variant = "primary" }: BtnProps) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${styles[variant]}`}
    >
      {children}
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </Link>
  );
}

export function SectionHead({ eyebrow, title, intro, center }: { eyebrow: string; title: ReactNode; intro?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-bold leading-[1.1] text-primary sm:text-4xl lg:text-5xl">{title}</h2>
      {intro && <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{intro}</p>}
    </div>
  );
}

export function Logo({ light }: { light?: boolean }) {
  return (
    <span className={`flex items-center gap-2 font-display text-xl font-extrabold tracking-tight ${light ? "text-ivory" : "text-primary"}`}>
      <span className={`grid h-8 w-8 place-items-center rounded-lg text-sm ${light ? "bg-ivory text-primary" : "bg-primary text-primary-foreground"}`}>G</span>
      <span>GetUr<span className="text-sage">Web</span></span>
    </span>
  );
}
