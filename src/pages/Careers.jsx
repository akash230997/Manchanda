import Seo from '../components/Seo'
import Form from '../components/Form'
import Reveal from '../components/Reveal'
import { site } from '../content'

export default function Careers() {
  return (
    <>
      <Seo
        title="Careers"
        description="Interested in joining HSPC in London or Mississauga? Share your details with Harmeet Singh."
        path="/careers"
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Join the practice</p>
          <h1>Careers</h1>
          <p className="lead">
            We welcome professionals who share our commitment to clarity, care and
            technical excellence across the {site.regions}.
          </p>
        </div>
      </section>
      <section className="container section narrow">
        <Reveal>
          <p>
            If you would like to explore opportunities with {site.legalName}, send a short
            note with your background and we will be in touch.
          </p>
          <Form
            type="Careers"
            fields={[
              ['name', 'Name*'],
              ['email', 'E-mail*', 'email'],
              ['phone', 'Phone*', 'tel'],
              ['address', 'Address*'],
              ['message', 'Personal Details', 'area'],
            ]}
          />
        </Reveal>
      </section>
    </>
  )
}
