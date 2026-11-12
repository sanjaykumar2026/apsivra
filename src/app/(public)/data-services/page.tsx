import type { Metadata } from "next";
import { EntityLink } from "@/components/public/entity-link";
import { PageHero } from "@/components/public/page-hero";
import { Container } from "@/components/ui/container";
import { pageImages } from "@/lib/page-images";
import { dataServiceLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Data Services",
  description: "Profiling, migration, legacy conversion, data science, engineering, and data quality.",
};

const descriptions: Record<string, string> = {
  "/data-services/profiling": "Inspect databases and files before a move.",
  "/data-services/migration": "Move enterprise databases through a validated lifecycle.",
  "/data-services/legacy-conversion": "Convert aging files and databases into a modern platform.",
  "/data-services/data-science": "Analysis and models that depend on prepared data.",
  "/data-services/engineering": "Pipelines and models for a platform people can trust.",
  "/data-services/quality": "Checks that prove a load is complete and consistent.",
};

export default function DataServicesPage() {
  const links = dataServiceLinks.filter((item) => item.href !== "/data-services");
  return (
    <>
      <PageHero
        eyebrow="Data Services"
        title="The data work underneath modernization"
        lede="Profiling, migration, conversion, engineering, quality, and data science. Each service has its own page. AI automation sits beside them, not instead of them."
        image={pageImages.services}
      />
      <Container className="grid gap-4 py-14 md:grid-cols-2">
        {links.map((item) => (
          <EntityLink
            key={item.href}
            href={item.href}
            title={item.label}
            summary={descriptions[item.href] ?? ""}
          />
        ))}
      </Container>
    </>
  );
}
