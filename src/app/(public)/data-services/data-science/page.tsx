import type { Metadata } from "next";
import { PageHero } from "@/components/public/page-hero";
import { Workflow } from "@/components/public/workflow";
import { Container } from "@/components/ui/container";
import { pageImages } from "@/lib/page-images";

export const metadata: Metadata = {
  title: "Data Science",
  description: "Analytics, statistical analysis, machine learning, and business insight on prepared enterprise data.",
};

const capabilities = [
  "Data analytics",
  "Statistical analysis",
  "Machine learning",
  "Predictive analytics",
  "Forecasting",
  "Anomaly detection",
  "Data visualization",
  "Business intelligence",
  "Customer analytics",
  "AI and machine learning model development",
];

export default function DataSciencePage() {
  return (
    <>
      <PageHero
        eyebrow="Data Science"
        title="Insight follows data that has already been made reliable"
        lede="Analytics and models are part of the practice. They sit after profiling, migration, and quality work, because a model cannot repair an unknown source."
        image={pageImages.science}
      />
      <Container className="grid gap-12 py-14 lg:grid-cols-[1fr_0.7fr]">
        <ul className="grid gap-px border border-line bg-line sm:grid-cols-2">
          {capabilities.map((item) => (
            <li key={item} className="bg-paper px-4 py-3">
              {item}
            </li>
          ))}
        </ul>
        <Workflow
          steps={["Data", "Analytics", "Machine Learning", "AI", "Business Insights"]}
          caption="The relationship Apsivra uses when scoping data science work. AI here is the destination of prepared data, not a live service on this website."
        />
      </Container>
    </>
  );
}
