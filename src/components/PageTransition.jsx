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
  const outletRef = useRef(outlet)
  const locationRef = useRef(location)
  const pending = useRef(null)
  const [stage, setStage] = useState('enter')
  const [shown, setShown] = useState(() => ({
    path: location.pathname,
    node: outlet,
  }))

  outletRef.current = outlet
  locationRef.current = location

  // Capture the destination page while the current one is still exiting.
  if (location.pathname !== shownPath.current) {
    pending.current = {
      path: location.pathname,
      node: outlet,
      location,
    }
  }

  useEffect(() => {
    if (location.pathname === shownPath.current) return

    if (prefersReducedMotion()) {
      shownPath.current = location.pathname
      pending.current = null
      setShown({ path: location.pathname, node: outletRef.current })
      setStage('enter')
      scrollFor(locationRef.current)
      return
    }

    setStage((s) => (s === 'exit' ? s : 'exit'))
  }, [location.pathname])

  useEffect(() => {
    if (location.pathname !== shownPath.current) return
    scrollFor(location)
  }, [location.hash, location.pathname])

  function onAnimationEnd(e) {
    if (e.target !== e.currentTarget) return
    if (stage !== 'exit') return

    const next = pending.current || {
      path: locationRef.current.pathname,
      node: outletRef.current,
      location: locationRef.current,
    }

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
