export function Workflow({
  steps,
  caption,
}: {
  steps: string[];
  caption?: string;
}) {
  return (
    <div>
      <ol className="grid gap-0">
        {steps.map((step, index) => (
          <li key={step} className="grid grid-cols-[2.5rem_1fr] gap-3">
            <div className="flex flex-col items-center">
              <span className="flex h-8 w-8 items-center justify-center border border-ink font-mono text-xs">
                {String(index + 1).padStart(2, "0")}
              </span>
              {index < steps.length - 1 ? <span className="w-px flex-1 bg-line" /> : null}
            </div>
            <p className="pb-5 pt-1 font-medium text-ink">{step}</p>
          </li>
        ))}
      </ol>
      {caption ? <p className="mt-2 text-sm text-muted">{caption}</p> : null}
    </div>
  );
}
