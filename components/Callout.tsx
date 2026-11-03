import type { ReactNode } from "react";

export default function Callout({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <aside className="callout">
      {title ? <strong>{title}</strong> : null}
      <div>{children}</div>
    </aside>
  );
}
