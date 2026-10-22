import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Layout, PageHero } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { AutomationSection, EngagementSection, ProcessSection } from "@/components/site/Expertise";
import { services } from "@/components/site/data";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Kiji Technology OPC Private Limited" },
      {
        name: "description",
        content:
          "Web development, mobile apps, ERP, e-commerce, cloud, WhatsApp API and AI automation services by Kiji Technology.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Kiji Technology Services" },
      { property: "og:description", content: "Web, mobile, cloud, ERP and AI solutions." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <Layout>
      <PageHero
        eyebrow="Services"
        title="Software, cloud & AI services"
        text="From customer-facing products to the systems behind your business, we help shape the right solution—not just the next piece of software."
      />
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-24 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ slug, icon: Icon, title, text, deliverables }) => (
          <Link
            key={slug}
            to="/services/$slug"
            params={{ slug }}
            className="group flex flex-col rounded-lg border bg-card p-8 shadow-soft transition-all hover:-translate-y-1.5 hover:border-primary"
          >
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-primary-foreground group-hover:bg-accent group-hover:text-accent-foreground">
              <Icon />
            </span>
            <h3 className="mt-6 text-xl font-bold group-hover:text-primary">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            <ul className="mt-6 flex-1 space-y-2 border-t pt-5">
              {deliverables.map((item) => (
                <li key={item} className="flex gap-2 text-sm">
                  <span className="text-primary">↗</span>
                  {item}
                </li>
              ))}
            </ul>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-primary">
              View details{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </section>
      <AutomationSection />
      <ProcessSection />
      <EngagementSection />
      <section className="bg-forest py-16 text-forest-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold">Start with the right conversation.</h2>
            <p className="mt-3 max-w-2xl text-forest-foreground/75">
              Share your priorities, existing tools and project goals. We’ll help define a practical
              starting point.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="h-auto shrink-0 rounded-full bg-accent px-6 py-3.5 text-accent-foreground hover:bg-accent/90"
          >
            <Link to="/contact">
              Discuss your project <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
