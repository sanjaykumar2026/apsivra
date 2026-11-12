import { PageHero } from "@/components/public/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { pageImages } from "@/lib/page-images";

export default function HomePage() {
  return (
    <PageHero
      eyebrow="APSIVRA"
      title="AI-Powered Data Modernization"
      lede="Transform legacy data, automate data engineering, improve data quality, and accelerate enterprise modernization with AI."
      image={pageImages.home}
    >
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/solutions">Explore Solutions</ButtonLink>
        <ButtonLink href="/contact?form=migration" variant="secondary">
          Request Assessment
        </ButtonLink>
      </div>
    </PageHero>
  );
}
