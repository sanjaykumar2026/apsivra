import type { Metadata } from "next";
import { CtaBand } from "@/components/public/cta-band";
import { PageHero } from "@/components/public/page-hero";
import { SectionBlock } from "@/components/public/section-block";
import { Workflow } from "@/components/public/workflow";
import { Container } from "@/components/ui/container";
import { pageImages } from "@/lib/page-images";

export const metadata: Metadata = {
  title: "AI Automation",
  description: "How Apsivra designs AI-assisted enterprise data workflows. Assistants are not connected on this website.",
};

const sections = [
  ["01", "AI Automation Overview", "Automation is planned around the data workflow: find sources, understand them, map them, transform them, move them, check them, and report the result. Each assistant would have a narrow job. None of those assistants are connected on this website."],
  ["02", "Intelligent Data Discovery", "Discovery means listing source systems, schemas, and files that belong in scope. A future assistant could draft that inventory from metadata. A person would still confirm what is in the migration."],
  ["03", "AI Data Profiling", "Profiling measures shape and quality: types, nulls, duplicates, cardinality, patterns, and volume. The profiling page shows a labeled sample dashboard so the report format is visible before a live run."],
  ["04", "AI Data Mapping", "Mapping proposes how source columns land in the target model. Recommendations would be reviewable suggestions, not silent changes to a schema."],
  ["05", "AI Transformation Recommendations", "Transformation notes cover type changes, code lookups, and splits or merges that a target platform requires. They stay attached to the mapping so engineers can accept or reject them."],
  ["06", "AI Data Quality Analysis", "Quality analysis summarizes the profiling findings that threaten a load: empty keys, conflicting codes, and fields that do not fit the target type."],
  ["07", "AI Validation", "Validation remains a comparison of evidence: counts, keys, and business totals. An assistant could draft the check list. Sign-off stays with the data owners."],
  ["08", "AI-powered Reporting", "Reporting would explain what was discovered, mapped, loaded, and still open. This site does not generate those reports from a model."],
  ["09", "AI Agents", "The design allows task-specific agents for discovery, mapping, validation, and reporting. They would sit behind the AI service port. That port is present in the codebase and has no provider configured."],
  ["10", "Business Use Cases", "Useful places to start are a migration assessment, a profiling review before cutover, and a legacy file conversion where layouts are poorly documented."],
];

const flow = [
  "Source Systems",
  "AI Discovery",
  "AI Data Profiling",
  "AI Mapping",
  "AI Transformation",
  "Data Migration",
  "AI Validation",
  "Automated Reporting",
];

export default function AiAutomationPage() {
  return (
    <>
      <PageHero
        eyebrow="AI Automation"
        title="Automate the data workflow, starting with the work people already review"
        lede="This page explains the automation path Apsivra is designing for enterprise data. It does not claim that an AI service is performing these steps today."
        image={pageImages.ai}
      />
      <Container className="py-12">
        {sections.map(([index, title, body]) => (
          <SectionBlock key={title} index={index} title={title}>
            <p>{body}</p>
          </SectionBlock>
        ))}
        <SectionBlock index="11" title="Architecture">
          <p>
            A future call would travel from the application API to an AI service
            layer, then to a provider, then through a response check before
            anything is stored. The website interface does not talk to a vendor SDK.
          </p>
          <div className="mt-4 max-w-md">
            <Workflow
              steps={flow}
              caption="Conceptual workflow. The AI steps are planned capabilities and are not executed by this site."
            />
          </div>
        </SectionBlock>
      </Container>
      <CtaBand
        title="Request an AI assessment"
        body="Describe the workflow you want to automate. The request is stored for follow-up and is not sent to a model."
        primaryHref="/contact?form=ai"
        primaryLabel="Request AI Assessment"
      />
    </>
  );
}
