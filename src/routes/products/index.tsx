import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Layout, PageHero } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { ProductsGrid } from "@/components/site/Products";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — Kiji Technology OPC Private Limited" },
      {
        name: "description",
        content:
          "Ready-to-deploy platforms from Kiji Technology: university, college and school websites, management systems, exam systems, flat/society management, HRMS and AI automation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Kiji Technology Products" },
      {
        property: "og:description",
        content: "University, college & school platforms, management systems and AI automation.",
      },
    ],
  }),
  component: Products,
});

function Products() {
  return (
    <Layout>
      <PageHero
        eyebrow="Products"
        title="Ready-built platforms, customised for you"
        text="From university and college websites to school, exam, property and HR management systems, our products give institutions and businesses a strong digital foundation — configured to your workflows, not the other way around."
      />
      <ProductsGrid />
      <section className="bg-forest py-16 text-forest-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold">Don't see exactly what you need?</h2>
            <p className="mt-3 max-w-2xl text-forest-foreground/75">
              Every product can be customised, or we can build a fully bespoke system around your
              institution or business.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="h-auto shrink-0 rounded-full bg-accent px-6 py-3.5 text-accent-foreground hover:bg-accent/90"
          >
            <Link to="/contact">
              Discuss your requirement <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
