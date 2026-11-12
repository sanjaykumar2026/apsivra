import type { Metadata } from "next";
import { LeadForms } from "@/components/public/lead-forms";
import { PageHero } from "@/components/public/page-hero";
import { Container } from "@/components/ui/container";
import { pageImages } from "@/lib/page-images";
import { listProducts, listServices } from "@/server/content/queries";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Apsivra or request a demo, migration assessment, AI assessment, or data profiling assessment.",
};

const allowed = ["contact", "demo", "migration", "ai", "profiling"] as const;
type Kind = (typeof allowed)[number];

function asKind(value: string | undefined): Kind {
  return allowed.find((item) => item === value) ?? "contact";
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ form?: string; product?: string }>;
}) {
  const params = await searchParams;
  const [services, products] = await Promise.all([listServices(), listProducts()]);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you want assessed"
        lede="General contact, a product demo, or an assessment for migration, AI automation, or data profiling. Submissions are stored in PostgreSQL."
        image={pageImages.contact}
      />
      <Container className="max-w-3xl py-14">
        <LeadForms
          initial={asKind(params.form)}
          productSlug={params.product ?? ""}
          services={services.map((service) => ({ slug: service.slug, name: service.name }))}
          products={products.map((product) => ({ slug: product.slug, name: product.name }))}
        />
      </Container>
    </>
  );
}
