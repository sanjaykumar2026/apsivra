import type { Metadata } from "next";
import { EntityLink } from "@/components/public/entity-link";
import { PageHero } from "@/components/public/page-hero";
import { Container } from "@/components/ui/container";
import { pageImages } from "@/lib/page-images";
import { listIndustries } from "@/server/content/queries";

export const metadata: Metadata = {
  title: "Industries",
  description: "Industry contexts for Apsivra data modernization work.",
};

export default async function IndustriesPage() {
  const industries = await listIndustries();
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Where enterprise data modernization usually starts"
        lede="Each industry page describes common challenges and the Apsivra work that responds to them. Industry records are stored for later administration."
        image={pageImages.industries}
      />
      <Container className="grid gap-4 py-14 md:grid-cols-2">
        {industries.map((industry) => (
          <EntityLink
            key={industry.slug}
            href={`/industries/${industry.slug}`}
            title={industry.name}
            summary={industry.summary}
          />
        ))}
      </Container>
    </>
  );
}
