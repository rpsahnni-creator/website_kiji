import { Link } from "@tanstack/react-router";
import { ArrowRight, Bot, FileSearch, Workflow, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { process, engagementModels, commitments } from "@/components/site/data";
import automation from "@/assets/kiji-automation.jpg";

const automationAreas = [
  {
    icon: Bot,
    title: "AI assistants",
    text: "Answer enquiries from approved business knowledge, with a clear handoff to your team.",
  },
  {
    icon: Workflow,
    title: "Connected workflows",
    text: "Connect lead capture, CRM updates, notifications and follow-ups across your tools.",
  },
  {
    icon: FileSearch,
    title: "Document intelligence",
    text: "Extract and organise information from documents for your team to review and use.",
  },
  {
    icon: ShieldCheck,
    title: "Human oversight",
    text: "Define access, review points and evaluation criteria before putting AI into production.",
  },
];

export function AutomationSection() {
  return (
    <section className="bg-secondary py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
        <div>
          <p className="section-label">AI & automation</p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            Less repetitive work.
            <br />
            <span className="text-primary">More room to grow.</span>
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
            AI should solve a business problem—not just add another tool. We help identify useful
            opportunities and design automations that fit the way your people already work.
          </p>
          <div className="mt-8 grid gap-x-6 gap-y-7 sm:grid-cols-2">
            {automationAreas.map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <Icon className="mb-3 h-6 w-6 text-primary" />
                <h3 className="font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
          <Button
            asChild
            size="lg"
            className="mt-9 h-auto whitespace-normal rounded-full px-6 py-3.5 font-bold"
          >
            <Link to="/contact">
              Discuss an automation idea <ArrowRight />
            </Link>
          </Button>
        </div>
        <div>
          <img
            src={automation}
            alt="Connected AI chip, documents, messaging, database and calendar illustration"
            width={1200}
            height={1008}
            loading="lazy"
            className="w-full rounded-lg object-contain"
          />
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold text-muted-foreground">
            <span>Business-led use cases</span>
            <span className="text-primary">•</span>
            <span>Connected systems</span>
            <span className="text-primary">•</span>
            <span>Responsible deployment</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:py-24">
      <div className="max-w-2xl">
        <p className="section-label">Our approach</p>
        <h2 className="mt-3 text-3xl font-bold md:text-5xl">A clear path from idea to launch.</h2>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          Good delivery starts with shared understanding. Each stage gives you a clear view of what
          comes next and a chance to shape the outcome.
        </p>
      </div>
      <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        {process.map((step, index) => (
          <li key={step.title} className="border-t-2 border-primary/25 pt-5">
            <span className="font-display text-3xl font-bold text-primary">0{index + 1}</span>
            <h3 className="mt-4 text-base font-bold">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function EngagementSection() {
  return (
    <section className="bg-secondary py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label">How we work with you</p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">Flexible engagement models</h2>
          <p className="mt-5 text-muted-foreground">
            Choose the way of working that suits your budget, timeline and how much your
            requirements are likely to change.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {engagementModels.map((m, i) => (
            <div
              key={m.title}
              className={`flex flex-col rounded-3xl p-8 shadow-soft ${
                i === 0 ? "bg-forest text-forest-foreground" : "bg-card"
              }`}
            >
              <h3 className={`text-xl font-bold ${i === 0 ? "text-sun" : ""}`}>{m.title}</h3>
              <p
                className={`mt-3 text-sm leading-relaxed ${i === 0 ? "opacity-80" : "text-muted-foreground"}`}
              >
                {m.text}
              </p>
              <ul className="mt-6 flex-1 space-y-2.5">
                {m.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm font-semibold">
                    <CheckCircle2
                      className={`h-5 w-5 shrink-0 ${i === 0 ? "text-sun" : "text-primary"}`}
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 grid gap-x-8 gap-y-8 border-t pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((c) => (
            <div key={c.title}>
              <h3 className="font-bold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="h-auto rounded-full px-7 py-3.5 font-bold">
            <Link to="/contact">
              Get a free consultation <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
