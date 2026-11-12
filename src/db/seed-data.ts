export const servicesSeed = [
  {
    slug: "ai-automation",
    name: "AI Automation",
    summary:
      "Design enterprise data workflows that can later use AI for discovery, mapping, quality checks, and reporting.",
    details:
      "Apsivra plans automation around the work data teams already do: finding sources, profiling tables, proposing mappings, and checking results. The assistants described on this site are part of the product direction. They are not running inside this website.",
    sortOrder: 1,
  },
  {
    slug: "data-engineering",
    name: "Data Engineering",
    summary:
      "Build reliable pipelines, models, and controls that move enterprise data onto platforms people can trust.",
    details:
      "Engagements cover source intake, staging, transformation, and delivery into warehouses, operational stores, and application databases. The emphasis is repeatable pipelines and clear ownership, with PostgreSQL as a common target.",
    sortOrder: 2,
  },
  {
    slug: "data-profiling",
    name: "Data Profiling",
    summary:
      "Inspect databases and files before a migration so structure, quality, and sensitive fields are visible.",
    details:
      "Profiling covers tables, columns, types, nulls, duplicates, cardinality, patterns, volume, relationships, and compatibility with the target platform. Findings become the input for mapping and conversion, not a claim that an autonomous profiler is already deployed here.",
    sortOrder: 3,
  },
  {
    slug: "data-migration",
    name: "Data Migration",
    summary:
      "Move enterprise databases and application data through an assessed, validated cutover.",
    details:
      "Typical paths include Oracle, SQL Server, MySQL, and SAP extracts into PostgreSQL, plus on-premises to cloud and cloud-to-cloud moves. The lifecycle runs from assessment through delta load and go-live.",
    sortOrder: 4,
  },
  {
    slug: "legacy-data-conversion",
    name: "Legacy Data Conversion",
    summary:
      "Convert aging databases, files, and proprietary extracts into a modern data platform.",
    details:
      "Source material often includes flat files, CSV, Excel, XML, JSON, mainframe extracts, and application databases that no longer have a supported path. Conversion is paired with profiling, mapping, and validation.",
    sortOrder: 5,
  },
  {
    slug: "data-science",
    name: "Data Science",
    summary:
      "Turn prepared enterprise data into analysis, models, and decisions that operations can use.",
    details:
      "Work spans analytics, statistical review, forecasting, anomaly detection, visualization, and model development. Useful models depend on the migration, quality, and engineering work that comes first.",
    sortOrder: 6,
  },
  {
    slug: "data-quality",
    name: "Data Quality and Validation",
    summary:
      "Define checks that confirm migrated and converted data is complete, consistent, and fit for use.",
    details:
      "Validation compares counts, keys, totals, referential rules, and business-specific samples between source and target. Quality findings stay attached to the objects they describe so teams can fix them before go-live.",
    sortOrder: 7,
  },
  {
    slug: "data-modernization",
    name: "AI-powered Data Modernization",
    summary:
      "Replace fragile legacy estates with a platform that can support operations, analytics, and future AI services.",
    details:
      "Modernization joins profiling, conversion, migration, engineering, and validation into one program. AI is part of the target architecture. It is introduced only where the data foundation can support it.",
    sortOrder: 8,
  },
];

