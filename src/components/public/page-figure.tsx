import Image from "next/image";
import type { SiteImage } from "@/lib/page-images";

export function PageFigure({
  image,
  priority = false,
  tone = "paper",
}: {
  image: SiteImage;
  priority?: boolean;
  tone?: "paper" | "ink";
}) {
  const onInk = tone === "ink";

  return (
    <figure>
      <div
        className={`relative aspect-[16/10] overflow-hidden ${
          onInk ? "border border-paper/25" : "border border-line bg-paper"
        }`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover"
        />
      </div>
      <figcaption
        className={`mt-2 font-mono text-xs leading-relaxed tracking-wide ${
          onInk ? "text-paper/55" : "text-muted"
        }`}
      >
        {image.credit}
        {image.note ? ` ${image.note}` : ""}
      </figcaption>
    </figure>
  );
}
