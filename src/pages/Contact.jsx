import Seo from '../components/Seo'
import Form from '../components/Form'
import Reveal from '../components/Reveal'
import { site } from '../content'

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Contact HSPC — head office in London, ON and branch office in Mississauga. Email Harmeet Singh for a free consultation."
        path="/contact"
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">London & Mississauga</p>
          <h1>Contact us</h1>
          <p className="lead">
            Send a brief note for a free consultation — we would be glad to hear from you.
          </p>
        </div>
      </section>
      <section className="container section">
        <Reveal className="office-grid">
          {[site.headOffice, site.branchOffice].map((office) => (
            <article key={office.label} className="card hover-card office-card">
              <p className="kicker">{office.label}</p>
              <address>
                {office.lines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </address>
              <div className="map-frame">
                <iframe
                  title={`${office.label} map`}
                  src={office.map}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </article>
          ))}
        </Reveal>
        <Reveal className="narrow contact-panel">
          <address className="card hover-card">
            <strong>{site.contactName}</strong>
            <br />
            {site.legalName}
            <br />
            Email:{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </address>
          <h2>Free consultation</h2>
          <p className="muted">Send a brief note and we will get back to you.</p>
          <Form
            type="Consultation"
            label="Send message"
            fields={[
              ['name', 'Your Name'],
              ['email', 'Your E-mail', 'email'],
              ['message', 'Your Query', 'area'],
            ]}
          />
        </Reveal>
      </section>
    </>
  )
}
