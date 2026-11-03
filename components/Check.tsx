"use client";
import { useEffect, useState, type ReactNode } from "react";

// A checkbox whose state is remembered per browser (localStorage), so the learning
// pages double as a progress tracker. Storage can be unavailable, so every access is guarded.
export default function Check({ id, children }: { id: string; children: ReactNode }) {
  const key = `lp:${id}`;
  const [on, setOn] = useState(false);

  useEffect(() => {
    try {
      setOn(localStorage.getItem(key) === "1");
    } catch {}
  }, [key]);

  const toggle = () => {
    const next = !on;
    setOn(next);
    try {
      localStorage.setItem(key, next ? "1" : "0");
    } catch {}
  };

  return (
    <label className={`check${on ? " done" : ""}`}>
      <input type="checkbox" checked={on} onChange={toggle} />
      <span>{children}</span>
    </label>
  );
}
