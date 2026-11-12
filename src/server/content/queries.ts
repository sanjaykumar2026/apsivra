import { and, asc, eq, isNull } from "drizzle-orm";
import { db } from "@/db/client";
import {
  blogPosts,
  caseStudies,
  faqs,
  industries,
  products,
  services,
} from "@/db/schema";

const published = {
  service: and(eq(services.published, true), isNull(services.deletedAt)),
  product: and(eq(products.published, true), isNull(products.deletedAt)),
  industry: and(eq(industries.published, true), isNull(industries.deletedAt)),
  study: and(eq(caseStudies.published, true), isNull(caseStudies.deletedAt)),
  post: and(eq(blogPosts.published, true), isNull(blogPosts.deletedAt)),
  faq: and(eq(faqs.published, true), isNull(faqs.deletedAt)),
};

export async function listServices() {
  return db.select().from(services).where(published.service).orderBy(asc(services.sortOrder));
}

export async function getService(slug: string) {
  const rows = await db
    .select()
    .from(services)
    .where(and(published.service, eq(services.slug, slug)))
    .limit(1);
  return rows[0] ?? null;
}

export async function listProducts() {
  return db.select().from(products).where(published.product).orderBy(asc(products.name));
}

export async function getProduct(slug: string) {
  const rows = await db
    .select()
    .from(products)
    .where(and(published.product, eq(products.slug, slug)))
    .limit(1);
  return rows[0] ?? null;
}

export async function listIndustries() {
  return db.select().from(industries).where(published.industry).orderBy(asc(industries.name));
}

export async function getIndustry(slug: string) {
  const rows = await db
    .select()
    .from(industries)
    .where(and(published.industry, eq(industries.slug, slug)))
    .limit(1);
  return rows[0] ?? null;
}

export async function listCaseStudies() {
  return db
    .select()
    .from(caseStudies)
    .where(published.study)
    .orderBy(asc(caseStudies.title));
}

export async function getCaseStudy(slug: string) {
  const rows = await db
    .select()
    .from(caseStudies)
    .where(and(published.study, eq(caseStudies.slug, slug)))
    .limit(1);
  return rows[0] ?? null;
}

export async function listCaseStudiesForIndustry(industrySlug: string) {
  return db
    .select()
    .from(caseStudies)
    .where(and(published.study, eq(caseStudies.industrySlug, industrySlug)))
    .orderBy(asc(caseStudies.title));
}

export async function listPosts() {
  return db.select().from(blogPosts).where(published.post).orderBy(asc(blogPosts.title));
}

export async function listFaqs() {
  return db.select().from(faqs).where(published.faq).orderBy(asc(faqs.sortOrder));
}
