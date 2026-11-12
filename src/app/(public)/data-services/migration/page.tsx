import type { Metadata } from "next";
import { CtaBand } from "@/components/public/cta-band";
import { PageHero } from "@/components/public/page-hero";
import { Container } from "@/components/ui/container";
import { pageImages } from "@/lib/page-images";

export const metadata: Metadata = {
  title: "Data Migration",
  description: "Enterprise database and application data migration, from assessment through go-live.",
};

const examples = [
  "Oracle → PostgreSQL",
  "SQL Server → PostgreSQL",
  "MySQL → PostgreSQL",
  "SAP → PostgreSQL",
  "Legacy database → modern database",
  "On-premises → cloud",
  "Cloud → cloud",
];

const lifecycle = [
  "Assessment",
  "Discovery",
  "Data Profiling",
  "Schema Analysis",
  "Data Mapping",
  "Schema Conversion",
  "Data Transformation",
  "Data Migration",
  "Validation",
  "Delta Migration",
  "Performance Optimization",
  "Go-Live",
];

export default function MigrationPage() {
  return (
    <>
      <PageHero
        eyebrow="Data Migration"
        title="Move enterprise data with a lifecycle, not a one-time export"
        lede="Apsivra focuses on database and application data: assess the source, convert the schema, load the data, and prove the result before go-live."
        image={pageImages.migration}
      />
      <Container className="space-y-12 py-14">
        <div>
          <h2 className="font-serif text-3xl">Supported migration examples</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {examples.map((item) => (
              <li key={item} className="border border-line bg-white px-3 py-2 text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-serif text-3xl">Migration lifecycle</h2>
          <ol className="mt-6 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {lifecycle.map((step, index) => (
              <li key={step} className="flex gap-3 bg-paper p-4">
                <span className="font-mono text-xs text-teal">{String(index + 1).padStart(2, "0")}</span>
                <span className="font-medium">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </Container>
      <CtaBand
        title="Request a migration assessment"
        body="Share the source database, target, approximate size, and timeline. We store the request in PostgreSQL."
        primaryHref="/contact?form=migration"
        primaryLabel="Request Migration Assessment"
      />
    </>
  );
}
