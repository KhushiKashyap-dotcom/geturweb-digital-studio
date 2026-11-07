import { createFileRoute } from "@tanstack/react-router";
import { Hero, Intro, Services, WhyUs, Process, Pricing, Showcase, About, Faq, FinalCta } from "@/components/site/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GetUrWeb — Affordable, Professional Websites for Businesses" },
      { name: "description", content: "Modern, responsive business websites from under ₹5,999. Websites for cafés, small businesses, portfolios and landing pages." },
      { property: "og:title", content: "GetUrWeb — Your Business. Your Website." },
      { property: "og:description", content: "Modern, responsive business websites at affordable starting prices." },
    ],
  }),
  component: () => (
    <>
      <Hero /><Intro /><Services /><WhyUs /><Process /><Pricing /><Showcase /><About /><Faq /><FinalCta />
    </>
  ),
});
