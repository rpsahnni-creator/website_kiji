import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { Layout, PageHero } from "@/components/site/Layout";
import { blogPosts } from "@/components/site/blog-data";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Kiji Technology OPC Private Limited" },
      {
        name: "description",
        content:
          "Practical guides on management systems, AI automation and choosing the right tech stack, from Kiji Technology.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Kiji Technology Blog" },
      {
        property: "og:description",
        content: "Practical guides on software, AI and technology decisions.",
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <Layout>
      <PageHero
        eyebrow="Blog"
        title="Guides & practical thinking"
        text="Notes on choosing management systems, scoping AI automation and making tech-stack decisions — written from our own project experience."
      />
      <section className="mx-auto grid max-w-5xl gap-6 px-5 py-24">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            to="/blog/$slug"
            params={{ slug: post.slug }}
            className="group rounded-lg border bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:border-primary"
          >
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5" /> {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> {post.readTime}
              </span>
            </div>
            <h2 className="mt-3 text-2xl font-bold group-hover:text-primary">{post.title}</h2>
            <p className="mt-3 text-muted-foreground">{post.excerpt}</p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary">
              Read article <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        ))}
      </section>
    </Layout>
  );
}
