import type { Metadata } from "next";
import { CtaBand } from "@/components/public/cta-band";
import { PageHero } from "@/components/public/page-hero";
import { SectionBlock } from "@/components/public/section-block";
import { Container } from "@/components/ui/container";
import { pageImages } from "@/lib/page-images";

export const metadata: Metadata = {
  title: "U2 Multivalue tech",
  description:
    "Migrate Rocket UniVerse and UniData to supported relational databases with metadata discovery, multivalue processing, and source-to-target validation.",
};

const capabilities = [
  "Automated metadata discovery",
  "Multivalue and subvalue data processing",
  "Configurable batch-based extraction",
  "Data transformation",
  "Controlled parallel migration",
  "Source-to-target validation",
];

export default function U2MultivalueDatabaseSupportPage() {
  return (
    <>
      <PageHero
        eyebrow="U2 Multivalue tech"
        title="Modernize UniVerse and UniData onto a relational platform"
        lede="Our database migration platform will support U2 Multivalue databases, including Rocket UniVerse and UniData, enabling organizations to modernize legacy data systems and migrate data to supported relational database platforms."
        image={pageImages.migration}
      />
      <Container className="py-12">
        <SectionBlock index="01" title="Key capabilities">
          <p>
            The solution aims to preserve data integrity, improve migration
            efficiency, and simplify the modernization of legacy database
            environments.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            {capabilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SectionBlock>
      </Container>
      <CtaBand
        title="Plan a U2 migration"
        body="Tell us whether the source is UniVerse or UniData, and which relational platform you want to reach."
        primaryHref="/contact?form=migration"
        primaryLabel="Request Assessment"
      />
    </>
  );
}
