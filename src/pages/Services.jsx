import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import { services } from '../content'

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Bookkeeping and cloud accounting, corporate and personal taxation, payroll, international tax and advisory services from HSPC."
        path="/services"
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Practice areas</p>
          <h1>Services</h1>
          <p className="lead">
            Bookkeeping, taxation and advisory — designed to help organisations stay
            compliant and perform with clarity.
          </p>
        </div>
      </section>
      <section className="container section narrow">
        {services.map((s) => (
          <Reveal key={s.id}>
            <article id={s.id} className="card hover-card">
              <h2>{s.title}</h2>
              {s.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {s.points && (
                <ul>
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              )}
              {s.outro && <p>{s.outro}</p>}
              <div className="items">
                {s.items.map((i) => (
                  <details key={i.t}>
                    <summary>{i.t}</summary>
                    {i.d && (
                      <ul>
                        {i.d.map((x) => (
                          <li key={x}>{x}</li>
                        ))}
                      </ul>
                    )}
                  </details>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </>
  )
}
