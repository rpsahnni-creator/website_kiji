import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BrainCircuit,
  Clock,
  Code2,
  Container,
  Layers,
  MessageCircle,
  Server,
  Smartphone,
  Globe,
} from "lucide-react";
import { Layout, PageHero } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { contact } from "@/components/site/data";

export const Route = createFileRoute("/hire-developers")({
  head: () => ({
    meta: [
      { title: "Hire Dedicated Developers — Kiji Technology OPC Private Limited" },
      {
        name: "description",
        content:
          "Hire dedicated Python/Django, PHP/Laravel, Node.js/TypeScript, Next.js/React, full-stack, AI/ML, DevOps and Flutter developers from Kiji Technology — hourly, part-time, full-time or fixed-price.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Hire Dedicated Developers — Kiji Technology" },
      {
        property: "og:description",
        content: "Django, Laravel, Node.js, Next.js, AI and DevOps developers for your project.",
      },
    ],
  }),
  component: HireDevelopers,
});

const roles = [
  {
    icon: Server,
    title: "Python / Django Developer",
    text: "Secure web apps, admin panels, REST APIs and data-heavy back-ends with Django, Django REST Framework and FastAPI.",
    skills: ["Python", "Django", "DRF", "FastAPI", "Celery", "PostgreSQL"],
  },
  {
    icon: Code2,
    title: "PHP / Laravel Developer",
    text: "Business portals, ERPs, CMS and e-commerce on Laravel — easy to host and quick to deliver.",
    skills: ["PHP 8", "Laravel", "Livewire", "MySQL", "REST APIs", "Redis"],
  },
  {
    icon: Server,
    title: "Node.js / TypeScript Developer",
    text: "API-first and real-time back-ends, microservices and integrations in TypeScript.",
    skills: ["Node.js", "TypeScript", "NestJS", "Express", "Prisma", "Socket.IO"],
  },
  {
    icon: Globe,
    title: "Next.js / React Developer",
    text: "SEO-friendly websites, SaaS dashboards and complex front-ends with modern React.",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "TanStack", "Vercel"],
  },
  {
    icon: Layers,
    title: "Full-Stack Developer",
    text: "End-to-end ownership of a product — database, API, front-end and deployment.",
    skills: ["Next.js", "Django / Laravel / Node", "PostgreSQL", "Docker", "CI/CD", "AWS"],
  },
  {
    icon: BrainCircuit,
    title: "AI / ML Engineer",
    text: "AI assistants, RAG search over your documents, AI agents, document extraction and custom ML models.",
    skills: ["OpenAI", "Claude", "Gemini", "LangChain", "pgvector", "PyTorch"],
  },
  {
    icon: Container,
    title: "DevOps / Cloud Engineer",
    text: "Docker, Kubernetes, CI/CD, monitoring and cost-optimised infrastructure on AWS, GCP or Azure.",
    skills: ["Docker", "Kubernetes", "Terraform", "AWS", "GCP", "Azure"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Developer",
    text: "Cross-platform Android and iOS apps connected to a secure backend, ready for store release.",
    skills: ["Flutter", "React Native", "Firebase", "Kotlin", "REST/GraphQL", "Play Store"],
  },
];

const models = [
  {
    title: "Hourly",
    text: "Pay for the hours worked — ideal for bug fixes, small features and short tasks.",
  },
  {
    title: "Part-time dedicated",
    text: "A developer working half-days on your project every month, with a regular schedule.",
  },
  {
    title: "Full-time dedicated",
    text: "A developer working only on your product, integrated with your team and tools.",
  },
  {
    title: "Fixed-price project",
    text: "A clearly scoped deliverable at an agreed price and timeline, paid by milestone.",
  },
];

const steps = [
  {
    title: "Share your requirement",
    text: "Tell us the role, skills, timeline and working hours you need.",
  },
  {
    title: "Talk to the developer",
    text: "Discuss your project directly with the proposed developer before you start.",
  },
  {
    title: "Start small",
    text: "Begin with a short first milestone to make sure the fit is right.",
  },
  {
    title: "Work with visibility",
    text: "Daily updates, shared task board, code in your repository and weekly reports.",
  },
];

const faqs = [
  {
    q: "Do you work with clients outside India?",
    a: "Yes. We work remotely with clients across India and abroad, using Slack, Google Meet/Zoom, Jira/Trello and GitHub, and can arrange overlapping working hours with your time zone.",
  },
  {
    q: "Who owns the code and IP?",
    a: "You do. Code is committed to your repository, and IP assignment and an NDA are included in the agreement before work starts.",
  },
  {
    q: "How quickly can a developer start?",
    a: "After the requirement call and developer discussion, work can usually begin as soon as the agreement is signed. We confirm a start date with every proposal.",
  },
  {
    q: "How do you report progress?",
    a: "Through daily or agreed-frequency updates, a shared task board, regular demos and weekly summary reports — with hours logged for hourly engagements.",
  },
  {
    q: "How is pricing calculated?",
    a: "It depends on the role, experience level and engagement model. Share your requirement and we will send a written quote with a clear rate and billing cycle.",
  },
];

function HireDevelopers() {
  const whatsapp = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    "Hi Kiji Technology, I'd like to hire a developer. Role: ",
  )}`;

  return (
    <Layout>
      <PageHero
        eyebrow="Hire developers"
        title="Hire dedicated developers for your project"
        text="Python/Django, PHP/Laravel, Node.js, Next.js, AI/ML, DevOps and mobile developers — available hourly, part-time, full-time or for fixed-price projects, for clients in India and worldwide."
      />

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="section-label">Roles</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Developers you can hire</h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map(({ icon: Icon, title, text, skills }) => (
            <div
              key={title}
              className="flex flex-col rounded-2xl border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-primary"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-bold text-secondary-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2">
          <div>
            <p className="section-label">Hiring models</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Flexible ways to work together</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {models.map((m) => (
                <div key={m.title} className="rounded-2xl bg-card p-6 shadow-soft">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="mt-3 font-bold">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="section-label">Process</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">How hiring works</h2>
            <ol className="mt-8 space-y-5">
              {steps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-forest font-display font-bold text-sun">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20">
        <h2 className="text-center text-3xl font-bold">Frequently asked questions</h2>
        <Accordion type="single" collapsible className="mt-8">
          {faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="text-base font-bold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="bg-brand-gradient px-5 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 text-primary-foreground md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold">Tell us who you need</h2>
            <p className="mt-2 max-w-xl opacity-90">
              Share the role, skills and duration — we'll reply with a suitable developer profile
              and a written quote.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="h-auto rounded-full bg-forest px-7 py-4 text-forest-foreground hover:bg-forest/90"
            >
              <Link to="/contact">
                Send requirement <ArrowRight />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="h-auto rounded-full bg-white px-7 py-4 text-forest hover:bg-white/90"
            >
              <a href={whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle /> WhatsApp us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
