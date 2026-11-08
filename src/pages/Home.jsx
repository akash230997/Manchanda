import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Carousel from '../components/Carousel'
import Reveal from '../components/Reveal'
import { site, services, links, carousel, industries } from '../content'

export default function Home() {
  return (
    <>
      <Seo
        description="HSPC — Chartered Professional Accountants in London and Mississauga offering bookkeeping, taxation and advisory services across the GTA, KWC and London regions."
        path="/"
      />
      <Carousel slides={carousel} />
      <section className="container section">
        <Reveal className="grid3">
          <article className="card hover-card">
            <p className="kicker">The firm</p>
            <h2>Welcome to HSPC</h2>
            <p>
              Founded by {site.founder}, a Chartered Accountant from India and CPA in
              Canada. We deliver the technical depth of a large consulting firm with
              personal relationships and affordability.
            </p>
            <Link className="text-link" to="/about">
              More about us
            </Link>
          </article>
          <article className="card hover-card">
            <p className="kicker">Practice</p>
            <h2>Our services</h2>
            <ul className="link-list">
              {services.map((s) => (
                <li key={s.id}>
                  <Link to={`/services#${s.id}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </article>
          <article className="card hover-card">
            <p className="kicker">Resources</p>
            <h2>Useful links</h2>
            <ul className="link-list">
              {links.map(([t, u]) => (
                <li key={u}>
                  <a href={u} target="_blank" rel="noopener noreferrer">
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </section>
      <section className="container section">
        <Reveal>
          <p className="kicker">Industries served</p>
          <h2>Designed solutions across sectors</h2>
          <p className="muted section-lead">
            With our “{site.approach}” approach, we support numerous industries and
            associations across the {site.regions}.
          </p>
          <ul className="industry-grid">
            {industries.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </section>
      <section className="cta-band">
        <Reveal className="container cta-band-inner">
          <div>
            <p className="kicker">Next step</p>
            <h2>Send a brief note for a free consultation</h2>
            <p className="muted">
              Reach {site.contactName} in London or Mississauga for bookkeeping, tax or
              advisory support.
            </p>
          </div>
          <Link className="btn" to="/contact">
            Contact HSPC
          </Link>
        </Reveal>
      </section>
    </>
  )
}
