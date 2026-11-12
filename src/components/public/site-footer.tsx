import Link from "next/link";
import { dataServiceLinks, primaryNav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper-2 text-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl">Apsivra</p>
          <p className="mt-3 max-w-xs text-base text-muted">
            AI and data engineering for enterprises modernizing legacy data,
            platforms, and quality controls.
          </p>
          <p className="mt-4 text-base">
            <a className="text-teal underline decoration-line underline-offset-4" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        </div>
        <div>
          <p className="font-mono text-xs tracking-[0.16em] text-muted">NAVIGATION</p>
          <ul className="mt-3 space-y-1 text-base">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-teal" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs tracking-[0.16em] text-muted">DATA SERVICES</p>
          <ul className="mt-3 space-y-1 text-base">
            {dataServiceLinks.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-teal" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-4 text-sm text-muted">
          {site.domain}. Sample products, case studies, and dashboard figures on
          this site are labeled and are not live customer results.
        </p>
      </div>
    </footer>
  );
}
