import {
  boolean,
  index,
  integer,
  jsonb,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  uuid,
} from "drizzle-orm/pg-core";

const timestamps = {
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
};

const softDelete = {
  deletedAt: timestamp("deleted_at", { withTimezone: true }),
};

export const users = pgTable(
  "users",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    email: text("email").notNull(),
    username: text("username").notNull(),
    passwordHash: text("password_hash").notNull(),
    status: text("status").notNull().default("active"),
    failedLoginCount: integer("failed_login_count").notNull().default(0),
    lockedUntil: timestamp("locked_until", { withTimezone: true }),
    ...timestamps,
    ...softDelete,
  },
  (table) => [
    uniqueIndex("users_email_unique").on(table.email),
    uniqueIndex("users_username_unique").on(table.username),
  ],
);

export const roles = pgTable(
  "roles",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    key: text("key").notNull(),
    name: text("name").notNull(),
    description: text("description").notNull().default(""),
    ...timestamps,
  },
  (table) => [uniqueIndex("roles_key_unique").on(table.key)],
);

export const permissions = pgTable(
  "permissions",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    key: text("key").notNull(),
    description: text("description").notNull().default(""),
    ...timestamps,
  },
  (table) => [uniqueIndex("permissions_key_unique").on(table.key)],
);

export const userRoles = pgTable(
  "user_roles",
  {
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id),
    roleId: uuid("role_id")
      .notNull()
      .references(() => roles.id),
    ...timestamps,
  },
  (table) => [uniqueIndex("user_roles_unique").on(table.userId, table.roleId)],
);

export const rolePermissions = pgTable(
  "role_permissions",
  {
    roleId: uuid("role_id")
      .notNull()
      .references(() => roles.id),
    permissionId: uuid("permission_id")
      .notNull()
      .references(() => permissions.id),
    ...timestamps,
  },
  (table) => [
    uniqueIndex("role_permissions_unique").on(table.roleId, table.permissionId),
  ],
);

export const mfaSettings = pgTable("mfa_settings", {
  userId: uuid("user_id")
    .primaryKey()
    .references(() => users.id),
  secretEncrypted: text("secret_encrypted").notNull(),
  enabledAt: timestamp("enabled_at", { withTimezone: true }),
  ...timestamps,
});

export const mfaRecoveryCodes = pgTable(
  "mfa_recovery_codes",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id),
    codeHash: text("code_hash").notNull(),
    usedAt: timestamp("used_at", { withTimezone: true }),
    ...timestamps,
  },
  (table) => [index("mfa_recovery_codes_user_idx").on(table.userId)],
);

export const loginAttempts = pgTable(
  "login_attempts",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    email: text("email").notNull(),
    ipAddress: text("ip_address").notNull(),
    success: boolean("success").notNull(),
    stage: text("stage").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    index("login_attempts_email_created_idx").on(table.email, table.createdAt),
    index("login_attempts_ip_created_idx").on(table.ipAddress, table.createdAt),
  ],
);

export const sessions = pgTable(
  "sessions",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id),
    tokenHash: text("token_hash").notNull(),
    expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
    revokedAt: timestamp("revoked_at", { withTimezone: true }),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    ...timestamps,
  },
  (table) => [
    uniqueIndex("sessions_token_hash_unique").on(table.tokenHash),
    index("sessions_user_idx").on(table.userId),
  ],
);

export const passwordResetTokens = pgTable(
  "password_reset_tokens",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id),
    tokenHash: text("token_hash").notNull(),
    expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
    usedAt: timestamp("used_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [uniqueIndex("password_reset_token_hash_unique").on(table.tokenHash)],
);

export const services = pgTable(
  "services",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    slug: text("slug").notNull(),
    name: text("name").notNull(),
    summary: text("summary").notNull(),
    details: text("details").notNull(),
    sortOrder: integer("sort_order").notNull().default(0),
    published: boolean("published").notNull().default(true),
    isSample: boolean("is_sample").notNull().default(false),
    ...timestamps,
    ...softDelete,
  },
  (table) => [uniqueIndex("services_slug_unique").on(table.slug)],
);

export const products = pgTable(
  "products",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    slug: text("slug").notNull(),
    name: text("name").notNull(),
    shortDescription: text("short_description").notNull(),
    description: text("description").notNull(),
    features: jsonb("features").$type<string[]>().notNull(),
    benefits: jsonb("benefits").$type<string[]>().notNull(),
    technology: jsonb("technology").$type<string[]>().notNull(),
    architecture: text("architecture").notNull(),
    useCases: jsonb("use_cases").$type<string[]>().notNull(),
    documentation: text("documentation").notNull(),
    published: boolean("published").notNull().default(true),
    isSample: boolean("is_sample").notNull().default(true),
    ...timestamps,
    ...softDelete,
  },
  (table) => [uniqueIndex("products_slug_unique").on(table.slug)],
);

export const industries = pgTable(
  "industries",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    slug: text("slug").notNull(),
    name: text("name").notNull(),
    summary: text("summary").notNull(),
    challenges: jsonb("challenges").$type<string[]>().notNull(),
    dataChallenges: jsonb("data_challenges").$type<string[]>().notNull(),
    aiOpportunities: jsonb("ai_opportunities").$type<string[]>().notNull(),
    migrationChallenges: jsonb("migration_challenges").$type<string[]>().notNull(),
    solutions: jsonb("solutions").$type<string[]>().notNull(),
    published: boolean("published").notNull().default(true),
    isSample: boolean("is_sample").notNull().default(true),
    ...timestamps,
    ...softDelete,
  },
  (table) => [uniqueIndex("industries_slug_unique").on(table.slug)],
);

