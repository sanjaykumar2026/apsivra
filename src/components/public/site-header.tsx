"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { primaryNav } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-line bg-white text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-highlight focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Link href="/" className="mx-auto flex h-16 w-full max-w-6xl items-center justify-center px-5 sm:h-[4.5rem] md:h-24">
        <Image
          src="/logo-header.png"
          alt="Apsivra. AI and data management. Unlock Data. Power AI. Transform IT."
          width={2172}
          height={345}
          priority
          sizes="(max-width: 768px) 92vw, 640px"
          className="h-full w-auto max-w-full object-contain"
          style={{ height: "100%", width: "auto" }}
        />
      </Link>
      <div className="mx-auto flex max-w-6xl items-center justify-end px-5 py-2 md:hidden">
        <button
          type="button"
          className="border border-line px-3 py-2 text-base font-semibold"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      <nav
        id="site-menu"
        aria-label="Primary"
        className={`${open ? "block" : "hidden"} border-t border-line md:block`}
      >
        <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3 md:flex-row md:flex-wrap md:items-center md:gap-x-5 md:gap-y-2">
          {primaryNav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`block py-1 text-base ${active ? "font-semibold text-teal" : "text-ink/75 hover:text-teal"}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li className="md:ml-auto">
            <Link
              href="/contact?form=migration"
              className="mt-2 inline-flex bg-teal px-4 py-2 text-base font-semibold text-white hover:bg-ink md:mt-0"
              onClick={() => setOpen(false)}
            >
              Request Assessment
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
