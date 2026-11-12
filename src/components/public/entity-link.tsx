import Link from "next/link";

export function EntityLink({
  href,
  title,
  summary,
  meta,
}: {
  href: string;
  title: string;
  summary: string;
  meta?: string;
}) {
  return (
    <Link href={href} className="block border border-line bg-white p-5 transition-colors hover:border-teal">
      {meta ? <p className="font-mono text-xs tracking-[0.14em] text-teal">{meta}</p> : null}
      <h2 className="mt-2 font-serif text-2xl">{title}</h2>
      <p className="mt-2 text-base text-muted">{summary}</p>
    </Link>
  );
}
