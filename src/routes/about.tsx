import { createFileRoute } from "@tanstack/react-router";
import { Lightbulb, ShieldCheck, HeartHandshake, Zap } from "lucide-react";
import { Layout, PageHero } from "@/components/site/Layout";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Kiji Technology OPC Pvt. Ltd." },
      {
        name: "description",
        content:
          "Learn about Kiji Technology, our mission, values and the team building smart software for businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "About Kiji Technology" },
      { property: "og:description", content: "Our mission, values and team." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Lightbulb, t: "Innovation", d: "Latest technology, fresh ideas." },
  { icon: ShieldCheck, t: "Trust", d: "Transparent, secure, reliable." },
  { icon: HeartHandshake, t: "Partnership", d: "We grow when you grow." },
  { icon: Zap, t: "Speed", d: "Agile delivery, on time." },
];

function About() {
  return (
    <Layout>
      <PageHero
        eyebrow="About us"
        title="About Kiji Technology"
        text="Kiji Technology OPC Private Limited helps businesses turn ideas into digital products that perform."
      />
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold">Business first. Technology with purpose.</h2>
          <p className="mt-5 text-muted-foreground">
            Kiji Technology OPC Private Limited brings software development, digital design, cloud
            services and AI automation together around one goal: helping institutions and businesses
            build technology that fits their needs. From university, college and school platforms to
            property and HR management systems, we focus on understanding your operations before
            recommending a solution.
          </p>
          <p className="mt-4 text-muted-foreground">
            Our approach combines discovery, clear scope, collaborative design and milestone-based
            development. From a customer-facing app to an internal business system, we consider the
            entire journey: usability, integration, deployment and long-term maintenance.
          </p>
        </div>
        <img
          src={hero}
          alt="Our team"
          loading="lazy"
          width={1600}
          height={1104}
          className="rounded-3xl shadow-soft"
        />
      </section>
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-center text-4xl font-bold">Our values</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-3xl bg-card p-8 text-center shadow-soft">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-accent text-accent-foreground">
                  <Icon />
                </span>
                <h3 className="mt-5 text-xl font-bold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 lg:grid-cols-2">
        <img
          src={about}
          alt="Coding"
          loading="lazy"
          width={1200}
          height={1200}
          className="aspect-[4/3] rounded-3xl object-cover shadow-soft"
        />
        <div className="grid gap-6">
          <div className="rounded-3xl bg-forest p-8 text-forest-foreground">
            <h3 className="text-2xl font-bold text-sun">Mission</h3>
            <p className="mt-2 opacity-85">
              Deliver smart, affordable and scalable technology that solves real business problems.
            </p>
          </div>
          <div className="rounded-3xl bg-accent p-8 text-accent-foreground">
            <h3 className="text-2xl font-bold">Vision</h3>
            <p className="mt-2">
              To be India's most trusted digital transformation partner for growing businesses.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
