import { createFileRoute } from "@tanstack/react-router";
import { PageHero, About, Intro, FinalCta } from "@/components/site/sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — GetUrWeb" },
      { name: "description", content: "GetUrWeb makes professional website design accessible to businesses of all sizes." },
      { property: "og:title", content: "About GetUrWeb" },
      { property: "og:description", content: "Every business deserves a strong online presence." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="About us" title="Professional websites, made accessible." intro="A small studio with a simple idea." />
      <About /><Intro /><FinalCta />
    </>
  ),
});
