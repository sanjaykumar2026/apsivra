import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/public/page-hero";
import { SampleNote } from "@/components/public/sample-note";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { imageForProduct } from "@/lib/page-images";
import { getProduct } from "@/server/content/queries";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);
  return { title: product?.name ?? "Product" };
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h2 className="font-serif text-2xl">{title}</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();

  return (
    <>
      <PageHero
        eyebrow="Product"
        title={product.name}
        lede={product.shortDescription}
        image={imageForProduct(product.slug)}
      />
      <Container className="space-y-10 py-14">
        {product.isSample ? (
          <SampleNote>Sample catalog content. This platform is not a live login.</SampleNote>
        ) : null}
        <p className="max-w-3xl text-lg text-muted">{product.description}</p>
        <div className="grid gap-10 md:grid-cols-2">
          <List title="Features" items={product.features} />
          <List title="Benefits" items={product.benefits} />
          <List title="Technology" items={product.technology} />
          <List title="Use cases" items={product.useCases} />
        </div>
        <section>
          <h2 className="font-serif text-2xl">Architecture</h2>
          <p className="mt-3 max-w-3xl text-muted">{product.architecture}</p>
        </section>
        <section>
          <h2 className="font-serif text-2xl">Documentation</h2>
          <p className="mt-3 max-w-3xl text-muted">{product.documentation}</p>
        </section>
        <ButtonLink href={`/contact?form=demo&product=${product.slug}`}>Request Demo</ButtonLink>
      </Container>
    </>
  );
}
