import Image from "next/image";
import content from "../content.json";

export default function Home() {
  return (
    <main className="page">
      <header className="topbar">
        <span>{content.name}</span>
        <nav aria-label="Main">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <Image
          src="/mascot.png"
          alt="The Kind Inspector — a friendly bug holding a magnifying glass and a heart"
          width={580}
          height={710}
          priority
        />
        <h1>
          I find the bugs,
          <br />
          so your users don&apos;t have to.
        </h1>
        <p className="intro">{content.intro}</p>
        <a className="btn btn-primary" href="#projects">
          View my projects
        </a>
        <a className="btn btn-ghost" href="/Indra_Kuswara_CV_ATS.pdf" download>
          Download CV
        </a>
      </section>

      <section className="stats" aria-label="Key results">
        {content.stats.map((s) => (
          <div key={s.label} className={`stat stat-${s.color}`}>
            <b>{s.value}</b>
            {s.label}
          </div>
        ))}
      </section>

      <section className="board" id="projects" aria-label="Projects">
        {content.projects.map((p) => (
          <article key={p.title} className="card">
            <span className="chip">{p.tag}</span>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
            <a href={p.url} target="_blank" rel="noreferrer">
              {p.linkLabel}
            </a>
          </article>
        ))}
      </section>

      <p className="skills">{content.skills.join(" · ")}</p>

      <h2 className="sec" id="experience">
        Experience
      </h2>
      <section className="timeline">
        {content.experience.map((e) => (
          <article key={`${e.title}-${e.period}`} className="job">
            <div className="job-main">
              <b>
                {e.title} — {e.company}
              </b>
              <span>{e.detail}</span>
            </div>
            <time>{e.period}</time>
          </article>
        ))}
      </section>

      <blockquote className="philo">
        &ldquo;{content.philosophy.quote}&rdquo;
        <br />
        <span>{content.philosophy.note}</span>
      </blockquote>

      <footer id="contact">
        <b>Let&apos;s talk</b>
        <br />
        <a href={`mailto:${content.email}`}>{content.email}</a>
        {" · "}
        <a href={content.linkedin} target="_blank" rel="noreferrer">
          linkedin.com/in/indrakuswara
        </a>
        {" · "}
        <a href={content.github} target="_blank" rel="noreferrer">
          github.com/indrakuswara
        </a>
        <br />
        <span className="target">{content.target}</span>
      </footer>
    </main>
  );
}
