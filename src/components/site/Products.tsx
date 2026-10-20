import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products, productCategories } from "@/components/site/data";

export function ProductCard({ product }: { product: (typeof products)[number] }) {
  const Icon = product.icon;
  return (
    <Link
      id={product.slug}
      to="/products/$slug"
      params={{ slug: product.slug }}
      className="group flex scroll-mt-28 flex-col rounded-lg border bg-card p-8 shadow-soft transition-all hover:-translate-y-1.5 hover:border-primary"
    >
      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-primary-foreground group-hover:bg-accent group-hover:text-accent-foreground">
        <Icon />
      </span>
      <h3 className="mt-6 text-xl font-bold group-hover:text-primary">{product.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.text}</p>
      <ul className="mt-6 flex-1 space-y-2 border-t pt-5">
        {product.highlights.map((item) => (
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
  );
}

export function ProductsPreview() {
  const featured = products.slice(0, 6);
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label">Products</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Ready-to-deploy platforms for institutions & business
          </h2>
          <p className="mt-5 text-muted-foreground">
            Beyond custom development, we build and customise ready platforms for schools, colleges,
            universities, properties and business operations.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="h-auto rounded-full px-7 py-3.5 font-bold">
            <Link to="/products">
              View all products <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function ProductsGrid() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-24">
      {productCategories.map((category) => {
        const items = products.filter((p) => p.category === category);
        if (items.length === 0) return null;
        return (
          <div key={category} className="mb-16 last:mb-0">
            <h2 className="text-2xl font-bold md:text-3xl">{category}</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

const spotlight = [
  {
    slug: "studymate",
    badge: "AI for Class 1–5",
    points: [
      "Hint-first AI tutor in Hindi & English",
      "Read-aloud, adaptive practice & worksheets",
      "Parent dashboard with child-safe guardrails",
    ],
  },
  {
    slug: "online-test-platform",
    badge: "Tests & test series",
    points: [
      "Real exam interface with negative marking",
      "AI-generated questions & performance coach",
      "Sell test series online with Razorpay",
    ],
  },
];

export function LearningSpotlight() {
  return (
    <section className="bg-forest-gradient py-24 text-forest-foreground">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-2xl">
          <span className="rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-widest text-accent-foreground">
            Student products
          </span>
          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            AI-powered learning for <span className="text-sun">every student</span>
          </h2>
          <p className="mt-5 opacity-80">
            Two learning products built for Indian classrooms and homes — available for parents,
            schools, coaching institutes and white-label partners.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {spotlight.map(({ slug, badge, points }) => {
            const product = products.find((p) => p.slug === slug)!;
            const Icon = product.icon;
            return (
              <Link
                key={slug}
                to="/products/$slug"
                params={{ slug }}
                className="group flex flex-col rounded-3xl border border-forest-foreground/15 bg-forest-foreground/5 p-8 backdrop-blur transition-all hover:-translate-y-1 hover:border-sun"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-accent text-accent-foreground">
                    <Icon className="h-7 w-7" />
                  </span>
                  <span className="rounded-full border border-sun/40 px-3 py-1 text-xs font-bold text-sun">
                    {badge}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-bold">{product.title}</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-80">{product.text}</p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm font-semibold">
                      <span className="text-sun">✓</span> {p}
                    </li>
                  ))}
                </ul>
                <span className="mt-8 inline-flex items-center gap-2 font-bold text-sun">
                  Explore {product.title.split(" — ")[0]}{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
