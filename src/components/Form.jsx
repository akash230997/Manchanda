import { useState } from 'react'
export default function Form({ type, fields, label = 'Send message' }) {
  const [state, setState] = useState('idle')
  async function submit(e) {
    e.preventDefault()
    setState('sending')
    const data = Object.fromEntries(new FormData(e.target))
    data.type = type
    try {
      const r = await fetch('/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      setState((await r.json()).ok ? 'ok' : 'err')
    } catch {
      setState('err')
    }
  }
  if (state === 'ok')
    return <p className="notice">Thank you. Your message has been sent.</p>
  return (
    <form className="form" onSubmit={submit}>
      {fields.map(([name, text, kind]) => (
        <label key={name} className={kind === 'area' ? 'wide' : ''}>
          {text}
          {kind === 'area' ? (
            <textarea name={name} rows="6" required />
          ) : (
            <input name={name} type={kind || 'text'} required />
          )}
        </label>
      ))}
      <input
        name="website"
        tabIndex="-1"
        autoComplete="off"
        className="hp"
        aria-hidden="true"
      />
      <button className="btn" disabled={state === 'sending'}>
        {state === 'sending' ? 'Sending…' : label}
      </button>
      {state === 'err' && (
        <p className="notice err">Could not send. Please email us directly.</p>
      )}
    </form>
  )
}
