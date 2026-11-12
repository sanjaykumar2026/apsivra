import type { Metadata } from "next";
import { PageHero } from "@/components/public/page-hero";
import { SectionBlock } from "@/components/public/section-block";
import { Container } from "@/components/ui/container";
import { pageImages } from "@/lib/page-images";
import { getService } from "@/server/content/queries";

export const metadata: Metadata = {
  title: "Data Quality and Validation",
  description: "Checks that confirm migrated and converted enterprise data is fit for use.",
};

export default async function QualityPage() {
  const service = await getService("data-quality");
  return (
    <>
      <PageHero
        eyebrow="Data Quality"
        title="Validation is part of the migration, not a follow-up slide"
        lede={service?.summary ?? "Define the checks that must pass before users trust the target platform."}
        image={pageImages.quality}
      />
      <Container className="py-12">
        <SectionBlock index="01" title="Rules">
          <p>Counts, keys, referential rules, and the business totals the owners already reconcile.</p>
        </SectionBlock>
        <SectionBlock index="02" title="Exceptions">
          <p>Failed checks stay attached to the tables and files they came from, so a steward can decide what is acceptable.</p>
        </SectionBlock>
        <SectionBlock index="03" title="Evidence">
          <p>Go-live uses the same checks as rehearsal. A passing rehearsal is the evidence pack, not a new set of numbers invented for the meeting.</p>
        </SectionBlock>
      </Container>
    </>
  );
}
