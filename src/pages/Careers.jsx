import Seo from '../components/Seo'
import Form from '../components/Form'
import Reveal from '../components/Reveal'

export default function Careers() {
  return (
    <>
      <Seo
        title="Careers"
        description="We are hiring Articles and professionals looking for careers, especially in the indirect tax domain."
        path="/careers"
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Join the practice</p>
          <h1>Careers</h1>
          <p className="lead">
            We are hiring Articles and professionals, especially in the indirect tax
            domain.
          </p>
        </div>
      </section>
      <section className="container section narrow">
        <Reveal>
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
