import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/public/page-hero";
import { Container } from "@/components/ui/container";
import { pageImages } from "@/lib/page-images";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Modernization, migration, quality, and automation outcomes for enterprise data.",
};

const outcomes = [
  {
    title: "Modernize a legacy estate",
    body: "Replace aging databases and file drops with a platform that operations and analytics can share.",
    href: "/data-services/legacy-conversion",
  },
  {
    title: "Migrate enterprise databases",
    body: "Move Oracle, SQL Server, MySQL, SAP extracts, and cloud databases through a rehearsed lifecycle.",
    href: "/data-services/migration",
  },
  {
    title: "Prove data quality",
    body: "Attach validation to the load so go-live has counts, keys, and business totals.",
    href: "/data-services/quality",
  },
  {
    title: "Prepare for automation",
    body: "Design discovery, mapping, and reporting so AI assistants can be added later without rewriting the workflow.",
    href: "/ai-automation",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Outcomes, tied to the data work that produces them"
        lede="Apsivra solutions are modernization programs. Each one is a combination of profiling, engineering, migration, and validation."
        image={pageImages.solutions}
      />
      <Container className="grid gap-4 py-14">
        {outcomes.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className="grid gap-3 border border-line bg-white p-5 hover:border-teal md:grid-cols-[5rem_1fr]"
          >
            <span className="font-mono text-xs text-teal">{String(index + 1).padStart(2, "0")}</span>
            <span>
              <span className="block font-serif text-2xl">{item.title}</span>
              <span className="mt-2 block text-muted">{item.body}</span>
            </span>
          </Link>
        ))}
      </Container>
    </>
  );
}
