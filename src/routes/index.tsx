import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Target,
  Rocket,
  Users,
  Quote,
  ChevronDown,
  Building2,
  GraduationCap,
  HeartPulse,
  Truck,
  ShoppingBag,
  BriefcaseBusiness,
} from "lucide-react";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { services, faqs, products } from "@/components/site/data";
import { allTech } from "@/components/site/tech-stack";
import hero from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";
import { AutomationSection, EngagementSection, ProcessSection } from "@/components/site/Expertise";
import { LearningSpotlight, ProductsPreview } from "@/components/site/Products";
import about from "@/assets/about.jpg";
import servicesImg from "@/assets/services.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kiji Technology OPC Private Limited — Web, App, Management Systems & AI" },
      {
        name: "description",
        content:
          "Kiji Technology builds websites, apps, ERP, school/college/university management systems, flat management systems and AI automation for institutions and businesses across India.",
      },
      {
        property: "og:title",
        content: "Kiji Technology — Software, Management Systems & AI Automation",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:description",
        content:
          "Custom web, mobile, cloud, management systems and AI automation for growing institutions and businesses.",
      },
    ],
  }),
  component: Index,
});

const stats = [
  { n: `${services.length}`, l: "Core service lines" },
  { n: `${products.length}`, l: "Ready-to-deploy products" },
  { n: `${allTech.length}+`, l: "Technologies in our stack" },
  { n: "Free", l: "Requirement consultation" },
];

// Illustrative placeholders, never represented as verified customer endorsements.
const reviews = [
  {
    name: "E-commerce project",
    role: "Illustrative testimonial · not a client endorsement",
    text: "A connected storefront and order workflow would help our team manage the customer journey in one place.",
  },
  {
    name: "Business software project",
    role: "Illustrative testimonial · not a client endorsement",
    text: "Clear milestones and a shared understanding of our operations are what we look for in a technology partner.",
  },
  {
    name: "AI automation project",
    role: "Illustrative testimonial · not a client endorsement",
    text: "We want practical automation that reduces repetitive administration while keeping our team in control.",
  },
];

const industries = [
  {
    icon: ShoppingBag,
    title: "Retail & commerce",
    text: "Storefronts, inventory and connected customer journeys.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    text: "Learning portals, admissions and administrative workflows.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    text: "Appointment workflows and carefully scoped information systems.",
  },
  { icon: Truck, title: "Logistics", text: "Booking, tracking and operational visibility." },
  {
    icon: BriefcaseBusiness,
    title: "Professional services",
    text: "Client portals, CRM and streamlined service delivery.",
  },
  {
    icon: Building2,
    title: "Startups & enterprises",
    text: "Product development and modernisation of existing systems.",
  },
];

