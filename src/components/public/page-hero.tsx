import { PageFigure } from "@/components/public/page-figure";
import { Container } from "@/components/ui/container";
import type { SiteImage } from "@/lib/page-images";

export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  image?: SiteImage;
  children?: React.ReactNode;
}) {
  return (
    <section className="border-b border-line bg-white">
      <Container
        className={
          image
            ? "grid items-center gap-10 py-14 md:py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]"
            : "py-14 md:py-16"
        }
      >
        <div>
          <p className="font-mono text-sm tracking-[0.16em] text-teal">{eyebrow}</p>
          <h1 className="mt-3 font-serif text-5xl leading-tight md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-xl text-muted">{lede}</p>
          {children}
        </div>
        {image ? <PageFigure image={image} priority /> : null}
      </Container>
    </section>
  );
}
