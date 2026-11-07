import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Btn, Logo, INSTAGRAM_URL } from "./ui";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/process", label: "Our Process" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 10);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled || open ? "border-b border-border bg-background/90 backdrop-blur-md" : "border-b border-transparent"}`}>
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" aria-label="GetUrWeb home" onClick={() => setOpen(false)}><Logo /></Link>
        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary data-[status=active]:text-primary">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block"><Btn to="/contact">Let's Build Your Website</Btn></div>
        <button className="grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          <span className="relative block h-3 w-4">
            <span className={`absolute left-0 h-0.5 w-4 bg-primary transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 h-0.5 w-4 bg-primary transition-all ${open ? "top-1.5 -rotate-45" : "top-2.5"}`} />
          </span>
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="fade-up border-t border-border px-5 pb-8 pt-4 lg:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} activeOptions={{ exact: true }} className="block border-b border-border py-4 font-display text-2xl font-bold text-primary data-[status=active]:text-sage">
              {n.label}
            </Link>
          ))}
          <div className="mt-6" onClick={() => setOpen(false)}><Btn to="/contact">Let's Build Your Website</Btn></div>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-forest-deep text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo light />
          <p className="mt-5 max-w-sm text-ivory/70">Affordable, professional website design and development for businesses ready to grow online.</p>
          <p className="mt-8 font-display text-2xl font-bold">Your Business. <span className="text-sage">Our Digital Craft.</span></p>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">Explore</h2>
          <ul className="mt-4 space-y-2.5">
            {nav.map((n) => <li key={n.to}><Link to={n.to} className="text-ivory/75 hover:text-ivory">{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">Services</h2>
          <ul className="mt-4 space-y-2.5 text-ivory/75">
            {["Business Websites", "Restaurant & Café Websites", "Landing Pages", "Portfolio Websites"].map((s) => <li key={s}><Link to="/services" className="hover:text-ivory">{s}</Link></li>)}
          </ul>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full border border-ivory/30 px-4 py-2 text-sm font-semibold hover:bg-ivory hover:text-primary">Instagram · @geturweb_</a>
        </div>
      </div>
      <div className="border-t border-ivory/10 py-6 text-center text-xs text-ivory/50">© {new Date().getFullYear()} GetUrWeb. All rights reserved.</div>
    </footer>
  );
}