export const caseStudies = pgTable(
  "case_studies",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    slug: text("slug").notNull(),
    title: text("title").notNull(),
    customerLabel: text("customer_label").notNull(),
    industrySlug: text("industry_slug").notNull(),
    category: text("category").notNull(),
    businessChallenge: text("business_challenge").notNull(),
    existingEnvironment: text("existing_environment").notNull(),
    sourcePlatform: text("source_platform").notNull(),
    targetPlatform: text("target_platform").notNull(),
    dataVolume: text("data_volume").notNull(),
    tableCount: text("table_count").notNull(),
    migrationType: text("migration_type").notNull(),
    solution: text("solution").notNull(),
    technology: text("technology").notNull(),
    implementation: text("implementation").notNull(),
    validationApproach: text("validation_approach").notNull(),
    results: jsonb("results").$type<string[]>().notNull(),
    architecture: text("architecture").notNull(),
    published: boolean("published").notNull().default(true),
    isSample: boolean("is_sample").notNull().default(true),
    ...timestamps,
    ...softDelete,
  },
  (table) => [
    uniqueIndex("case_studies_slug_unique").on(table.slug),
    index("case_studies_industry_idx").on(table.industrySlug),
    index("case_studies_category_idx").on(table.category),
  ],
);

export const blogPosts = pgTable(
  "blog_posts",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    slug: text("slug").notNull(),
    title: text("title").notNull(),
    summary: text("summary").notNull(),
    body: text("body").notNull(),
    published: boolean("published").notNull().default(true),
    isSample: boolean("is_sample").notNull().default(true),
    ...timestamps,
    ...softDelete,
  },
  (table) => [uniqueIndex("blog_posts_slug_unique").on(table.slug)],
);

export const faqs = pgTable("faqs", {
  id: uuid("id").primaryKey().defaultRandom(),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
  published: boolean("published").notNull().default(true),
  ...timestamps,
  ...softDelete,
});

export const pages = pgTable(
  "pages",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    slug: text("slug").notNull(),
    title: text("title").notNull(),
    body: text("body").notNull(),
    published: boolean("published").notNull().default(true),
    ...timestamps,
    ...softDelete,
  },
  (table) => [uniqueIndex("pages_slug_unique").on(table.slug)],
);

export const customers = pgTable("customers", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  industrySlug: text("industry_slug"),
  notes: text("notes").notNull().default(""),
  ...timestamps,
  ...softDelete,
});

export const contactLeads = pgTable(
  "contact_leads",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull(),
    company: text("company").notNull(),
    email: text("email").notNull(),
    phone: text("phone").notNull().default(""),
    country: text("country").notNull().default(""),
    service: text("service").notNull().default(""),
    message: text("message").notNull(),
    status: text("status").notNull().default("new"),
    ...timestamps,
  },
  (table) => [
    index("contact_leads_status_created_idx").on(table.status, table.createdAt),
    index("contact_leads_email_idx").on(table.email),
  ],
);

export const demoRequests = pgTable(
  "demo_requests",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull(),
    company: text("company").notNull(),
    email: text("email").notNull(),
    phone: text("phone").notNull().default(""),
    country: text("country").notNull().default(""),
    productSlug: text("product_slug").notNull(),
    message: text("message").notNull().default(""),
    status: text("status").notNull().default("new"),
    ...timestamps,
  },
  (table) => [
    index("demo_requests_status_created_idx").on(table.status, table.createdAt),
  ],
);

export const assessmentRequests = pgTable(
  "assessment_requests",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    assessmentType: text("assessment_type").notNull(),
    name: text("name").notNull(),
    company: text("company").notNull(),
    email: text("email").notNull(),
    phone: text("phone").notNull().default(""),
    country: text("country").notNull().default(""),
    sourceDatabase: text("source_database").notNull().default(""),
    targetDatabase: text("target_database").notNull().default(""),
    dataSize: text("data_size").notNull().default(""),
    tableCount: text("table_count").notNull().default(""),
    recordCount: text("record_count").notNull().default(""),
    usesSap: boolean("uses_sap"),
    usesLegacySystem: boolean("uses_legacy_system"),
    cloudEnvironment: text("cloud_environment").notNull().default(""),
    timeline: text("timeline").notNull().default(""),
    requirements: text("requirements").notNull().default(""),
    status: text("status").notNull().default("new"),
    ...timestamps,
  },
  (table) => [
    index("assessment_requests_type_created_idx").on(
      table.assessmentType,
      table.createdAt,
    ),
    index("assessment_requests_status_created_idx").on(
      table.status,
      table.createdAt,
    ),
  ],
);

export const mediaFiles = pgTable("media_files", {
  id: uuid("id").primaryKey().defaultRandom(),
  storageKey: text("storage_key").notNull(),
  fileName: text("file_name").notNull(),
  mimeType: text("mime_type").notNull(),
  byteSize: integer("byte_size").notNull().default(0),
  altText: text("alt_text").notNull().default(""),
  ...timestamps,
  ...softDelete,
});

export const auditLogs = pgTable(
  "audit_logs",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id"),
    userEmail: text("user_email").notNull().default(""),
    ipAddress: text("ip_address").notNull().default(""),
    action: text("action").notNull(),
    module: text("module").notNull(),
    recordId: text("record_id").notNull().default(""),
    oldValue: jsonb("old_value"),
    newValue: jsonb("new_value"),
    result: text("result").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    index("audit_logs_user_created_idx").on(table.userId, table.createdAt),
    index("audit_logs_module_created_idx").on(table.module, table.createdAt),
  ],
);

export const systemSettings = pgTable("system_settings", {
  key: text("key").primaryKey(),
  value: jsonb("value").notNull(),
  ...timestamps,
});
