import type { Metadata } from "next";
import { CtaBand } from "@/components/public/cta-band";
import { PageHero } from "@/components/public/page-hero";
import { Workflow } from "@/components/public/workflow";
import { Container } from "@/components/ui/container";
import { pageImages } from "@/lib/page-images";

export const metadata: Metadata = {
  title: "Legacy Data Conversion",
  description: "Convert legacy databases, files, and proprietary formats into a modern data platform.",
};

const sources = [
  "Legacy databases",
  "Flat files",
  "CSV",
  "Excel",
  "XML",
  "JSON",
  "Mainframe data",
  "Legacy application databases",
  "Proprietary formats",
];

const benefits = [
  ["Reduce legacy dependency", "Move the records a business still needs off platforms that are hard to staff and change."],
  ["Improve accessibility", "Put the same history where reporting and applications can query it."],
  ["Improve data quality", "Find broken keys and incomplete layouts while the conversion is still reversible."],
  ["Modernize infrastructure", "Land the data on a current database instead of another unsupported store."],
  ["Enable analytics", "Give analysts a model that is stable enough to query."],
  ["Enable AI", "Prepare a governed store that future assistants can use. No model is called from this page."],
];

export default function LegacyConversionPage() {
  return (
    <>
      <PageHero
        eyebrow="Legacy Data Conversion"
        title="Bring old data onto a platform the rest of the business can use"
        lede="Conversion covers databases that have outlived their applications, and the files those applications still emit."
        image={pageImages.legacy}
      />
      <Container className="grid gap-12 py-14 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <h2 className="font-serif text-3xl">Sources we plan for</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {sources.map((item) => (
              <li key={item} className="border border-line bg-white px-3 py-2 text-sm">
                {item}
              </li>
            ))}
          </ul>
          <h2 className="mt-12 font-serif text-3xl">Business benefits</h2>
          <dl className="mt-4 divide-y divide-line border-y border-line">
            {benefits.map(([title, body]) => (
              <div key={title} className="grid gap-2 py-4 md:grid-cols-[14rem_1fr]">
                <dt className="font-semibold">{title}</dt>
                <dd className="text-muted">{body}</dd>
              </div>
            ))}
          </dl>
        </div>
        <Workflow
          steps={[
            "Legacy System",
            "Data Discovery",
            "Data Profiling",
            "Data Mapping",
            "Transformation",
            "Conversion",
            "Validation",
            "Modern Data Platform",
          ]}
          caption="The conversion path used to scope an engagement."
        />
      </Container>
      <CtaBand
        title="Discuss a conversion"
        body="Tell us the legacy system and the platform you want to reach."
        primaryHref="/contact?form=migration"
        primaryLabel="Request Assessment"
      />
    </>
  );
}
