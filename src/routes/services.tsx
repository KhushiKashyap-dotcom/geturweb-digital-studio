import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { FinalCta } from "@/components/site/sections";
import { Btn } from "@/components/site/ui";
import { Browser, BusinessSite, CafeSite, PortfolioSite, PhoneSite, MiniCard } from "@/components/site/mockups";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Website Design Services — GetUrWeb" },
      { name: "description", content: "Business, café, portfolio, small business and landing page websites — responsive and professionally designed." },
      { property: "og:title", content: "Website Design Services — GetUrWeb" },
      { property: "og:description", content: "Everything your business needs to get online." },
    ],
  }),
  component: ServicesPage,
});

type Service = { no: string; title: string; desc: string; points: string[]; visual: ReactNode; url: string };

const services: Service[] = [
  { no: "01", title: "Business Websites", desc: "Professional websites that establish your brand online and give customers a clear reason to reach out.", points: ["Clear pages for your services", "Contact and enquiry sections", "Designed around your brand"], visual: <BusinessSite />, url: "yourbusiness.in" },
  { no: "02", title: "Restaurant & Café Websites", desc: "Beautiful digital experiences featuring your menu, photos, location and contact information.", points: ["Menu presentation", "Photo-led layouts", "Location and opening details"], visual: <CafeSite />, url: "yourcafe.in" },
  { no: "03", title: "Portfolio Websites", desc: "Showcase your work, expertise and achievements in a clean, professional way.", points: ["Project galleries", "About and experience sections", "Easy ways to get in touch"], visual: <PortfolioSite />, url: "yourname.in" },
];

const more = [
  { title: "Landing Pages", desc: "Focused pages designed to communicate one offer and generate enquiries.", v: 2 },
  { title: "Small Business Websites", desc: "Affordable digital solutions for growing local businesses.", v: 4 },
  { title: "Responsive Development", desc: "Websites that look and work beautifully on desktop, tablet and mobile.", v: 5 },
];

const wrap = "mx-auto max-w-7xl px-5 sm:px-8";

function ServicesPage() {
  return (
    <>
      <section className={`${wrap} grid items-center gap-12 pb-16 pt-14 lg:grid-cols-[1.1fr_1fr] lg:pt-20`}>
        <div className="fade-up">
          <p className="eyebrow">Services</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] text-primary sm:text-6xl">Websites designed around your business.</h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">From a single landing page to a complete business website — built responsive, clear and easy to use.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Btn to="/contact">Get a Personalised Quote</Btn>
            <Btn to="/pricing" variant="outline">View Pricing</Btn>
          </div>
        </div>
        <nav aria-label="Services on this page" className="fade-up rounded-2xl border border-border bg-card p-2 [animation-delay:120ms]">
          {[...services.map((s) => s.title), ...more.map((m) => m.title)].map((t, i) => (
            <a key={t} href={`#s-${i}`} className="group flex items-center justify-between rounded-xl px-5 py-3.5 transition-colors hover:bg-ivory-deep">
              <span className="flex items-baseline gap-4"><span className="font-display text-xs font-bold text-sage">0{i + 1}</span><span className="font-display font-bold text-primary">{t}</span></span>
              <span aria-hidden className="text-sage transition-transform group-hover:translate-x-1">→</span>
            </a>
          ))}
        </nav>
      </section>

      <section className="border-t border-border">
        {services.map((s, i) => (
          <article key={s.title} id={`s-${i}`} className={`scroll-mt-24 border-b border-border ${i % 2 ? "bg-card" : ""}`}>
            <div className={`${wrap} grid items-center gap-12 py-20 lg:grid-cols-2 lg:gap-20 lg:py-24`}>
              <div className={i % 2 ? "lg:order-2" : ""}>
                <span className="font-display text-sm font-bold text-sage">{s.no}</span>
                <h2 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">{s.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{s.desc}</p>
                <ul className="mt-7 divide-y divide-border border-y border-border">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 py-3.5 text-foreground"><span className="h-1.5 w-1.5 rounded-full bg-sage" />{p}</li>
                  ))}
                </ul>
                <Link to="/contact" className="group mt-7 inline-flex items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline">
                  Start this project <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
              <div className="relative">
                <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-ivory-deep/70" />
                <Browser url={s.url}>{s.visual}</Browser>
                <span className="absolute -bottom-3 left-4 rounded-full border border-sage/50 bg-background px-3 py-1 text-xs text-sage">Concept preview</span>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className={`${wrap} py-20 lg:py-28`}>
        <p className="eyebrow">Also available</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-primary sm:text-4xl">Focused builds for every stage of your business.</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {more.map((m, i) => (
            <article key={m.title} id={`s-${i + services.length}`} className="group scroll-mt-24 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sage hover:shadow-soft">
              <MiniCard variant={m.v} />
              <span className="mt-6 block font-display text-sm font-bold text-sage">0{i + services.length + 1}</span>
              <h3 className="mt-1 text-xl font-bold text-primary">{m.title}</h3>
              <p className="mt-2 text-muted-foreground">{m.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ivory-deep/60">
        <div className={`${wrap} grid items-center gap-12 py-20 lg:grid-cols-[1fr_auto] lg:py-24`}>
          <div>
            <p className="eyebrow">In every project</p>
            <h2 className="mt-4 text-3xl font-bold text-primary sm:text-4xl">Built mobile-first, for every screen.</h2>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">Most customers will find you on their phone. Every website we design is planned for mobile first, then refined for tablet and desktop.</p>
          </div>
          <div className="mx-auto"><PhoneSite /></div>
        </div>
      </section>

      <div className="pt-20 lg:pt-28"><FinalCta /></div>
    </>
  );
}
