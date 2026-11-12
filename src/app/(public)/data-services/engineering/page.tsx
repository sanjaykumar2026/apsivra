import type { Metadata } from "next";
import { PageHero } from "@/components/public/page-hero";
import { SectionBlock } from "@/components/public/section-block";
import { Container } from "@/components/ui/container";
import { pageImages } from "@/lib/page-images";
import { getService } from "@/server/content/queries";

export const metadata: Metadata = {
  title: "Data Engineering",
  description: "Pipelines, models, and delivery for enterprise data platforms.",
};

export default async function EngineeringPage() {
  const service = await getService("data-engineering");
  return (
    <>
      <PageHero
        eyebrow="Data Engineering"
        title="Pipelines and models that operations can keep running"
        lede={service?.summary ?? "Build the path from source systems to a platform the business can query."}
        image={pageImages.engineering}
      />
      <Container className="py-12">
        <SectionBlock index="01" title="Intake">
          <p>Databases, application extracts, and files land in a staging area with a known owner and a known refresh.</p>
        </SectionBlock>
        <SectionBlock index="02" title="Modeling">
          <p>Target structures are explicit: keys, history, and the entities finance and operations already share.</p>
        </SectionBlock>
        <SectionBlock index="03" title="Delivery">
          <p>PostgreSQL is the usual system of record for the modern store. Warehouses and application databases are scoped per engagement.</p>
        </SectionBlock>
      </Container>
    </>
  );
}
