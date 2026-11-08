import Seo from '../components/Seo'
import Form from '../components/Form'
import Reveal from '../components/Reveal'
import { site } from '../content'

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Contact Manchanda & Manchanda, Chartered Accountants, C-286 Defence Colony, New Delhi."
        path="/contact"
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">New Delhi</p>
          <h1>Contact us</h1>
          <p className="lead">C-286, Defence Colony — we would be glad to hear from you.</p>
        </div>
      </section>
      <section className="container section narrow">
        <Reveal>
          <address className="card hover-card">
            <strong>{site.name}</strong>
            <br />
            {site.tagline}
            <br />
            {site.address}
            <br />
            Tel: {site.phone}, Fax: {site.fax}
            <br />
            Email: <a href={`mailto:${site.email}`}>{site.email}</a>
          </address>
          <Form
            type="Contact"
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
