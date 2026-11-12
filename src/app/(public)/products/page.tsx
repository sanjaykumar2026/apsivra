import type { Metadata } from "next";
import { EntityLink } from "@/components/public/entity-link";
import { PageHero } from "@/components/public/page-hero";
import { SampleNote } from "@/components/public/sample-note";
import { Container } from "@/components/ui/container";
import { pageImages } from "@/lib/page-images";
import { listProducts } from "@/server/content/queries";

export const metadata: Metadata = {
  title: "Products",
  description: "Sample catalog of Apsivra data platforms.",
};

export default async function ProductsPage() {
  const products = await listProducts();
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Platforms for automation, profiling, migration, compatibility, and validation"
        lede="Product pages are rendered from the catalog in PostgreSQL so they can be managed later from the admin portal."
        image={pageImages.products}
      />
      <Container className="space-y-6 py-14">
        <SampleNote>
          These are sample product records. They describe intended platforms and
          do not represent software you can sign in to today.
        </SampleNote>
        <div className="grid gap-4 md:grid-cols-2">
          {products.map((product) => (
            <EntityLink
              key={product.slug}
              href={`/products/${product.slug}`}
              title={product.name}
              summary={product.shortDescription}
              meta={product.isSample ? "Sample product" : undefined}
            />
          ))}
        </div>
      </Container>
    </>
  );
}