function Index() {
  const [open, setOpen] = useState(0);
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-sun/30 blur-3xl" />
        <div className="absolute -right-20 top-40 h-96 w-96 rounded-full bg-leaf/25 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-xs font-bold text-primary">
              <span className="h-2 w-2 rounded-full bg-leaf" /> Trusted IT Partner in India
            </span>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] md:text-7xl">
              Your Idea. <br />
              <span className="text-gradient">Our Code.</span> <br />
              Endless Growth.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              We design and build custom software, apps and cloud solutions that grow with your
              business.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
              >
                Start a Project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="rounded-full border-2 border-primary px-7 py-3.5 font-bold text-primary transition-colors hover:bg-secondary"
              >
                Our Services
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src={hero}
              alt="Kiji Technology team at work"
              width={1600}
              height={1104}
              className="rounded-3xl object-cover shadow-soft"
            />
            <div className="absolute -bottom-6 -left-6 animate-floaty rounded-2xl bg-accent p-5 text-accent-foreground shadow-sun">
              <p className="font-display text-3xl font-extrabold">{products.length}</p>
              <p className="text-xs font-bold">Ready-to-deploy products</p>
            </div>
          </div>
        </div>
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 pb-16 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="rounded-2xl border bg-card p-6 text-center shadow-soft">
              <p className="font-display text-4xl font-extrabold text-primary">{s.n}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech marquee */}
      <section className="overflow-hidden bg-forest py-10 text-forest-foreground">
        <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.3em] text-sun">
          Technologies we work with
        </p>
        <div
          className="flex w-max animate-marquee gap-5 hover:[animation-play-state:paused]"
          style={{ animationDuration: `${allTech.length * 2.5}s` }}
        >
          {[...allTech, ...allTech].map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-3 rounded-full border border-forest-foreground/20 py-2.5 pl-2.5 pr-7 font-display text-lg font-bold"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white">
                <t.icon className="h-6 w-6" style={{ color: t.color }} />
              </span>
              {t.name}
            </span>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/technologies"
            className="inline-flex items-center gap-2 text-sm font-bold text-sun hover:underline"
          >
            Explore our full technology stack <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 lg:grid-cols-2">
        <img
          src={about}
          alt="Developer writing code"
          loading="lazy"
          width={1200}
          height={1200}
          className="aspect-square rounded-3xl object-cover shadow-soft"
        />
        <div>
          <p className="font-bold uppercase tracking-widest text-primary">About us</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Technology that understands <span className="text-primary">your business</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            At Kiji Technology OPC Private Limited, we start with the challenges behind your brief.
            Whether you need a new digital product, connected business tools or a better customer
            experience, we bring design, engineering and practical problem-solving together.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Scope and priorities agreed together",
              "User-centred design and maintainable code",
              "Milestone-based delivery and review",
              "Launch documentation and maintenance planning",
            ].map((x) => (
              <li key={x} className="flex items-center gap-3 font-semibold">
                <CheckCircle2 className="h-5 w-5 text-leaf" /> {x}
              </li>
            ))}
          </ul>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 font-bold text-primary">
            Know more about us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-bold uppercase tracking-widest text-primary">Services</p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Everything you need to go digital
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ slug, icon: Icon, title, text }) => (
              <Link
                key={slug}
                to="/services/$slug"
                params={{ slug }}
                className="group rounded-lg bg-card p-8 shadow-soft transition-all hover:-translate-y-1.5 hover:bg-forest hover:text-forest-foreground"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent text-accent-foreground transition-transform group-hover:rotate-6">
                  <Icon />
                </span>
                <h3 className="mt-6 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground group-hover:text-forest-foreground/75">
                  {text}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:text-sun">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProductsPreview />
      <LearningSpotlight />
      <AutomationSection />

      {/* Mission */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 lg:grid-cols-2">
        <div>
          <p className="font-bold uppercase tracking-widest text-primary">Why Kiji</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Driving innovation & growth</h2>
          <div className="mt-8 space-y-5">
            {[
              {
                icon: Target,
                t: "Mission & Vision",
                d: "Connect business goals to practical technology decisions, with a clear understanding of your users and workflows.",
              },
              {
                icon: Rocket,
                t: "Engineering with purpose",
                d: "Balance usability, performance and maintainability rather than solving one problem at the expense of another.",
              },
              {
                icon: Users,
                t: "Working together",
                d: "Bring design and engineering into the same conversation, with regular reviews and shared priorities.",
              },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="flex gap-4 rounded-lg border bg-card p-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-bold">{t}</h3>
                  <p className="text-sm text-muted-foreground">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img
          src={servicesImg}
          alt="App dashboard on laptop and phone"
          loading="lazy"
          width={1408}
          height={1008}
          className="rounded-3xl shadow-soft"
        />
      </section>

      <EngagementSection />
      <ProcessSection />
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-5">
          <p className="section-label">Industry applications</p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            Different industries. Thoughtful solutions.
          </h2>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            The right product reflects the people and processes it serves. These are some of the
            areas where our services can be applied.
          </p>
          <div className="mt-10 grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4 border-t pt-5">
                <Icon className="h-7 w-7 shrink-0 text-primary" />
                <div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-forest-gradient py-24 text-forest-foreground">
        <div className="mx-auto max-w-7xl px-5">
          <p className="text-center text-sm font-bold text-sun">Testimonials</p>
          <h2 className="mt-3 text-center text-3xl font-bold md:text-5xl">
            The partnerships we aim to build
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm text-forest-foreground/75">
            Illustrative feedback below. Verified client testimonials will be added with permission.
          </p>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="rounded-lg border border-forest-foreground/15 bg-forest-foreground/5 p-8 backdrop-blur"
              >
                <Quote className="h-8 w-8 text-sun" />
                <p className="mt-4 opacity-90">"{r.text}"</p>
                <p className="mt-6 font-bold">{r.name}</p>
                <p className="text-sm text-sun">{r.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 py-24">
        <h2 className="text-center text-4xl font-bold">All you need to know</h2>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="rounded-lg border bg-card">
              <Button
                variant="ghost"
                aria-expanded={open === i}
                aria-controls={`faq-${i}`}
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex h-auto w-full items-start justify-between gap-4 whitespace-normal p-5 text-left font-bold"
              >
                <span>{f.q}</span>
                <ChevronDown
                  className={`h-5 w-5 text-primary transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </Button>
              {open === i && (
                <p id={`faq-${i}`} className="px-5 pb-5 text-muted-foreground">
                  {f.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-gradient px-5 py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center text-primary-foreground">
          <h2 className="text-4xl font-bold md:text-5xl">Let's build your next chapter</h2>
          <p className="max-w-xl">
            Tell us what you want to improve. We’ll help shape the scope, approach and next steps.
          </p>
          <Button
            asChild
            size="lg"
            className="h-auto rounded-full bg-forest px-8 py-4 text-forest-foreground hover:bg-forest/90"
          >
            <Link to="/contact">
              Let’s talk about your project <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
