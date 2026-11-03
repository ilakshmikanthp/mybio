import Link from "next/link";
import { profile } from "@/lib/profile";
import { withBase } from "@/lib/site";

export default function Home() {
  const [first, ...rest] = profile.name.split(" ");

  return (
    <div className="bio">
      <section className="bio-hero">
        <div className="photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={withBase("/lakshmikanth.jpg")} alt={profile.name} width={900} height={1200} />
        </div>
        <div className="intro">
          <p className="eyebrow">{profile.title}</p>
          <h1>
            <span className="first">{first}</span>
            <span className="last">{rest.join(" ")}</span>
          </h1>
          <p className="tag">{profile.tagline}</p>
          <div className="btns">
            <a className="btn primary" href={withBase("/Lakshmikanth_Pithani_Resume.pdf")}>Resume (PDF)</a>
            <a className="btn" href={profile.linkedin}>LinkedIn</a>
            <Link className="btn" href="/learn/">Learning notes</Link>
          </div>
        </div>
      </section>

      <div className="bio-grid">
        <aside className="side">
          <ul className="contact">
            <li><span aria-hidden>✉</span><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><span aria-hidden>⌖</span>{profile.location}</li>
            <li><span aria-hidden>in</span><a href={profile.linkedin}>linkedin.com/in/ilakshmikanthp</a></li>
          </ul>

          <h2>Bio</h2>
          {profile.about.map((p) => <p key={p}>{p}</p>)}

          <h2>Skills</h2>
          {profile.skills.map((s) => (
            <div className="skill-row" key={s.group}>
              <h3>{s.group}</h3>
              <div className="chips">{s.items.map((i) => <span className="chip" key={i}>{i}</span>)}</div>
            </div>
          ))}
        </aside>

        <section className="main-col">
          <h2>Experience</h2>
          {profile.experience.map((j) => (
            <div className="job" key={j.role + j.dates}>
              <h3>{j.role}</h3>
              <div className="meta">{j.org} · {j.dates}</div>
              <ul>{j.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
