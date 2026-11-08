import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { nav, site } from '../content'
import PageTransition from './PageTransition'

export default function Layout() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem('theme') === 'dark'
    } catch {
      return false
    }
  })
  const { pathname } = useLocation()
  useEffect(() => {
    setOpen(false)
  }, [pathname])
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', dark ? '#050505' : '#f7f7f8')
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light')
    } catch {}
  }, [dark])
  return (
    <>
      <header className="header">
        <div className="container bar">
          <Link to="/" className="brand">
            <strong>{site.name}</strong>
            <span>{site.tagline}</span>
          </Link>
          <nav className={open ? 'nav open' : 'nav'} aria-label="Main">
            {nav.map(([to, label]) => (
              <NavLink key={to} to={to} end={to === '/'}>
                {label}
              </NavLink>
            ))}
          </nav>
          <button
            className="icon theme-toggle"
            onClick={() => setDark(!dark)}
            aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
            title={dark ? 'Light theme' : 'Dark theme'}
          >
            {dark ? (
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <circle cx="12" cy="12" r="4" fill="currentColor" />
                <path
                  d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path
                  d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5z"
                  fill="currentColor"
                />
              </svg>
            )}
          </button>
          <button
            className="icon menu"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </header>
      <main>
        <PageTransition />
      </main>
      <footer className="footer">
        <div className="container foot-grid">
          <div>
            <p className="brand-mini">
              <strong>{site.name}</strong>
              <span>{site.tagline}</span>
            </p>
            <p className="muted">
              Established {site.founded}. Technical knowledge and service quality, with a
              focus on personal relationships.
            </p>
          </div>
          <nav aria-label="Footer">
            {nav.map(([to, label]) => (
              <Link key={to} to={to}>
                {label}
              </Link>
            ))}
          </nav>
          <div>
            <p>{site.address}</p>
            <p>{site.phone}</p>
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
        </div>
        <div className="container foot-base">
          <p>
            © {new Date().getFullYear()} {site.name}, {site.tagline}.
          </p>
        </div>
      </footer>
    </>
  )
}
