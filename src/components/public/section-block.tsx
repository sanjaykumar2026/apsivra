export function SectionBlock({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-line py-8">
      <div className="grid gap-3 md:grid-cols-[7rem_1fr] md:gap-8">
        <p className="font-mono text-xs text-teal">{index}</p>
        <div>
          <h2 className="font-serif text-2xl md:text-3xl">{title}</h2>
          <div className="mt-3 max-w-3xl space-y-3 text-muted">{children}</div>
        </div>
      </div>
    </section>
  );
}
