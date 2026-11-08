import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Carousel from '../components/Carousel'
import Reveal from '../components/Reveal'
import { site, services, links, carousel } from '../content'

export default function Home() {
  return (
    <>
      <Seo
        description="Chartered Accountants in New Delhi since 1981 offering audit and assurance, taxation, accounting and advisory services."
        path="/"
      />
      <Carousel slides={carousel} />
      <section className="container section">
        <Reveal className="grid3">
          <article className="card hover-card">
            <p className="kicker">The firm</p>
            <h2>Welcome to our firm</h2>
            <p>
              Manchanda & Manchanda is a firm of Chartered Accountants with office in
              central Delhi established in {site.founded}. We are serving for over 3
              decades.
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
      <section className="cta-band">
        <Reveal className="container cta-band-inner">
          <div>
            <p className="kicker">Next step</p>
            <h2>Ready to discuss your brief?</h2>
            <p className="muted">
              Reach the team in Defence Colony for audit, tax, accounting or advisory
              support.
            </p>
          </div>
          <Link className="btn" to="/contact">
            Contact the firm
          </Link>
        </Reveal>
      </section>
    </>
  )
}
