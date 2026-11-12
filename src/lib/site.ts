export const site = {
  name: "Apsivra",
  domain: "apsivra.com",
  url: "https://apsivra.com",
  email: "hello@apsivra.com",
  description:
    "Apsivra is an AI and data engineering company. We modernize legacy data, automate data engineering, and improve data quality for enterprise platforms.",
};

export const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/ai-automation", label: "AI Automation" },
  { href: "/data-services", label: "Data Services" },
  { href: "/u2-multivalue-database-support", label: "U2 Multivalue tech" },
  { href: "/solutions", label: "Solutions" },
  { href: "/products", label: "Products" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
] as const;

export const dataServiceLinks = [
  { href: "/data-services", label: "Overview" },
  { href: "/data-services/profiling", label: "Data Profiling" },
  { href: "/data-services/migration", label: "Data Migration" },
  { href: "/data-services/legacy-conversion", label: "Legacy Conversion" },
  { href: "/data-services/data-science", label: "Data Science" },
  { href: "/data-services/engineering", label: "Data Engineering" },
  { href: "/data-services/quality", label: "Data Quality" },
] as const;

export const servicePaths: Record<string, string> = {
  "ai-automation": "/ai-automation",
  "data-engineering": "/data-services/engineering",
  "data-profiling": "/data-services/profiling",
  "data-migration": "/data-services/migration",
  "legacy-data-conversion": "/data-services/legacy-conversion",
  "data-science": "/data-services/data-science",
  "data-quality": "/data-services/quality",
  "data-modernization": "/solutions",
};

export const technologyEcosystem = [
  "PostgreSQL",
  "Oracle",
  "SQL Server",
  "MySQL",
  "SAP",
  "Flat files and mainframe extracts",
  "Amazon Web Services",
  "Microsoft Azure",
  "Google Cloud",
];
