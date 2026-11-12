import "./env";
import { eq } from "drizzle-orm";
import { db } from "./client";
import {
  caseStudiesSeed,
  faqsSeed,
  industriesSeed,
  permissionSeed,
  postsSeed,
  productsSeed,
  roleSeed,
  servicesSeed,
} from "./seed-data";
import {
  caseStudies,
  faqs,
  industries,
  permissions,
  blogPosts,
  products,
  rolePermissions,
  roles,
  services,
  systemSettings,
} from "./schema";

async function main() {
  for (const row of servicesSeed) {
    const value = { ...row, isSample: true, published: true };
    await db.insert(services).values(value).onConflictDoUpdate({
      target: services.slug,
      set: { ...value, updatedAt: new Date() },
    });
  }
  for (const row of productsSeed) {
    const value = { ...row, isSample: true, published: true };
    await db.insert(products).values(value).onConflictDoUpdate({
      target: products.slug,
      set: { ...value, updatedAt: new Date() },
    });
  }
  for (const row of industriesSeed) {
    const value = { ...row, isSample: true, published: true };
    await db.insert(industries).values(value).onConflictDoUpdate({
      target: industries.slug,
      set: { ...value, updatedAt: new Date() },
    });
  }
  for (const row of caseStudiesSeed) {
    const value = { ...row, isSample: true, published: true };
    await db.insert(caseStudies).values(value).onConflictDoUpdate({
      target: caseStudies.slug,
      set: { ...value, updatedAt: new Date() },
    });
  }
  for (const row of postsSeed) {
    const value = { ...row, isSample: true, published: true };
    await db.insert(blogPosts).values(value).onConflictDoUpdate({
      target: blogPosts.slug,
      set: { ...value, updatedAt: new Date() },
    });
  }

  for (const faq of faqsSeed) {
    const existing = await db.select().from(faqs).where(eq(faqs.question, faq.question));
    if (existing.length === 0) {
      await db.insert(faqs).values({ ...faq, published: true });
    }
  }

  for (const key of permissionSeed) {
    await db
      .insert(permissions)
      .values({ key, description: key })
      .onConflictDoNothing();
  }

  const permissionRows = await db.select().from(permissions);
  const permissionId = new Map(permissionRows.map((row) => [row.key, row.id]));

  for (const role of roleSeed) {
    await db
      .insert(roles)
      .values({
        key: role.key,
        name: role.name,
        description: role.description,
      })
      .onConflictDoUpdate({
        target: roles.key,
        set: {
          name: role.name,
          description: role.description,
          updatedAt: new Date(),
        },
      });
  }

  const roleRows = await db.select().from(roles);
  const roleId = new Map(roleRows.map((row) => [row.key, row.id]));

  for (const role of roleSeed) {
    const id = roleId.get(role.key);
    if (!id) continue;
    for (const key of role.permissions) {
      const permission = permissionId.get(key);
      if (!permission) continue;
      await db
        .insert(rolePermissions)
        .values({ roleId: id, permissionId: permission })
        .onConflictDoNothing();
    }
  }

  await db
    .insert(systemSettings)
    .values({
      key: "brand",
      value: {
        name: "Apsivra",
        domain: "apsivra.com",
        email: "hello@apsivra.com",
      },
    })
    .onConflictDoUpdate({
      target: systemSettings.key,
      set: {
        value: {
          name: "Apsivra",
          domain: "apsivra.com",
          email: "hello@apsivra.com",
        },
        updatedAt: new Date(),
      },
    });

  console.log("Seed completed.");
  process.exit(0);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
