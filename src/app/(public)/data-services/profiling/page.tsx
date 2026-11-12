import type { Metadata } from "next";
import { CtaBand } from "@/components/public/cta-band";
import { PageHero } from "@/components/public/page-hero";
import { ProfileDashboard } from "@/components/public/profile-dashboard";
import { Container } from "@/components/ui/container";
import { pageImages } from "@/lib/page-images";

export const metadata: Metadata = {
  title: "Data Profiling",
  description: "Automated enterprise data profiling: discovery, quality, relationships, and compatibility.",
};

const capabilities = [
  "Database discovery",
  "Table discovery",
  "Column discovery",
  "Data type analysis",
  "Null analysis",
  "Duplicate detection",
  "Cardinality analysis",
  "Data distribution",
  "Pattern detection",
  "Data quality analysis",
  "Metadata extraction",
  "Relationship discovery",
  "Data volume analysis",
  "Sensitive data identification",
  "Data compatibility analysis",
];

export default function ProfilingPage() {
  return (
    <>
      <PageHero
        eyebrow="Data Profiling"
        title="See the data before you move it"
        lede="Profiling gives a migration a factual inventory: what exists, how complete it is, and which fields will not fit the target."
        image={pageImages.profiling}
      />
      <Container className="space-y-12 py-14">
        <ul className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <li key={item} className="bg-paper px-4 py-3 text-sm">
              {item}
            </li>
          ))}
        </ul>
        <ProfileDashboard />
      </Container>
      <CtaBand
        title="Request a data profiling assessment"
        body="Tell us which databases or files you want profiled. The request is stored for a person to review."
        primaryHref="/contact?form=profiling"
        primaryLabel="Request Profiling Assessment"
      />
    </>
  );
}
