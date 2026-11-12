import { SampleNote } from "./sample-note";

const metrics = [
  ["Tables discovered", "1,284"],
  ["Columns discovered", "18,640"],
  ["Rows analyzed", "42.6 million"],
  ["Duplicate records", "126,400"],
  ["Null values", "3.8% of profiled cells"],
  ["Data quality score", "86 / 100"],
  ["Potential relationships", "214"],
  ["Potential migration issues", "37"],
];

export function ProfileDashboard() {
  return (
    <div className="space-y-4">
      <SampleNote>
        Demonstration profile of an anonymized enterprise dataset. These figures
        are sample values, not a live analysis.
      </SampleNote>
      <dl className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map(([label, value]) => (
          <div key={label} className="bg-white p-4">
            <dt className="text-sm text-muted">{label}</dt>
            <dd className="mt-2 font-serif text-2xl text-ink">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
