import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Layout, PageHero } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { techStack, allTech } from "@/components/site/tech-stack";

export const Route = createFileRoute("/technologies")({
  head: () => ({
    meta: [
      { title: "Technologies — Kiji Technology OPC Pvt. Ltd." },
      {
        name: "description",
        content:
          "Next.js, React, Python/Django, FastAPI, Node.js, NestJS, PHP/Laravel, PostgreSQL, MySQL, MongoDB, OpenAI, Claude, Gemini, LangChain, Docker, Kubernetes, AWS, GCP and Azure — the stack Kiji Technology builds with.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Kiji Technology — Our Technology Stack" },
      {
        property: "og:description",
        content: "Full-stack web, AI, cloud and mobile technologies we work with.",
      },
    ],
  }),
  component: Technologies,
});

const principles = [
  {
    title: "Fit over fashion",
    text: "We recommend a stack based on your team, hosting budget and long-term maintenance — not on what's trending.",
  },
  {
    title: "Production-grade by default",
    text: "Typed code, automated tests, CI/CD, containerised deployments, monitoring and backups from day one.",
  },
  {
    title: "AI with guardrails",
    text: "Model choice, retrieval (RAG), evaluation test sets, cost limits and human review for every AI feature.",
  },
  {
    title: "No lock-in",
    text: "Open, well-documented technologies and infrastructure in your own cloud account, so you stay in control.",
  },
];

function Technologies() {
  return (
    <Layout>
      <PageHero
        eyebrow="Technologies"
        title="A modern, full-stack technology toolkit"
        text={`From Next.js front-ends and Django, Node.js or Laravel back-ends to PostgreSQL, AI models and cloud deployments on AWS, GCP or Azure — ${allTech.length}+ technologies, chosen to fit your project.`}
      />

      <nav className="sticky top-28 z-30 hidden border-b bg-background/90 backdrop-blur md:block">
        <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-5 py-3 text-sm font-semibold">
          {techStack.map((c) => (
            <a
              key={c.slug}
              href={`#${c.slug}`}
              className="whitespace-nowrap text-muted-foreground transition-colors hover:text-primary"
            >
              {c.category}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-5 py-16">
        {techStack.map((c) => (
          <section key={c.slug} id={c.slug} className="scroll-mt-44 border-b py-12 last:border-b-0">
            <div className="grid gap-8 lg:grid-cols-[1fr_2.2fr]">
              <div>
                <h2 className="text-3xl font-bold">{c.category}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{c.summary}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {c.items.map((t) => (
                  <div
                    key={t.name}
                    className="flex items-center gap-4 rounded-2xl border bg-card p-4 shadow-soft transition-transform hover:-translate-y-0.5"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-secondary">
                      <t.icon className="h-7 w-7" style={{ color: t.color }} />
                    </span>
                    <div className="min-w-0">
                      <p className="font-bold">{t.name}</p>
                      <p className="text-left text-xs leading-snug text-muted-foreground">
                        {t.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-5">
          <p className="section-label">How we choose</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Engineering principles</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <div key={p.title} className="rounded-2xl bg-card p-6 shadow-soft">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <h3 className="mt-3 font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest py-16 text-forest-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold">Need developers with these skills?</h2>
            <p className="mt-3 max-w-2xl text-forest-foreground/75">
              Hire a dedicated Django, Laravel, Node.js, Next.js, AI or DevOps developer — hourly,
              part-time or full-time.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="h-auto shrink-0 rounded-full bg-accent px-6 py-3.5 text-accent-foreground hover:bg-accent/90"
          >
            <Link to="/hire-developers">
              Hire developers <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
