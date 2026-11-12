export function SampleNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="border border-line bg-paper-2 px-4 py-3 text-sm text-muted">
      <span className="mr-2 font-mono text-xs tracking-[0.14em] text-teal">SAMPLE</span>
      {children}
    </p>
  );
}
