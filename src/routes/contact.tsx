import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Faq } from "@/components/site/sections";
import { INSTAGRAM_URL } from "@/components/site/ui";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Start Your Website Project | GetUrWeb" },
      { name: "description", content: "Tell us about your business on Instagram @geturweb_ and get a personalised website quote." },
      { property: "og:title", content: "Contact GetUrWeb" },
      { property: "og:description", content: "Let's build your website. Message us on Instagram @geturweb_." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's build your website." intro="Tell us a little about your business and what you need. We'll reply with next steps and a personalised quote." />
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid gap-8 rounded-[2rem] bg-primary p-8 text-primary-foreground sm:p-14 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">Message us on Instagram</p>
            <p className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">@geturweb_</p>
            <ul className="mt-6 space-y-2 text-primary-foreground/75">
              <li>— Your business name and what you do</li>
              <li>— The type of website you need</li>
              <li>— Any reference sites or ideas you like</li>
            </ul>
          </div>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-ivory px-8 py-4 font-semibold text-primary transition-colors hover:bg-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory focus-visible:ring-offset-2 focus-visible:ring-offset-primary">
            Send a message on Instagram →
          </a>
        </div>
      </section>
      <Faq />
    </>
  );
}
