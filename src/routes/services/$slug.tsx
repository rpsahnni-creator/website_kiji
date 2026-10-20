import { createFileRoute, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { DetailPage } from "@/components/site/DetailPage";
import { services } from "@/components/site/data";
import { serviceDetails } from "@/components/site/details";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    const detail = serviceDetails[params.slug];
    if (!service || !detail) throw notFound();
    return { slug: service.slug, title: service.title, tagline: detail.tagline };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Kiji Technology` },
          { name: "description", content: loaderData.tagline },
          { property: "og:type", content: "website" },
          { name: "twitter:card", content: "summary_large_image" },
          { property: "og:title", content: `${loaderData.title} — Kiji Technology` },
          { property: "og:description", content: loaderData.tagline },
        ]
      : [],
  }),
  component: ServicePage,
});

function ServicePage() {
  const { slug } = Route.useLoaderData();
  const index = services.findIndex((s) => s.slug === slug);
  const service = services[index]!;
  const related = [1, 2, 3]
    .map((offset) => services[(index + offset) % services.length]!)
    .map((s) => ({ slug: s.slug, title: s.title, text: s.text }));

  return (
    <Layout>
      <DetailPage
        kind="service"
        eyebrow="Service"
        title={service.title}
        icon={service.icon}
        detail={serviceDetails[slug]!}
        related={related}
      />
    </Layout>
  );
}
