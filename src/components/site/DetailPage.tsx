import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MessageCircle, Users } from "lucide-react";
import type { ComponentType } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { contact } from "@/components/site/data";
import type { Detail } from "@/components/site/details";

type Related = { slug: string; title: string; text: string };

export function DetailPage({
  kind,
  eyebrow,
  title,
  icon: Icon,
  detail,
  related,
}: {
  kind: "product" | "service";
  eyebrow: string;
  title: string;
  icon: ComponentType<{ className?: string }>;
  detail: Detail;
  related: Related[];
}) {
  const whatsapp = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    `Hi Kiji Technology, I'm interested in ${title}. Please share details.`,
  )}`;

  return (
    <>
      <section className="bg-forest-gradient text-forest-foreground">
        <div className="mx-auto max-w-7xl px-5 py-20 md:py-24">
          <nav className="text-xs font-semibold opacity-75" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-sun">
              Home
            </Link>
            <span className="mx-2">/</span>
            {kind === "product" ? (
              <Link to="/products" className="hover:text-sun">
                Products
              </Link>
            ) : (
              <Link to="/services" className="hover:text-sun">
                Services
              </Link>
            )}
            <span className="mx-2">/</span>
            <span className="text-sun">{title}</span>
          </nav>
          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center">
            <span className="grid h-20 w-20 shrink-0 place-items-center rounded-3xl bg-accent text-accent-foreground shadow-sun">
              <Icon className="h-10 w-10" />
            </span>
            <div>
              <span className="rounded-full bg-forest-foreground/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-sun">
                {eyebrow}
              </span>
              <h1 className="mt-4 text-4xl font-bold md:text-6xl">{title}</h1>
            </div>
          </div>
          <p className="mt-6 max-w-3xl text-lg opacity-85">{detail.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="h-auto rounded-full bg-accent px-7 py-3.5 font-bold text-accent-foreground hover:bg-accent/90"
            >
              <Link to="/contact">
                Get a free quote <ArrowRight />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-auto rounded-full border-forest-foreground/40 bg-transparent px-7 py-3.5 font-bold text-forest-foreground hover:bg-forest-foreground/10 hover:text-forest-foreground"
            >
              <a href={whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle /> Ask on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="section-label">Overview</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Why {title}?</h2>
          {detail.overview.map((p) => (
            <p key={p} className="mt-5 leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
          {detail.stack && (
            <div className="mt-8">
              <p className="text-sm font-bold">Technologies we typically use</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {detail.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border bg-card px-4 py-1.5 text-sm font-semibold"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl bg-secondary p-8">
            <h3 className="text-lg font-bold">Key benefits</h3>
            <ul className="mt-4 space-y-3">
              {detail.benefits.map((b) => (
                <li key={b} className="flex gap-3 text-sm font-semibold">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" /> {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border bg-card p-8">
            <h3 className="flex items-center gap-2 text-lg font-bold">
              <Users className="h-5 w-5 text-primary" /> Who it's for
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {detail.audience.map((a) => (
                <span key={a} className="rounded-full bg-accent/30 px-3 py-1.5 text-xs font-bold">
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-5">
          <p className="section-label">
            {kind === "product" ? "Modules & features" : "What we deliver"}
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            {kind === "product" ? "Everything you need, in one system" : "What's included"}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {detail.features.map((f, i) => (
              <div
                key={f.title}
                className="rounded-lg bg-card p-7 shadow-soft transition-transform hover:-translate-y-1"
              >
                <span className="font-display text-2xl font-extrabold text-primary/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20">
        <p className="section-label text-center">FAQ</p>
        <h2 className="mt-3 text-center text-3xl font-bold">Frequently asked questions</h2>
        <Accordion type="single" collapsible className="mt-8">
          {detail.faqs.map((f) => (
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

      {related.length > 0 && (
        <section className="border-t py-20">
          <div className="mx-auto max-w-7xl px-5">
            <h2 className="text-2xl font-bold md:text-3xl">
              {kind === "product" ? "Related products" : "Other services"}
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((r) =>
                kind === "product" ? (
                  <Link
                    key={r.slug}
                    to="/products/$slug"
                    params={{ slug: r.slug }}
                    className="group rounded-lg border bg-card p-6 transition-colors hover:border-primary"
                  >
                    <RelatedCard {...r} />
                  </Link>
                ) : (
                  <Link
                    key={r.slug}
                    to="/services/$slug"
                    params={{ slug: r.slug }}
                    className="group rounded-lg border bg-card p-6 transition-colors hover:border-primary"
                  >
                    <RelatedCard {...r} />
                  </Link>
                ),
              )}
            </div>
          </div>
        </section>
      )}

      <section className="bg-brand-gradient px-5 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 text-primary-foreground md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold">Let's discuss your requirement</h2>
            <p className="mt-2 max-w-xl opacity-90">
              Share what you need — we'll suggest the right scope and send a clear, itemised quote.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="h-auto shrink-0 rounded-full bg-forest px-8 py-4 text-forest-foreground hover:bg-forest/90"
          >
            <Link to="/contact">
              Talk to our team <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}

function RelatedCard({ title, text }: Related) {
  return (
    <>
      <h3 className="font-bold group-hover:text-primary">{title}</h3>
      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{text}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary">
        Learn more <ArrowRight className="h-4 w-4" />
      </span>
    </>
  );
}
