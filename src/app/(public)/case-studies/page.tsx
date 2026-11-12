import type { Metadata } from "next";
import { EntityLink } from "@/components/public/entity-link";
import { PageHero } from "@/components/public/page-hero";
import { SampleNote } from "@/components/public/sample-note";
import { Container } from "@/components/ui/container";
import { pageImages } from "@/lib/page-images";
import { listCaseStudies } from "@/server/content/queries";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Anonymized sample case studies for migration, conversion, profiling, and data quality.",
};

export default async function CaseStudiesPage() {
  const studies = await listCaseStudies();
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Anonymized examples of the work"
        lede="Studies show the structure of an engagement: challenge, platforms, approach, validation, and result. Names of real customers are not published here."
        image={pageImages.studies}
      />
      <Container className="space-y-6 py-14">
        <SampleNote>
          Every study in this catalog is sample content with anonymized labels.
        </SampleNote>
        <div className="grid gap-4 md:grid-cols-2">
          {studies.map((study) => (
            <EntityLink
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              title={study.title}
              summary={study.businessChallenge}
              meta={study.category}
            />
          ))}
        </div>
      </Container>
    </>
  );
}
