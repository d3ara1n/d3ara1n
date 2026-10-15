import { GITHUB_TOKEN } from 'astro:env/server';

const cache = new Map<string, Promise<number | null>>();

/**
 * Star count for `owner/name`, fetched once per build.
 * Resolves to `null` on any failure so the page can simply omit the number.
 */
export function getStars(repo: string): Promise<number | null> {
  let pending = cache.get(repo);
  if (!pending) {
    pending = fetchStars(repo);
    cache.set(repo, pending);
  }
  return pending;
}

async function fetchStars(repo: string): Promise<number | null> {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'dearain.dev-build',
  };
  if (GITHUB_TOKEN) headers.Authorization = `Bearer ${GITHUB_TOKEN}`;

  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      headers,
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      console.warn(`[github] ${repo}: HTTP ${res.status}, star count omitted`);
      return null;
    }
    const data = (await res.json()) as { stargazers_count?: unknown };
    return typeof data.stargazers_count === 'number' ? data.stargazers_count : null;
  } catch (error) {
    console.warn(`[github] ${repo}: ${String(error)}, star count omitted`);
    return null;
  }
}
