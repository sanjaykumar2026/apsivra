import { db } from "@/db/client";
import { assessmentRequests, contactLeads, demoRequests } from "@/db/schema";
import type { LeadInput } from "./schema";

export async function storeLead(input: LeadInput) {
  if (input.kind === "contact") {
    const [row] = await db
      .insert(contactLeads)
      .values({
        name: input.name,
        company: input.company,
        email: input.email,
        phone: input.phone,
        country: input.country,
        service: input.service,
        message: input.message,
      })
      .returning({ id: contactLeads.id });
    return row;
  }

  if (input.kind === "demo") {
    const [row] = await db
      .insert(demoRequests)
      .values({
        name: input.name,
        company: input.company,
        email: input.email,
        phone: input.phone,
        country: input.country,
        productSlug: input.productSlug,
        message: input.message,
      })
      .returning({ id: demoRequests.id });
    return row;
  }

  const assessmentType = input.kind === "migration" ? "migration" : input.kind;
  const [row] = await db
    .insert(assessmentRequests)
    .values({
      assessmentType,
      name: input.name,
      company: input.company,
      email: input.email,
      phone: input.phone,
      country: input.country,
      sourceDatabase: input.kind === "migration" ? input.sourceDatabase : "",
      targetDatabase: input.kind === "migration" ? input.targetDatabase : "",
      dataSize: input.kind === "migration" ? input.dataSize : "",
      tableCount: input.kind === "migration" ? input.tableCount : "",
      recordCount: input.kind === "migration" ? input.recordCount : "",
      usesSap: input.kind === "migration" ? input.usesSap === "yes" : null,
      usesLegacySystem:
        input.kind === "migration" ? input.usesLegacySystem === "yes" : null,
      cloudEnvironment: input.kind === "migration" ? input.cloudEnvironment : "",
      timeline: input.kind === "migration" ? input.timeline : "",
      requirements: input.requirements,
    })
    .returning({ id: assessmentRequests.id });
  return row;
}
