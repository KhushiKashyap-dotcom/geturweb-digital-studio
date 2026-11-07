import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Process, WhyUs, FinalCta } from "@/components/site/sections";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — GetUrWeb" },
      { name: "description", content: "Understand, design, develop, launch — a simple, clear process for getting your business website online." },
      { property: "og:title", content: "Our Process — GetUrWeb" },
      { property: "og:description", content: "From idea to online, made simple." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Our process" title="A clear path from first message to launch." intro="Four simple steps, with straightforward communication throughout." />
      <Process /><WhyUs /><FinalCta />
    </>
  ),
});
