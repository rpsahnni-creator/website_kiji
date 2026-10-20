import { PageHero } from "@/components/site/Layout";

export type LegalSection = { heading: string; body: string[] };

export function LegalPage({
  title,
  intro,
  updated,
  sections,
}: {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} text={intro} />
      <article className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-sm font-semibold text-muted-foreground">Last updated: {updated}</p>
        <div className="mt-10 space-y-10">
          {sections.map((s, i) => (
            <section key={s.heading}>
              <h2 className="text-xl font-bold">
                {i + 1}. {s.heading}
              </h2>
              {s.body.map((p) => (
                <p key={p} className="mt-3 leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
      </article>
    </>
  );
}
