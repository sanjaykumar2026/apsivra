export type SiteImage = {
  src: string;
  alt: string;
  credit: string;
  note?: string;
};

const credit = "Unsplash License. Free for commercial use.";

function photo(file: string, alt: string, note?: string): SiteImage {
  return { src: `/images/${file}.jpg`, alt, credit, note };
}

export const pageImages = {
  home: photo("home", "Rows of server cabinets in a data center."),
  about: photo("about", "A quiet office corridor with glass meeting rooms."),
  ai: photo("ai", "A close view of a printed circuit board."),
  services: photo("services", "Network cables seated in a patch panel."),
  profiling: photo(
    "profiling",
    "Charts on an analytics display.",
    "Figures on the screen are part of the photograph, not Apsivra results.",
  ),
  migration: photo("migration", "Fiber and ethernet cables connected to a network switch."),
  legacy: photo("legacy", "Curved shelves of archived volumes in a library."),
  science: photo("science", "Handwritten equations on paper."),
  engineering: photo("engineering", "The platter and arm inside a hard disk drive."),
  quality: photo("quality", "An engineer reviewing work on a laptop beside a production line."),
  solutions: photo("solutions", "Glass office towers seen from street level."),
  products: photo("products", "A laptop open to source code on a work desk."),
  industries: photo("solutions", "Glass office towers standing in for the industries this work serves."),
  studies: photo("studies", "An empty meeting room set for a working session."),
  resources: photo("resources", "Shelves of bound reference books."),
  contact: photo("contact", "A glass-walled office hallway."),
  compatibility: photo("compatibility", "An open workspace with many laptops in use."),
  validation: photo("validation", "People marking up a process diagram beside laptops."),
  manufacturing: photo("manufacturing", "Sparks from metalwork in a workshop."),
  healthcare: photo("healthcare", "A hospital reception area."),
  banking: photo("banking", "A candlestick chart on a dark display."),
  retail: photo("retail", "Clothing racks inside a shop."),
  automotive: photo("automotive", "Drive belts on a car engine."),
  insurance: photo("insurance", "A person signing a paper agreement."),
  technology: photo("technology", "People working on laptops around a shared table."),
  government: photo("government", "Columns on a neoclassical public building."),
};

const productImages: Record<string, SiteImage> = {
  "ai-data-automation-platform": pageImages.ai,
  "data-profiling-platform": pageImages.profiling,
  "data-migration-platform": pageImages.migration,
  "data-compatibility-platform": pageImages.compatibility,
  "data-validation-platform": pageImages.validation,
};

const industryImages: Record<string, SiteImage> = {
  manufacturing: pageImages.manufacturing,
  healthcare: pageImages.healthcare,
  banking: pageImages.banking,
  retail: pageImages.retail,
  automotive: pageImages.automotive,
  insurance: pageImages.insurance,
  technology: pageImages.technology,
  government: pageImages.government,
};

export function imageForProduct(slug: string) {
  return productImages[slug] ?? pageImages.products;
}

export function imageForIndustry(slug: string) {
  return industryImages[slug] ?? pageImages.industries;
}
