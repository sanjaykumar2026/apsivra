import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function CtaBand({
  title,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  body: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="border-t border-line bg-paper-2 text-ink">
      <Container className="flex flex-col gap-6 py-12 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <h2 className="font-serif text-3xl">{title}</h2>
          <p className="mt-3 text-muted">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>
          {secondaryHref && secondaryLabel ? (
            <ButtonLink href={secondaryHref} variant="secondary">
              {secondaryLabel}
            </ButtonLink>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
