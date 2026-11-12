import type { Metadata } from "next";
import { PageHero } from "@/components/public/page-hero";
import { Container } from "@/components/ui/container";
import { pageImages } from "@/lib/page-images";

export const metadata: Metadata = {
  title: "About",
  description: "Apsivra is an AI and data engineering company focused on modernization, migration, and data quality.",
};

const steps = [
  ["Assess", "Record the source, target, volume, and constraints before any conversion starts."],
  ["Profile", "Inspect tables, files, nulls, keys, and sensitive fields."],
  ["Map", "Agree how source structures become the target model."],
  ["Convert and migrate", "Move databases and legacy files through rehearsed loads."],
  ["Validate", "Compare counts, keys, and business totals before go-live."],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Data engineering for enterprises that are leaving legacy platforms"
        lede="Apsivra works on the data itself: where it lives, how reliable it is, and what has to be true before a modern platform can run the business."
        image={pageImages.about}
      />
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2">
          <p className="text-muted">
            The company is positioned around AI automation, data profiling,
            migration, legacy conversion, data science, and data quality. The
            public site explains that work and collects assessment requests.
            Administrative tools are kept off this navigation.
          </p>
          <p className="text-muted">
            Sample products and case studies on the site are stored as content
            so the catalog can be managed later. They are marked as samples.
            They are not testimonials and they are not live system metrics.
          </p>
        </div>
        <ol className="mt-12 divide-y divide-line border-y border-line">
          {steps.map(([title, body], index) => (
            <li key={title} className="grid gap-2 py-5 md:grid-cols-[7rem_12rem_1fr]">
              <span className="font-mono text-xs text-teal">{String(index + 1).padStart(2, "0")}</span>
              <h2 className="font-serif text-2xl">{title}</h2>
              <p className="text-muted">{body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </>
  );
}
