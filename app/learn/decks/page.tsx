import Link from "next/link";
import { withBase } from "@/lib/site";

export const metadata = { title: "Interview decks" };

export default function Decks() {
  const src = withBase("/decks/index.html");
  return (
    <div className="prose">
      <p className="crumbs"><Link href="/learn/">Learn</Link> / Interview decks</p>
      <h1>Interview question decks</h1>
      <p>Read the question, answer out loud, then reveal the model answer. <a href={src}>Open full screen</a>.</p>
      <iframe className="deck" src={src} title="Interview question decks" />
    </div>
  );
}
