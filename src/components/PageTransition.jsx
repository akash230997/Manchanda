import { useEffect, useRef, useState } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'

function prefersReducedMotion() {
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  } catch {
    return false
  }
}

function scrollFor(location) {
  if (!location.hash) {
    window.scrollTo(0, 0)
    return
  }
  requestAnimationFrame(() => {
    document.querySelector(location.hash)?.scrollIntoView()
  })
}

export default function PageTransition() {
  const location = useLocation()
  const outlet = useOutlet()
  const shownPath = useRef(location.pathname)
  const pending = useRef(null)
  const [stage, setStage] = useState('enter')
  const [shown, setShown] = useState({
    path: location.pathname,
    node: outlet,
  })

  // Keep the latest destination ready while the current page exits.
  if (location.pathname !== shownPath.current) {
    pending.current = { path: location.pathname, node: outlet, location }
  } else {
    pending.current = null
  }

  useEffect(() => {
    if (location.pathname === shownPath.current) {
      setShown({ path: location.pathname, node: outlet })
      return
    }

    if (prefersReducedMotion()) {
      shownPath.current = location.pathname
      pending.current = null
      setShown({ path: location.pathname, node: outlet })
      setStage('enter')
      scrollFor(location)
      return
    }

    setStage((s) => (s === 'exit' ? s : 'exit'))
  }, [location.pathname, outlet])

  useEffect(() => {
    if (location.pathname !== shownPath.current) return
    scrollFor(location)
  }, [location.hash, location.pathname])

  function onAnimationEnd(e) {
    if (e.target !== e.currentTarget) return
    if (stage !== 'exit') return

    const next = pending.current
    if (!next) return

    shownPath.current = next.path
    pending.current = null
    setShown({ path: next.path, node: next.node })
    setStage('enter')
    scrollFor(next.location)
  }

  return (
    <div className={`page page-${stage}`} onAnimationEnd={onAnimationEnd}>
      <div key={shown.path} className="page-surface">
        {shown.node}
      </div>
    </div>
  )
}
