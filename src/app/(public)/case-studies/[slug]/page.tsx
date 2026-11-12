import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/public/page-hero";
import { SampleNote } from "@/components/public/sample-note";
import { Container } from "@/components/ui/container";
import { imageForIndustry } from "@/lib/page-images";
import { getCaseStudy } from "@/server/content/queries";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudy(slug);
  return { title: study?.title ?? "Case study" };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = await getCaseStudy(slug);
  if (!study) notFound();

  const facts = [
    ["Customer", study.customerLabel],
    ["Industry", study.industrySlug],
    ["Category", study.category],
    ["Source platform", study.sourcePlatform],
    ["Target platform", study.targetPlatform],
    ["Data volume", study.dataVolume],
    ["Tables", study.tableCount],
    ["Migration type", study.migrationType],
  ];

  return (
    <>
      <PageHero
        eyebrow={study.category}
        title={study.title}
        lede={study.businessChallenge}
        image={imageForIndustry(study.industrySlug)}
      />
      <Container className="space-y-10 py-14">
        {study.isSample ? (
          <SampleNote>
            Anonymized sample. This is not a named-customer claim and it does not
            use confidential information.
          </SampleNote>
        ) : null}
        <dl className="grid gap-px border border-line bg-line sm:grid-cols-2">
          {facts.map(([label, value]) => (
            <div key={label} className="bg-white p-4">
              <dt className="text-sm text-muted">{label}</dt>
              <dd className="mt-1 font-medium">{value}</dd>
            </div>
          ))}
        </dl>
        <section>
          <h2 className="font-serif text-2xl">Existing environment</h2>
          <p className="mt-3 max-w-3xl text-muted">{study.existingEnvironment}</p>
        </section>
        <section>
          <h2 className="font-serif text-2xl">Solution</h2>
          <p className="mt-3 max-w-3xl text-muted">{study.solution}</p>
        </section>
        <section>
          <h2 className="font-serif text-2xl">Technology</h2>
          <p className="mt-3 text-muted">{study.technology}</p>
        </section>
        <section>
          <h2 className="font-serif text-2xl">Implementation</h2>
          <p className="mt-3 max-w-3xl text-muted">{study.implementation}</p>
        </section>
        <section>
          <h2 className="font-serif text-2xl">Validation approach</h2>
          <p className="mt-3 max-w-3xl text-muted">{study.validationApproach}</p>
        </section>
        <section>
          <h2 className="font-serif text-2xl">Results</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
            {study.results.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="font-serif text-2xl">Architecture</h2>
          <pre className="mt-3 overflow-x-auto border border-line bg-white p-4 font-mono text-sm text-ink">
            {study.architecture}
          </pre>
        </section>
      </Container>
    </>
  );
}
