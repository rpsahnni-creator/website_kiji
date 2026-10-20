import { createFileRoute, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { DetailPage } from "@/components/site/DetailPage";
import { products } from "@/components/site/data";
import { productDetails } from "@/components/site/details";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    const detail = productDetails[params.slug];
    if (!product || !detail) throw notFound();
    return { slug: product.slug, title: product.title, tagline: detail.tagline };
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
  component: ProductPage,
});

function ProductPage() {
  const { slug } = Route.useLoaderData();
  const product = products.find((p) => p.slug === slug)!;
  const related = products
    .filter((p) => p.slug !== slug && p.category === product.category)
    .concat(products.filter((p) => p.category !== product.category))
    .slice(0, 3);

  return (
    <Layout>
      <DetailPage
        kind="product"
        eyebrow={product.category}
        title={product.title}
        icon={product.icon}
        detail={productDetails[slug]!}
        related={related}
      />
    </Layout>
  );
}
