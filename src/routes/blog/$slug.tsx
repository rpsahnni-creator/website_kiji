import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { Layout, PageHero } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/components/site/blog-data";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Kiji Technology Blog` },
          { name: "description", content: loaderData.excerpt },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.excerpt },
        ]
      : [],
  }),
  component: BlogPost,
});

function BlogPost() {
  const post = Route.useLoaderData();
  return (
    <Layout>
      <PageHero eyebrow="Blog" title={post.title} text={post.excerpt} />
      <article className="mx-auto max-w-3xl px-5 py-24">
        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" /> {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" /> {post.readTime}
          </span>
        </div>
        <div className="mt-8 space-y-10">
          {post.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-2xl font-bold">{section.heading}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{section.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-start gap-4 rounded-3xl border bg-secondary p-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-bold">Have a project in mind?</p>
          <Button asChild size="lg" className="h-auto rounded-full px-6 py-3 font-bold">
            <Link to="/contact">
              Talk to us <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </article>
    </Layout>
  );
}
