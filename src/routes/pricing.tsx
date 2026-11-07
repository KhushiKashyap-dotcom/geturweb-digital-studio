import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Pricing, Faq, FinalCta } from "@/components/site/sections";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Websites Starting Under ₹2,000 | GetUrWeb" },
      { name: "description", content: "Professional websites at affordable starting prices. Get a personalised quote for your business." },
      { property: "og:title", content: "Pricing — GetUrWeb" },
      { property: "og:description", content: "Professional websites starting under ₹2,000." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Pricing" title="Honest pricing, shaped to your project." intro="Every business is different, so every quote is personalised." />
      <Pricing /><Faq /><FinalCta />
    </>
  ),
});
