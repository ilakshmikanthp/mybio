// Prefix for plain <a href> / asset URLs (next/link adds basePath by itself).
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const withBase = (path: string) => `${BASE}${path}`;

export const weeks = [
  { n: 1, slug: "week-1", title: "Story & Fundamentals", status: "active", summary: "Pitch, STAR stories, project deep-dives, JS/TS/React/Next.js fundamentals." },
  { n: 2, slug: "week-2", title: "System Design & AWS", status: "planned", summary: "Frontend system design, micro-frontends, BFF, serverless patterns on AWS." },
  { n: 3, slug: "week-3", title: "AI & Live Coding", status: "planned", summary: "MCP, RAG basics, AI-assisted coding rounds, light DSA and JS coding drills." },
  { n: 4, slug: "week-4", title: "Mocks & Gaps", status: "planned", summary: "Mock interviews, gap fixing, negotiation, resume final pass." },
] as const;
