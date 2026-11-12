"use client";

import { useMemo, useState } from "react";

const kinds = ["contact", "demo", "migration", "ai", "profiling"] as const;
type Kind = (typeof kinds)[number];

const labels: Record<Kind, string> = {
  contact: "General contact",
  demo: "Request demo",
  migration: "Migration assessment",
  ai: "AI assessment",
  profiling: "Data profiling assessment",
};

const inputClass =
  "mt-1 w-full border border-line bg-white px-3 py-2 text-sm outline-none focus:border-teal";

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-sm font-semibold" htmlFor={name}>
      {label}
      {children}
      {error ? <span className="mt-1 block font-normal text-teal">{error}</span> : null}
    </label>
  );
}

export function LeadForms({
  services,
  products,
  initial = "contact",
  productSlug = "",
  kindsAllowed = kinds,
}: {
  services: { slug: string; name: string }[];
  products: { slug: string; name: string }[];
  initial?: Kind;
  productSlug?: string;
  kindsAllowed?: readonly Kind[];
}) {
  const allowed = kindsAllowed.length > 0 ? kindsAllowed : kinds;
  const starting = allowed.includes(initial) ? initial : allowed[0];
  const [kind, setKind] = useState<Kind>(starting);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);

  const title = useMemo(() => labels[kind], [kind]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setFormError("");
    setErrors({});
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    const response = await fetch("/api/v1/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const body = (await response.json()) as {
      error?: string;
      fields?: { path: string; message: string }[];
    };
    setPending(false);
    if (!response.ok) {
      setFormError(body.error ?? "The form could not be saved.");
      const next: Record<string, string> = {};
      for (const field of body.fields ?? []) next[field.path] = field.message;
      setErrors(next);
      return;
    }
    setDone(true);
  }

  if (done) {
    return (
      <div className="border border-line bg-white p-6" role="status">
        <h2 className="font-serif text-2xl">Request stored</h2>
        <p className="mt-2 text-muted">
          Your {title.toLowerCase()} is saved in Apsivra&apos;s database. This site
          does not send it to an AI service.
        </p>
      </div>
    );
  }

  return (
    <div className="border border-line bg-white p-5 md:p-6">
      {allowed.length > 1 ? (
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Request type">
          {allowed.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={kind === item}
              className={`border px-3 py-1.5 text-sm ${kind === item ? "border-teal bg-highlight text-ink" : "border-line bg-white text-ink"}`}
              onClick={() => {
                setKind(item);
                setErrors({});
                setFormError("");
              }}
            >
              {labels[item]}
            </button>
          ))}
        </div>
      ) : null}
      <h2 className={`${allowed.length > 1 ? "mt-6" : ""} font-serif text-2xl`}>{title}</h2>
      <form className="mt-5 grid gap-4" onSubmit={onSubmit}>
        <input type="hidden" name="kind" value={kind} />
        <div className="absolute left-[-9999px]" aria-hidden="true">
          <label>
            Company website
            <input name="companyWebsite" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Name" name="name" error={errors.name}>
            <input id="name" name="name" required className={inputClass} autoComplete="name" />
          </Field>
          <Field label="Company" name="company" error={errors.company}>
            <input id="company" name="company" required className={inputClass} autoComplete="organization" />
          </Field>
          <Field label="Email" name="email" error={errors.email}>
            <input id="email" name="email" type="email" required className={inputClass} autoComplete="email" />
          </Field>
          <Field label="Phone" name="phone" error={errors.phone}>
            <input id="phone" name="phone" className={inputClass} autoComplete="tel" />
          </Field>
          <Field label="Country" name="country" error={errors.country}>
            <input id="country" name="country" className={inputClass} autoComplete="country-name" />
          </Field>
          {kind === "contact" ? (
            <Field label="Service" name="service" error={errors.service}>
              <select id="service" name="service" className={inputClass} defaultValue="">
                <option value="">General inquiry</option>
                {services.map((service) => (
                  <option key={service.slug} value={service.name}>
                    {service.name}
                  </option>
                ))}
              </select>
            </Field>
          ) : null}
          {kind === "demo" ? (
            <Field label="Product" name="productSlug" error={errors.productSlug}>
              <select
                id="productSlug"
                name="productSlug"
                className={inputClass}
                defaultValue={productSlug || products[0]?.slug || ""}
                required
              >
                {products.map((product) => (
                  <option key={product.slug} value={product.slug}>
                    {product.name}
                  </option>
                ))}
              </select>
            </Field>
          ) : null}
        </div>
        {kind === "migration" ? (
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Source database" name="sourceDatabase" error={errors.sourceDatabase}>
              <input id="sourceDatabase" name="sourceDatabase" required className={inputClass} />
            </Field>
            <Field label="Target database" name="targetDatabase" error={errors.targetDatabase}>
              <input id="targetDatabase" name="targetDatabase" required className={inputClass} />
            </Field>
            <Field label="Approximate data size" name="dataSize" error={errors.dataSize}>
              <input id="dataSize" name="dataSize" required className={inputClass} />
            </Field>
            <Field label="Number of tables" name="tableCount" error={errors.tableCount}>
              <input id="tableCount" name="tableCount" required className={inputClass} />
            </Field>
            <Field label="Number of records" name="recordCount" error={errors.recordCount}>
              <input id="recordCount" name="recordCount" required className={inputClass} />
            </Field>
            <Field label="Cloud environment" name="cloudEnvironment" error={errors.cloudEnvironment}>
              <input id="cloudEnvironment" name="cloudEnvironment" required className={inputClass} />
            </Field>
            <Field label="SAP" name="usesSap" error={errors.usesSap}>
              <select id="usesSap" name="usesSap" className={inputClass} defaultValue="no">
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </Field>
            <Field label="Legacy system" name="usesLegacySystem" error={errors.usesLegacySystem}>
              <select id="usesLegacySystem" name="usesLegacySystem" className={inputClass} defaultValue="no">
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </Field>
            <Field label="Migration timeline" name="timeline" error={errors.timeline}>
              <input id="timeline" name="timeline" required className={inputClass} />
            </Field>
          </div>
        ) : null}
        {kind === "contact" ? (
          <Field label="Message" name="message" error={errors.message}>
            <textarea id="message" name="message" required rows={5} className={inputClass} />
          </Field>
        ) : null}
        {kind === "demo" ? (
          <Field label="Message" name="message" error={errors.message}>
            <textarea id="message" name="message" rows={4} className={inputClass} />
          </Field>
        ) : null}
        {kind === "migration" || kind === "ai" || kind === "profiling" ? (
          <Field
            label={kind === "migration" ? "Additional requirements" : "What should the assessment cover?"}
            name="requirements"
            error={errors.requirements}
          >
            <textarea
              id="requirements"
              name="requirements"
              rows={5}
              required={kind !== "migration"}
              className={inputClass}
            />
          </Field>
        ) : null}
        {formError ? (
          <p className="text-sm text-teal" role="alert">
            {formError}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={pending}
          className="justify-self-start bg-teal px-4 py-2.5 text-sm font-semibold text-white hover:bg-ink disabled:opacity-60"
        >
          {pending ? "Saving..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