export const productsSeed = [
  {
    slug: "ai-data-automation-platform",
    name: "AI Data Automation Platform",
    shortDescription:
      "A sample product record for coordinating discovery, mapping, transformation, and reporting work.",
    description:
      "This catalog entry describes the intended AI Data Automation Platform. It is sample content stored for the website, not a statement that the platform is available for login today.",
    features: [
      "Workflow for discovery, profiling, mapping, and validation",
      "Placeholders for future AI assistants",
      "Assessment requests tied to a named platform",
      "Content managed for the public catalog",
    ],
    benefits: [
      "Gives data teams one path from source to validated target",
      "Keeps AI optional until a provider is connected",
      "Makes scope visible before a migration starts",
    ],
    technology: ["PostgreSQL", "REST APIs", "Pluggable AI provider"],
    architecture:
      "Public site and admin content describe the platform. Runtime assistants would sit behind the AI service port and return only validated responses.",
    useCases: [
      "Plan a legacy modernization program",
      "Document how source systems should be assessed",
      "Prepare a request for an AI assessment",
    ],
    documentation:
      "Sample documentation outline: source inventory, profiling checklist, mapping workbook, and validation report. Detailed guides will be published when the platform is ready.",
  },
  {
    slug: "data-profiling-platform",
    name: "Data Profiling Platform",
    shortDescription:
      "A sample product record for database, table, and column profiling.",
    description:
      "The profiling platform is described here as catalog content. The dashboard on the profiling page uses labeled demonstration numbers, not a live scan of a customer database.",
    features: [
      "Database, table, and column discovery",
      "Null, duplicate, and cardinality review",
      "Pattern and sensitive-field identification",
      "Relationship and compatibility notes",
    ],
    benefits: [
      "Shows migration risk before schema conversion",
      "Gives stewards a shared picture of data quality",
      "Separates sample demonstrations from live analysis",
    ],
    technology: ["PostgreSQL", "Metadata store", "Reporting views"],
    architecture:
      "A future profiler would read source metadata through controlled connectors and write findings to PostgreSQL. This website stores the product description only.",
    useCases: [
      "Pre-migration assessment",
      "Sensitive data review",
      "Target compatibility check",
    ],
    documentation:
      "Sample documentation outline: connector scope, metric definitions, and how demonstration dashboards are labeled.",
  },
  {
    slug: "data-migration-platform",
    name: "Data Migration Platform",
    shortDescription:
      "A sample product record for assessed database and application migration.",
    description:
      "The migration platform entry covers the lifecycle from assessment to go-live. It is sample catalog content for Oracle, SQL Server, MySQL, SAP, and cloud moves into modern targets such as PostgreSQL.",
    features: [
      "Assessment and discovery checklist",
      "Schema analysis and mapping",
      "Transformation and load planning",
      "Validation and delta migration steps",
    ],
    benefits: [
      "Makes cutover steps explicit",
      "Keeps source and target pairs visible",
      "Attaches validation to the load, not a slide",
    ],
    technology: ["PostgreSQL", "Oracle", "SQL Server", "MySQL", "SAP extracts"],
    architecture:
      "Control data lives with the engagement record. Execution engines can be added later without changing the public product page.",
    useCases: [
      "Oracle to PostgreSQL",
      "SQL Server to PostgreSQL",
      "On-premises to cloud",
    ],
    documentation:
      "Sample documentation outline: source inventory, mapping sheet, rehearsal log, and go-live checklist.",
  },
  {
    slug: "data-compatibility-platform",
    name: "Data Compatibility Platform",
    shortDescription:
      "A sample product record for comparing source structures with a modern target.",
    description:
      "Compatibility review checks types, lengths, constraints, character sets, and application assumptions before conversion. This entry is sample catalog content.",
    features: [
      "Type and length comparison",
      "Constraint and key review",
      "Character set and collation notes",
      "Application dependency list",
    ],
    benefits: [
      "Surfaces conversion issues before the load",
      "Gives application owners a concrete change list",
      "Reduces surprises in reporting and integrations",
    ],
    technology: ["Relational metadata", "PostgreSQL type system"],
    architecture:
      "Findings would be stored beside profiling results and linked to mapping decisions.",
    useCases: [
      "Legacy database to PostgreSQL",
      "Cross-cloud warehouse alignment",
      "Application upgrade data checks",
    ],
    documentation:
      "Sample documentation outline: incompatibility register and recommended conversion rules.",
  },
  {
    slug: "data-validation-platform",
    name: "Data Validation Platform",
    shortDescription:
      "A sample product record for proving a migration or conversion is complete.",
    description:
      "Validation compares source and target evidence: counts, keys, totals, and agreed business samples. This entry is sample catalog content.",
    features: [
      "Row and table count checks",
      "Key and referential checks",
      "Aggregate reconciliation",
      "Exception lists for stewards",
    ],
    benefits: [
      "Gives go-live a documented evidence pack",
      "Separates technical success from business sign-off",
      "Keeps failed checks attached to the records involved",
    ],
    technology: ["PostgreSQL", "Reconciliation queries", "Audit trail"],
    architecture:
      "Checks run against controlled copies of source and target data and write results that administrators can review later.",
    useCases: [
      "Migration rehearsal",
      "Delta load confirmation",
      "Legacy file conversion sign-off",
    ],
    documentation:
      "Sample documentation outline: check catalog, exception workflow, and sign-off record.",
  },
];

