import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Services, Showcase, FinalCta } from "@/components/site/sections";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Website Design Services — GetUrWeb" },
      { name: "description", content: "Business, café, portfolio, small business and landing page websites — responsive and professionally designed." },
      { property: "og:title", content: "Website Design Services — GetUrWeb" },
      { property: "og:description", content: "Everything your business needs to get online." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Services" title="Websites designed around your business." intro="From a single landing page to a complete business website — built responsive, clear and easy to use." />
      <Services /><Showcase /><FinalCta />
    </>
  ),
});
