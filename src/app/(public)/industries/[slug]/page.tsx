import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/public/cta-band";
import { PageHero } from "@/components/public/page-hero";
import { SectionBlock } from "@/components/public/section-block";
import { Container } from "@/components/ui/container";
import { imageForIndustry } from "@/lib/page-images";
import { getIndustry, listCaseStudiesForIndustry } from "@/server/content/queries";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = await getIndustry(slug);
  return { title: industry?.name ?? "Industry" };
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = await getIndustry(slug);
  if (!industry) notFound();
  const studies = await listCaseStudiesForIndustry(industry.slug);

  const blocks = [
    ["01", "Industry challenges", industry.challenges],
    ["02", "Data challenges", industry.dataChallenges],
    ["03", "AI opportunities", industry.aiOpportunities],
    ["04", "Migration challenges", industry.migrationChallenges],
    ["05", "Apsivra solutions", industry.solutions],
  ] as const;

  return (
    <>
      <PageHero
        eyebrow="Industry"
        title={industry.name}
        lede={industry.summary}
        image={imageForIndustry(industry.slug)}
      />
      <Container className="py-12">
        {blocks.map(([index, title, items]) => (
          <SectionBlock key={title} index={index} title={title}>
            <ul className="list-disc space-y-2 pl-5">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SectionBlock>
        ))}
        <SectionBlock index="06" title="Relevant case studies">
          {studies.length === 0 ? (
            <p>No sample study is linked to this industry yet.</p>
          ) : (
            <ul className="space-y-2">
              {studies.map((study) => (
                <li key={study.slug}>
                  <Link className="font-semibold text-teal" href={`/case-studies/${study.slug}`}>
                    {study.title}
                  </Link>
                  <span className="mt-1 block text-sm">{study.customerLabel}</span>
                </li>
              ))}
            </ul>
          )}
        </SectionBlock>
      </Container>
      <CtaBand
        title={`Talk about ${industry.name.toLowerCase()} data`}
        body="Request an assessment and name the source platforms you want to review."
        primaryHref="/contact?form=migration"
        primaryLabel="Request Assessment"
      />
    </>
  );
}
