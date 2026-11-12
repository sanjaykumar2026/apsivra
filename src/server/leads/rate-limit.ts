const buckets = new Map<string, { count: number; reset: number }>();

export function allowRequest(key: string, max = 8, windowMs = 60 * 60 * 1000) {
  const now = Date.now();
  const current = buckets.get(key);
  if (!current || current.reset < now) {
    buckets.set(key, { count: 1, reset: now + windowMs });
    return true;
  }
  if (current.count >= max) return false;
  current.count += 1;
  return true;
}