export const industriesSeed = [
  {
    slug: "manufacturing",
    name: "Manufacturing",
    summary:
      "Plant, supplier, and product data spread across ERP, MES, and local files.",
    challenges: [
      "Production and quality records live in different plants and versions of ERP.",
      "Supplier and inventory files arrive in formats that reporting cannot read directly.",
    ],
    dataChallenges: [
      "Item masters disagree across SAP and local databases.",
      "Historian and inspection data are high volume and weakly related to orders.",
    ],
    aiOpportunities: [
      "Assist discovery of duplicate materials and incomplete quality attributes.",
      "Recommend mappings between plant codes once profiling exists.",
    ],
    migrationChallenges: [
      "SAP extracts and custom tables need a staged path into PostgreSQL.",
      "Cutover has to respect production calendars and open orders.",
    ],
    solutions: [
      "Profile item, order, and quality structures before conversion.",
      "Migrate SAP and plant databases with validation against source totals.",
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    summary:
      "Clinical, operational, and claims data that must stay traceable and carefully scoped.",
    challenges: [
      "Registries, billing, and departmental systems were introduced at different times.",
      "Reporting teams wait on extracts instead of a shared platform.",
    ],
    dataChallenges: [
      "Identifiers, codes, and null-heavy clinical fields need profiling before they move.",
      "Sensitive fields have to be identified before a broader audience can use the data.",
    ],
    aiOpportunities: [
      "Help classify sensitive columns during discovery.",
      "Summarize profiling results for data stewards. Live classification is not running on this site.",
    ],
    migrationChallenges: [
      "Legacy clinical databases and files need a validated move, not a blind copy.",
      "Downtime windows are short and reconciliation has to be explainable.",
    ],
    solutions: [
      "Profile sources, flag sensitive fields, and convert into a governed store.",
      "Validate counts and key clinical identifiers before go-live.",
    ],
  },
  {
    slug: "banking",
    name: "Banking & Financial Services",
    summary:
      "Core banking, payments, and reporting data moving off aging platforms.",
    challenges: [
      "Product, customer, and ledger data sit in core systems that are costly to change.",
      "Finance and risk teams need the same numbers after a platform move.",
    ],
    dataChallenges: [
      "High volumes, strict keys, and history tables make a naive export unsafe.",
      "Codes and account structures differ between source and target.",
    ],
    aiOpportunities: [
      "Assist schema comparison and highlight columns that fail type compatibility.",
      "Draft validation checks for balances and counts for stewards to approve.",
    ],
    migrationChallenges: [
      "Oracle or mainframe sources often target PostgreSQL or a cloud warehouse.",
      "Delta loads must cover activity between rehearsal and go-live.",
    ],
    solutions: [
      "Assess source platforms, map ledger structures, and reconcile totals.",
      "Use a documented migration lifecycle with a separate validation stage.",
    ],
  },
  {
    slug: "retail",
    name: "Retail",
    summary:
      "Point-of-sale, inventory, and customer data that need one reliable view.",
    challenges: [
      "Stores, commerce, and merchandising systems do not share a single item model.",
      "Promotions and returns create duplicates and late-arriving records.",
    ],
    dataChallenges: [
      "Product hierarchies change faster than the databases that store them.",
      "Customer identifiers are inconsistent across channels.",
    ],
    aiOpportunities: [
      "Help detect duplicate customers and irregular item attributes after profiling.",
      "Support assortment and demand analysis once the data platform is stable.",
    ],
    migrationChallenges: [
      "Peak trading periods limit when a cutover can run.",
      "File drops from stores still supplement the main database.",
    ],
    solutions: [
      "Profile item and customer data, then convert files and databases together.",
      "Validate sales totals and inventory snapshots before users switch.",
    ],
  },
  {
    slug: "automotive",
    name: "Automotive",
    summary:
      "Supplier, warranty, and plant data across a long product lifecycle.",
    challenges: [
      "Engineering, manufacturing, and aftersales systems describe the same vehicle differently.",
      "Supplier scorecards depend on data that arrives in mixed formats.",
    ],
    dataChallenges: [
      "Parts catalogs carry long histories and overlapping revisions.",
      "Warranty claims need both structured fields and attached documents.",
    ],
    aiOpportunities: [
      "Assist mapping of part attributes across source systems.",
      "Highlight quality patterns once claims data is on a modern platform.",
    ],
    migrationChallenges: [
      "Legacy application databases and spreadsheets both have to be in scope.",
      "Plant systems cannot pause for a long conversion window.",
    ],
    solutions: [
      "Discover parts, supplier, and claim structures before mapping.",
      "Convert catalogs and migrate operational databases with rehearsal loads.",
    ],
  },
  {
    slug: "insurance",
    name: "Insurance",
    summary:
      "Policy, billing, and claims data leaving policy-admin systems and flat extracts.",
    challenges: [
      "Policy administration platforms and claims systems were integrated by nightly files.",
      "Actuarial and operations teams do not share one definition of a policy.",
    ],
    dataChallenges: [
      "Historical endorsements, cancellations, and reinstatements complicate row counts.",
      "Legacy files still carry fields the current application no longer shows.",
    ],
    aiOpportunities: [
      "Help compare policy layouts and propose field mappings for review.",
      "Support anomaly review on claims once data quality checks exist.",
    ],
    migrationChallenges: [
      "Mainframe extracts and relational policy databases often move together.",
      "Financial close dates constrain the go-live.",
    ],
    solutions: [
      "Profile policy and claims structures, including file layouts.",
      "Convert legacy files and validate premium and claim totals.",
    ],
  },
  {
    slug: "technology",
    name: "Technology",
    summary:
      "Product, billing, and telemetry data spread across cloud accounts and older stores.",
    challenges: [
      "Acquisitions leave behind extra databases and one-off schemas.",
      "Product analytics depends on event data that operations data does not match.",
    ],
    dataChallenges: [
      "The same customer exists in billing, support, and product databases.",
      "Schemas change quickly and profiling has to be repeatable.",
    ],
    aiOpportunities: [
      "Assist impact review when a source schema changes.",
      "Support forecasting only after identifiers and events are reliable.",
    ],
    migrationChallenges: [
      "Cloud-to-cloud moves still need mapping, not only a storage copy.",
      "Application teams need a compatibility list before they retarget SQL.",
    ],
    solutions: [
      "Profile each source, map shared entities, and migrate into PostgreSQL or the chosen cloud store.",
      "Add validation so product and finance totals still agree.",
    ],
  },
  {
    slug: "government",
    name: "Government",
    summary:
      "Program, case, and records data modernized without losing the audit trail.",
    challenges: [
      "Agencies run overlapping case systems and large archives of files.",
      "Public reporting and internal operations ask different questions of the same records.",
    ],
    dataChallenges: [
      "Older databases and document extracts lack consistent identifiers.",
      "Retention and sensitivity rules have to travel with the data.",
    ],
    aiOpportunities: [
      "Help inventory fields and flag sensitive columns during discovery.",
      "Draft documentation of mappings for review. Generation is not enabled on this site.",
    ],
    migrationChallenges: [
      "Legacy databases and proprietary extracts rarely share one format.",
      "Cutover plans need a rollback and a clear validation pack.",
    ],
    solutions: [
      "Discover systems, profile records, and convert them into a modern platform.",
      "Keep validation results and mapping decisions available for audit.",
    ],
  },
];

export const caseStudiesSeed = [
  {
    slug: "sap-manufacturing-migration",
    title: "SAP extract to a PostgreSQL operations store",
    customerLabel: "Anonymized manufacturing group",
    industrySlug: "manufacturing",
    category: "SAP Data Migration",
    businessChallenge:
      "Plant reporting depended on SAP extracts and local spreadsheets that did not agree.",
    existingEnvironment:
      "SAP ECC for orders and materials, plus plant SQL Server databases for quality checks.",
    sourcePlatform: "SAP ECC and SQL Server",
    targetPlatform: "PostgreSQL",
    dataVolume: "4.2 TB across ERP extracts and plant databases",
    tableCount: "860 tables in scope",
    migrationType: "Application data migration with file extracts",
    solution:
      "Profile materials, orders, and quality tables; map plant codes; load a PostgreSQL store; validate order totals.",
    technology: "PostgreSQL, SAP extract files, SQL Server",
    implementation:
      "Assessment, two rehearsal loads, and a weekend cutover window agreed with plant operations.",
    validationApproach:
      "Compare document counts, material totals, and a sample of open orders between source and target.",
    results: [
      "Open-order sample matched the agreed source extract.",
      "Material duplicates were listed for stewardship before go-live.",
      "Plant reporting pointed at the PostgreSQL store after validation.",
    ],
    architecture:
      "SAP ECC → extract → profile → map → PostgreSQL → validate",
  },
  {
    slug: "oracle-banking-postgresql",
    title: "Oracle core data to PostgreSQL",
    customerLabel: "Anonymized financial services firm",
    industrySlug: "banking",
    category: "Oracle to PostgreSQL",
    businessChallenge:
      "A reporting platform on Oracle was reaching end of support, and finance needed the same balances after the move.",
    existingEnvironment: "Oracle database for customer, account, and ledger history.",
    sourcePlatform: "Oracle",
    targetPlatform: "PostgreSQL",
    dataVolume: "12 TB",
    tableCount: "1,140 tables",
    migrationType: "Database migration with delta load",
    solution:
      "Schema analysis, type compatibility review, staged load, and balance reconciliation.",
    technology: "Oracle, PostgreSQL",
    implementation:
      "Full load rehearsal, delta for the gap period, and a go-live checklist signed by finance.",
    validationApproach:
      "Row counts, primary keys, and ledger totals compared for the agreed business dates.",
    results: [
      "Ledger totals for the sample close matched the source.",
      "Type conversions were listed before application SQL was retargeted.",
      "Delta load covered activity after the rehearsal.",
    ],
    architecture: "Oracle → schema analysis → map → load → delta → validate → PostgreSQL",
  },
  {
    slug: "legacy-insurance-conversion",
    title: "Policy files and a legacy database converted together",
    customerLabel: "Anonymized insurer",
    industrySlug: "insurance",
    category: "Legacy Data Conversion",
    businessChallenge:
      "Policy history lived in a legacy database and in fixed-width files the new platform could not read.",
    existingEnvironment: "Legacy policy-admin database plus nightly file extracts.",
    sourcePlatform: "Legacy database and flat files",
    targetPlatform: "PostgreSQL",
    dataVolume: "1.8 TB including historical files",
    tableCount: "240 tables and 36 file layouts",
    migrationType: "Legacy conversion",
    solution:
      "Discover file layouts, profile policy keys, map endorsements, convert, and validate premium totals.",
    technology: "Flat files, legacy SQL database, PostgreSQL",
    implementation:
      "Layout catalog, sample conversion, full conversion, and a business review of exception policies.",
    validationApproach:
      "Policy counts, premium totals, and a steward review of rejected layouts.",
    results: [
      "File layouts were cataloged before conversion.",
      "Exception policies stayed visible instead of being dropped.",
      "The modern store received both database and file history.",
    ],
    architecture:
      "Legacy system → discovery → profile → map → convert → validate → PostgreSQL",
  },
  {
    slug: "ai-automation-scenario",
    title: "Illustrative automation path for a data migration",
    customerLabel: "Sample scenario, not a named customer",
    industrySlug: "technology",
    category: "AI Data Automation",
    businessChallenge:
      "A technology company wanted discovery, mapping, and validation prepared so later AI assistants could help, without pretending those assistants already ran.",
    existingEnvironment: "Several cloud databases and one acquired product schema.",
    sourcePlatform: "Cloud SQL databases",
    targetPlatform: "PostgreSQL",
    dataVolume: "Sample figure: 800 GB",
    tableCount: "Sample figure: 320 tables",
    migrationType: "Planned AI-assisted migration",
    solution:
      "Define the workflow from discovery through validation. Leave AI calls behind a provider port until a provider is selected.",
    technology: "PostgreSQL, future AI provider port",
    implementation:
      "This study describes the intended path. No AI provider was called to produce it.",
    validationApproach:
      "Human review of mappings and count checks remain the sign-off, even when assistants are added later.",
    results: [
      "The workflow is documented for assessment conversations.",
      "No autonomous migration was executed for this sample.",
      "The AI port stays unwired on this website.",
    ],
    architecture:
      "Sources → discovery → profiling → mapping → transformation → migration → validation → reporting",
  },
  {
    slug: "healthcare-profiling",
    title: "Profiling a clinical operations database before migration",
    customerLabel: "Anonymized healthcare organization",
    industrySlug: "healthcare",
    category: "Data Profiling",
    businessChallenge:
      "A planned migration could not start until nulls, duplicates, and sensitive columns were understood.",
    existingEnvironment: "Departmental clinical database and a billing extract.",
    sourcePlatform: "SQL Server",
    targetPlatform: "PostgreSQL",
    dataVolume: "2.5 TB",
    tableCount: "540 tables",
    migrationType: "Profiling ahead of migration",
    solution:
      "Discover tables and columns, measure nulls and duplicates, and list likely relationships and sensitive fields.",
    technology: "SQL Server metadata, profiling checklist, PostgreSQL target notes",
    implementation:
      "Read-only discovery, steward review of sensitive columns, and a compatibility note for the target.",
    validationApproach:
      "Stewards confirmed the sensitive-field list and the tables in scope. This was not an automated production profiler run from this website.",
    results: [
      "Scope was reduced to tables the migration actually needed.",
      "Sensitive columns were marked before any broader access.",
      "Compatibility issues were written down before schema conversion.",
    ],
    architecture: "SQL Server → discovery → profile → sensitivity review → migration plan",
  },
  {
    slug: "retail-data-quality",
    title: "Quality checks for a retail item and sales migration",
    customerLabel: "Anonymized retail group",
    industrySlug: "retail",
    category: "Data Quality",
    businessChallenge:
      "Item and sales totals had to match after stores and commerce data moved to one platform.",
    existingEnvironment: "Commerce database, store files, and a merchandising workbook.",
    sourcePlatform: "MySQL and store files",
    targetPlatform: "PostgreSQL",
    dataVolume: "900 GB",
    tableCount: "180 tables and weekly store files",
    migrationType: "Migration with quality validation",
    solution:
      "Profile item keys, load commerce and store data, and reconcile sales totals and duplicate items.",
    technology: "MySQL, CSV store files, PostgreSQL",
    implementation:
      "Weekly rehearsal during a quiet trading window, then a final load with an exception list.",
    validationApproach:
      "Compare sales totals by day and list duplicate item identifiers for merchandising.",
    results: [
      "Day-level sales totals were reconciled for the rehearsal period.",
      "Duplicate items were queued for cleanup instead of merged automatically.",
      "Store files and the commerce database landed in one PostgreSQL model.",
    ],
    architecture: "MySQL + store files → profile → map → load → reconcile → PostgreSQL",
  },
];

export const postsSeed = [
  {
    slug: "how-to-read-a-data-profile",
    title: "How to read an enterprise data profile",
    summary:
      "What table counts, nulls, duplicates, and relationships tell you before a migration.",
    body:
      "A useful profile names the databases, tables, and columns in scope, then shows volume, emptiness, duplication, and likely keys. It is an input to mapping and conversion. The figures on Apsivra's profiling page are a labeled sample, so teams can see the shape of a report before a live engagement.",
  },
  {
    slug: "what-a-migration-assessment-covers",
    title: "What a migration assessment covers",
    summary:
      "The questions Apsivra asks before proposing a source-to-target plan.",
    body:
      "An assessment records the source and target platforms, approximate size, table counts, record counts, whether SAP or another legacy system is involved, the cloud environment, and the timeline. Those answers scope discovery and validation. They do not, by themselves, move any data.",
  },
  {
    slug: "preparing-legacy-files",
    title: "Preparing legacy files for a modern platform",
    summary:
      "Why layouts, encodings, and keys have to be cataloged before conversion.",
    body:
      "CSV, Excel, XML, JSON, fixed-width, and proprietary extracts fail in different ways. A conversion starts by listing layouts and profiling a sample, then mapping fields and validating totals. The modern platform receives data only after those checks have an owner.",
  },
];

export const faqsSeed = [
  {
    question: "Is the AI on this website running against customer data?",
    answer:
      "No. Pages describe the automation Apsivra is designing. No AI provider is connected, and no customer data is analyzed by a model from this site.",
    sortOrder: 1,
  },
  {
    question: "Are the profiling dashboard numbers live?",
    answer:
      "No. They are sample figures for an anonymized demonstration dataset and are labeled as such on the page.",
    sortOrder: 2,
  },
  {
    question: "Are case studies about named customers?",
    answer:
      "The studies shipped with the site are anonymized samples. They illustrate the shape of an engagement and are marked as sample content.",
    sortOrder: 3,
  },
  {
    question: "Which databases can a migration assessment include?",
    answer:
      "Tell us the source and target you have. Examples include Oracle, SQL Server, MySQL, SAP extracts, and older databases moving to PostgreSQL or between clouds.",
    sortOrder: 4,
  },
  {
    question: "Where do form submissions go?",
    answer:
      "Contact, demo, and assessment forms are stored in Apsivra's PostgreSQL database for follow-up. They are not sent to an AI service.",
    sortOrder: 5,
  },
];

export const permissionSeed = [
  "products.read",
  "products.create",
  "products.update",
  "products.delete",
  "services.read",
  "services.create",
  "services.update",
  "services.delete",
  "industries.read",
  "industries.create",
  "industries.update",
  "industries.delete",
  "case_studies.read",
  "case_studies.create",
  "case_studies.update",
  "case_studies.delete",
  "resources.read",
  "resources.create",
  "resources.update",
  "resources.delete",
  "leads.read",
  "leads.update",
  "customers.read",
  "customers.update",
  "users.read",
  "users.create",
  "users.update",
  "users.disable",
  "roles.read",
  "roles.update",
  "audit_logs.read",
  "settings.read",
  "settings.update",
  "media.read",
  "media.create",
  "media.delete",
] as const;

const contentWrite = permissionSeed.filter(
  (key) =>
    key.startsWith("products.") ||
    key.startsWith("services.") ||
    key.startsWith("industries.") ||
    key.startsWith("case_studies.") ||
    key.startsWith("resources.") ||
    key.startsWith("media.") ||
    key === "settings.read",
);

const salesWrite = permissionSeed.filter(
  (key) =>
    key.startsWith("leads.") ||
    key.startsWith("customers.") ||
    key === "products.read" ||
    key === "services.read",
);

export const roleSeed = [
  {
    key: "SUPER_ADMIN",
    name: "Super admin",
    description: "Full system access.",
    permissions: [...permissionSeed],
  },
  {
    key: "CONTENT_ADMIN",
    name: "Content admin",
    description: "Manage website content, services, products, industries, case studies, and resources.",
    permissions: contentWrite,
  },
  {
    key: "SALES_ADMIN",
    name: "Sales admin",
    description: "Manage leads, contact requests, customers, and demo requests.",
    permissions: salesWrite,
  },
  {
    key: "READ_ONLY_ADMIN",
    name: "Read-only admin",
    description: "View permitted information without modification rights.",
    permissions: permissionSeed.filter((key) => key.endsWith(".read")),
  },
];
