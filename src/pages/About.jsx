import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import { about, endeavor, site } from '../content'

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Manchanda & Manchanda is a firm of Chartered Accountants in central Delhi, established in 1981."
        path="/about"
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Established {site.founded}</p>
          <h1>About us</h1>
          <p className="lead">A Delhi practice built on judgement, relationships and care.</p>
        </div>
      </section>
      <section className="container section narrow">
        <Reveal>
          {about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>
        <Reveal>
          <h2>Our endeavor</h2>
          <ol className="steps">
            {endeavor.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ol>
        </Reveal>
      </section>
    </>
  )
}
