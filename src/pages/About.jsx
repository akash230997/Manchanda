import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import MediaCarousel from '../components/MediaCarousel'
import { about, founder, industries, industrySlides, site } from '../content'

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="HSPC is committed to world-class accounting and tax service with a Cutting Through Complexity approach across the GTA, KWC and London."
        path="/about"
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{site.approach}</p>
          <h1>About us</h1>
          <p className="lead">
            World-class service involving a designed solution — with a focus on personal
            relationships and affordability.
          </p>
        </div>
      </section>
      <section className="container section narrow">
        <Reveal>
          {about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>
        <Reveal className="founder-card">
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
      </section>
      <section className="container section">
        <Reveal>
          <h2>Industries served</h2>
          <p className="muted section-lead">
            We provide designed solutions across a wide range of industries and
            associations.
          </p>
          <MediaCarousel
            slides={industrySlides}
            label="Industries served"
            interval={6000}
          />
          <ul className="industry-grid compact">
            {industries.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </section>
    </>
  )
}
