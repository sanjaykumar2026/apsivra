import Link from "next/link";

const variants = {
  primary: "bg-teal text-white hover:bg-ink",
  secondary: "border border-teal bg-white text-teal hover:bg-highlight",
  inverse: "border border-line bg-white text-ink hover:bg-highlight",
  ghost: "border border-teal text-teal hover:bg-white",
} as const;

const base =
  "inline-flex items-center justify-center px-4 py-2.5 text-base font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal";

export function ButtonLink({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant?: keyof typeof variants;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </Link>
  );
}
