import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Btn, SectionHead, INSTAGRAM_URL } from "./ui";
import { Browser, BusinessSite, PhoneSite, CafeSite, PortfolioSite, MiniCard } from "./mockups";

const wrap = "mx-auto max-w-7xl px-5 sm:px-8";

export function Hero() {
  return (
    <section className={`${wrap} grid items-center gap-14 pb-20 pt-12 lg:grid-cols-2 lg:pb-28 lg:pt-20`}>
      <div className="fade-up">
        <p className="eyebrow">Your business deserves a better website</p>
        <h1 className="mt-5 text-[2.6rem] font-extrabold leading-[1.02] text-foreground sm:text-6xl lg:text-[4.4rem]">
          Your Business.<br />Your <span className="text-primary">Website.</span><br />Your <span className="text-sage">Digital Presence.</span>
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
          We design modern, responsive and professional websites that help businesses build credibility, connect with customers and grow online.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Btn to="/contact">Get Your Website</Btn>
          <Btn to="/services" variant="outline">Explore Our Services</Btn>
        </div>
        <p className="mt-10 flex items-center gap-3 text-sm text-muted-foreground"><span className="h-px w-10 bg-sage" />Designed with purpose. Built for your business.</p>
      </div>
      <div className="fade-up relative pb-10 pr-6 [animation-delay:150ms] sm:pr-10">
        <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-ivory-deep" />
        <Browser url="ateliercompany.in"><BusinessSite /></Browser>
        <div className="absolute -bottom-2 right-0"><PhoneSite /></div>
      </div>
    </section>
  );
}

