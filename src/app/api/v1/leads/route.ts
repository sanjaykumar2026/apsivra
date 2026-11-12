import { allowRequest } from "@/server/leads/rate-limit";
import { leadSchema } from "@/server/leads/schema";
import { storeLead } from "@/server/leads/store";

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (!allowRequest(`leads:${ip}`)) {
    return Response.json(
      { error: "Too many submissions. Please wait and try again." },
      { status: 429 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "The form could not be read." }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(payload);
  if (!parsed.success) {
    const fields = parsed.error.issues.map((issue) => ({
      path: issue.path.join("."),
      message: issue.message,
    }));
    return Response.json(
      { error: "Check the highlighted fields.", fields },
      { status: 400 },
    );
  }

  if (parsed.data.companyWebsite.trim()) {
    return Response.json({ ok: true });
  }

  const row = await storeLead(parsed.data);
  return Response.json({ ok: true, id: row?.id }, { status: 201 });
}
