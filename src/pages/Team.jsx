import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import { team, founder } from '../content'

export default function Team() {
  return (
    <>
      <Seo
        title="Our Team"
        description="Meet Harmeet Singh, founder of HSPC — CA (India), CPA (Canada), with 18 years of tax and regulatory experience including KPMG India."
        path="/team"
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">People</p>
          <h1>Our team</h1>
          <p className="lead">
            Led by an experienced CPA with Big Four and cross-border tax depth — focused
            on personal client relationships.
          </p>
        </div>
      </section>
      <section className="container section">
        <Reveal className="founder-card wide">
          <img src={founder.photo} alt={founder.alt} className="founder-photo" />
          <div>
            <p className="kicker">Founder</p>
            <h2>{founder.name}</h2>
            <p className="muted">{founder.title}</p>
            {founder.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
        <Reveal className="grid2">
          {team.map((t) => (
            <article key={t.title} className="card hover-card">
              <h2>{t.title}</h2>
              <ul>
                {t.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </Reveal>
      </section>
    </>
  )
}
