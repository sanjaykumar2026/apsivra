import { z } from "zod";

const person = {
  name: z.string().trim().min(2).max(120),
  company: z.string().trim().min(2).max(160),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(40).optional().default(""),
  country: z.string().trim().max(80).optional().default(""),
  companyWebsite: z.string().max(200).optional().default(""),
};

export const contactLeadSchema = z.object({
  kind: z.literal("contact"),
  ...person,
  service: z.string().trim().max(120).optional().default(""),
  message: z.string().trim().min(10).max(4000),
});

export const demoLeadSchema = z.object({
  kind: z.literal("demo"),
  ...person,
  productSlug: z.string().trim().min(2).max(160),
  message: z.string().trim().max(4000).optional().default(""),
});

export const migrationLeadSchema = z.object({
  kind: z.literal("migration"),
  ...person,
  sourceDatabase: z.string().trim().min(2).max(120),
  targetDatabase: z.string().trim().min(2).max(120),
  dataSize: z.string().trim().min(1).max(80),
  tableCount: z.string().trim().min(1).max(40),
  recordCount: z.string().trim().min(1).max(40),
  usesSap: z.enum(["yes", "no"]),
  usesLegacySystem: z.enum(["yes", "no"]),
  cloudEnvironment: z.string().trim().min(2).max(120),
  timeline: z.string().trim().min(2).max(120),
  requirements: z.string().trim().max(4000).optional().default(""),
});

export const aiLeadSchema = z.object({
  kind: z.literal("ai"),
  ...person,
  requirements: z.string().trim().min(10).max(4000),
});

export const profilingLeadSchema = z.object({
  kind: z.literal("profiling"),
  ...person,
  requirements: z.string().trim().min(10).max(4000),
});

export const leadSchema = z.discriminatedUnion("kind", [
  contactLeadSchema,
  demoLeadSchema,
  migrationLeadSchema,
  aiLeadSchema,
  profilingLeadSchema,
]);

export type LeadInput = z.infer<typeof leadSchema>;
