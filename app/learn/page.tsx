import Link from "next/link";
import { weeks } from "@/lib/site";

export const metadata = { title: "Learning notes" };

export default function Learn() {
  return (
    <div className="prose">
      <h1>Learning notes</h1>
      <p>
        My interview-prep and engineering reference. One page per week, with checkboxes that remember
        progress in this browser. Add a new week by copying a folder under <code>app/learn/</code> and
        adding it to <code>lib/site.ts</code>.
      </p>

      <h2>Weekly plan</h2>
      <div className="cards">
        {weeks.map((w) => (
          <Link key={w.slug} className="card" href={`/learn/${w.slug}/`}>
            <span className={`badge ${w.status === "active" ? "" : "planned"}`}>
              Week {w.n} · {w.status === "active" ? "in progress" : "planned"}
            </span>
            <h3>{w.title}</h3>
            <p>{w.summary}</p>
          </Link>
        ))}
      </div>

      <h2>Reference</h2>
      <div className="cards">
        <Link className="card" href="/learn/decks/">
          <span className="badge">Practice</span>
          <h3>Interview question decks</h3>
          <p>17 topic decks: React, JS/TS, Node, AWS, system design, agentic AI, DSA and more. Think, then reveal the answer.</p>
        </Link>
      </div>
    </div>
  );
}
