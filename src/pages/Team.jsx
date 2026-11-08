import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import { team } from '../content'

export default function Team() {
  return (
    <>
      <Seo
        title="Our Team"
        description="Our leadership and professionally qualified team of Chartered Accountants, Company Secretaries, Lawyers, MBAs and Valuers."
        path="/team"
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">People</p>
          <h1>Our team</h1>
          <p className="lead">
            Chartered Accountants, Company Secretaries, lawyers, MBAs and valuers with
            Big4 and industry depth.
          </p>
        </div>
      </section>
      <section className="container section">
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