export function Intro() {
  const items = [
    ["Professional First Impressions", "Look credible from the very first click."],
    ["Seamless Mobile Experience", "Easy to browse on any phone, anywhere."],
    ["Built Around Your Business", "Shaped by your goals, not a template."],
  ];
  return (
    <section className="border-y border-border bg-card">
      <div className={`${wrap} py-20 lg:py-28`}>
        <SectionHead eyebrow="Why it matters" title="Your Business Is Ready. Is Your Website?" intro="Your website is often the first impression customers have of your business. Make it professional, memorable and easy to explore." />
        <div className="mt-14 grid divide-y divide-border border-t border-border md:grid-cols-3 md:divide-x md:divide-y-0">
          {items.map(([t, d], i) => (
            <div key={t} className="py-8 md:px-8 md:first:pl-0">
              <span className="font-display text-sm font-bold text-sage">0{i + 1}</span>
              <h3 className="mt-3 text-xl font-bold text-primary">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  ["Business Websites", "Professional websites that establish your brand online."],
  ["Restaurant & Café Websites", "Beautiful digital experiences featuring menus, photos, location and contact information."],
  ["Landing Pages", "Focused landing pages designed to communicate your offer and generate enquiries."],
  ["Portfolio Websites", "Showcase your work, expertise and achievements professionally."],
  ["Small Business Websites", "Affordable digital solutions for growing businesses."],
  ["Responsive Website Development", "Websites that look and work beautifully across desktop, tablet and mobile."],
];

export function Services() {
  return (
    <section id="services" className={`${wrap} py-20 lg:py-28`}>
      <SectionHead eyebrow="Services" title="Everything You Need to Get Online." />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(([t, d], i) => (
          <article key={t} className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sage hover:shadow-soft">
            <MiniCard variant={i} />
            <span className="mt-6 font-display text-sm font-bold text-sage">0{i + 1}</span>
            <h3 className="mt-1 text-xl font-bold text-primary">{t}</h3>
            <p className="mt-2 flex-1 text-muted-foreground">{d}</p>
            <Link to="/contact" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none">
              Explore Service <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export function WhyUs() {
  const items = [
    ["Affordable Solutions", "Professional websites with accessible pricing."],
    ["Mobile-First Design", "Experiences designed for modern devices."],
    ["Customised Approach", "Every website tailored to the business."],
    ["Clear Communication", "A straightforward process from start to finish."],
  ];
  return (
    <section className="bg-ivory-deep/60">
      <div className={`${wrap} grid gap-12 py-20 lg:grid-cols-2 lg:gap-20 lg:py-28`}>
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHead eyebrow="Why GetUrWeb" title="Good Design. Smart Development. No Unnecessary Complexity." />
        </div>
        <dl className="divide-y divide-border border-y border-border">
          {items.map(([t, d]) => (
            <div key={t} className="group grid gap-2 py-7 sm:grid-cols-[1fr_1.2fr] sm:gap-8">
              <dt className="font-display text-xl font-bold text-primary transition-colors group-hover:text-sage">{t}</dt>
              <dd className="text-muted-foreground">{d}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Process() {
  const steps = [
    ["Understand", "We understand your business, goals and requirements."],
    ["Design", "We create a website layout that reflects your brand."],
    ["Develop", "We build a responsive and functional website."],
    ["Launch", "We prepare your website for its online launch."],
  ];
  return (
    <section className={`${wrap} py-20 lg:py-28`}>
      <SectionHead eyebrow="Our process" title="From Idea to Online. Made Simple." />
      <ol className="relative mt-14 grid gap-10 border-l border-sage/50 pl-8 lg:grid-cols-4 lg:gap-8 lg:border-l-0 lg:border-t lg:pl-0 lg:pt-10">
        {steps.map(([t, d], i) => (
          <li key={t} className="relative">
            <span className="absolute -left-[37px] top-1 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background lg:-top-[45px] lg:left-0" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">Step 0{i + 1}</p>
            <h3 className="mt-2 text-2xl font-bold text-primary">{t}</h3>
            <p className="mt-2 text-muted-foreground">{d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Pricing() {
  return (
    <section className={`${wrap} py-20 lg:py-28`}>
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-soft sm:p-14 lg:p-20">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/60" aria-hidden />
        <div className="relative grid items-end gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="eyebrow">Pricing</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-primary sm:text-4xl">Professional Websites. Affordable Starting Prices.</h2>
            <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-foreground sm:text-7xl">
              <span className="block text-base font-semibold tracking-normal text-muted-foreground sm:text-lg">Starting under</span>
              ₹2,000<span className="text-sage">*</span>
            </p>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">Get a professional online presence without an unnecessarily large investment.</p>
            <div className="mt-6"><Btn to="/contact">Get a Personalised Quote</Btn></div>
          </div>
        </div>
        <p className="relative mt-10 border-t border-border pt-5 text-xs text-muted-foreground">*Final pricing depends on website scope, number of pages, features and project requirements.</p>
      </div>
    </section>
  );
}

export function Showcase() {
  const items = [
    { label: "Café website", url: "morningbloom.cafe", el: <CafeSite /> },
    { label: "Small business website", url: "ateliercompany.in", el: <BusinessSite /> },
    { label: "Portfolio website", url: "rmehra.photo", el: <PortfolioSite /> },
  ];
  return (
    <section className="border-y border-border bg-card">
      <div className={`${wrap} py-20 lg:py-28`}>
        <SectionHead eyebrow="Concept previews" title="Imagine Your Business Looking This Good Online." intro="Design concepts to show what's possible — not client projects." />
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {items.map((it) => (
            <figure key={it.label} className="group">
              <div className="transition-transform duration-500 group-hover:-translate-y-1.5"><Browser url={it.url}>{it.el}</Browser></div>
              <figcaption className="mt-4 flex items-center justify-between text-sm">
                <span className="font-semibold text-primary">{it.label}</span>
                <span className="rounded-full border border-sage/50 px-2.5 py-0.5 text-xs text-sage">Concept preview</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className={`${wrap} grid gap-10 py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:py-28`}>
      <SectionHead eyebrow="About GetUrWeb" title="We Believe Every Business Deserves a Strong Online Presence." />
      <div className="space-y-5 text-lg leading-relaxed text-muted-foreground lg:pt-10">
        <p>GetUrWeb was created with one simple idea: making professional website design more accessible to businesses of all sizes.</p>
        <p>We combine thoughtful design, modern development and practical solutions to help businesses establish their digital presence.</p>
      </div>
    </section>
  );
}

const faqs = [
  ["How much does a website cost?", "Our websites start under ₹2,000. The final price depends on the number of pages, features and what your project needs — we'll give you a clear quote before any work begins."],
  ["Can I get a website within my budget?", "Very likely. Share your budget and goals with us and we'll suggest what's realistic, keeping the focus on what matters most for your business."],
  ["Will my website work on mobile phones?", "Yes. Every website we build is designed mobile-first and tested to work well on phones, tablets and desktops."],
  ["Can you design a website for my café or small business?", "Absolutely. Restaurants, cafés and small businesses are a core focus — menus, photos, location and contact details included as needed."],
  ["How long does website development take?", "It depends on the size and complexity of the website and how quickly content is ready. We'll discuss a realistic timeline once we understand your requirements."],
  ["Can I request changes to my website?", "Yes. We share the design with you during the process so you can give feedback. The scope of changes is agreed as part of your quote."],
  ["How do I get started?", "Send us a message on Instagram at @geturweb_ with a little about your business. We'll take it from there."],
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className={`${wrap} grid gap-10 py-20 lg:grid-cols-[1fr_1.6fr] lg:gap-20 lg:py-28`}>
      <SectionHead eyebrow="FAQ" title="Questions, answered." />
      <div className="divide-y divide-border border-y border-border">
        {faqs.map(([q, a], i) => {
          const isOpen = open === i;
          return (
            <div key={q}>
              <h3>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left font-display text-lg font-bold text-primary focus-visible:outline-none focus-visible:text-sage"
                >
                  {q}
                  <span aria-hidden className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-lg transition-transform duration-300 ${isOpen ? "rotate-45 bg-primary text-primary-foreground" : ""}`}>+</span>
                </button>
              </h3>
              <div id={`faq-${i}`} className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
                <p className="overflow-hidden pr-12 leading-relaxed text-muted-foreground">{a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="px-5 pb-20 sm:px-8 lg:pb-28">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-primary px-8 py-16 text-center text-primary-foreground sm:px-14 lg:py-24">
        <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">Let's Build Something Great for Your Business.</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-primary-foreground/75">Your next customer could be looking for you online. Make sure they find a website worth remembering.</p>
        <div className="mt-9"><Btn to="/contact" variant="ivory">Start Your Website Project</Btn></div>
        <p className="mt-6 text-sm text-primary-foreground/70">Have a question? <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="font-semibold text-primary-foreground underline underline-offset-4 hover:text-sage">Let's talk.</a></p>
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className={`${wrap} pb-6 pt-16 lg:pt-24`}>
      <p className="eyebrow fade-up">{eyebrow}</p>
      <h1 className="fade-up mt-4 max-w-4xl text-4xl font-extrabold leading-[1.05] text-primary sm:text-6xl">{title}</h1>
      <p className="fade-up mt-5 max-w-2xl text-lg text-muted-foreground">{intro}</p>
    </section>
  );
}
