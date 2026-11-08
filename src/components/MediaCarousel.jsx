import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function MediaCarousel({
  slides,
  interval = 6500,
  label = 'Gallery',
  autoplay = true,
  variant = 'panel',
}) {
  const n = slides.length
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const startX = useRef(null)
  const dragged = useRef(false)
  const root = useRef(null)
  const go = useCallback((delta) => setIndex((v) => (v + delta + n) % n), [n])

  useEffect(() => {
    if (!autoplay || paused || n < 2) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => go(1), interval)
    return () => clearInterval(id)
  }, [autoplay, paused, n, interval, go])

  useEffect(() => {
    const el = root.current
    if (!el) return
    const onKey = (e) => {
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    el.addEventListener('keydown', onKey)
    return () => el.removeEventListener('keydown', onKey)
  }, [go])

  function pointerDown(e) {
    if (e.pointerType === 'mouse' && e.button !== 0) return
    startX.current = e.clientX
    dragged.current = false
  }
  function pointerMove(e) {
    if (startX.current == null) return
    if (Math.abs(e.clientX - startX.current) > 12) dragged.current = true
  }
  function pointerUp(e) {
    if (startX.current == null) return
    const dx = e.clientX - startX.current
    startX.current = null
    if (Math.abs(dx) > 48) go(dx < 0 ? 1 : -1)
  }
  function blockClickIfDragged(e) {
    if (dragged.current) {
      e.preventDefault()
      e.stopPropagation()
      dragged.current = false
    }
  }

  if (!n) return null
  const active = slides[index]

  return (
    <section
      ref={root}
      className={`media-carousel media-carousel--${variant}`}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false)
      }}
      onPointerDown={pointerDown}
      onPointerMove={pointerMove}
      onPointerUp={pointerUp}
      onPointerCancel={() => {
        startX.current = null
      }}
      onClickCapture={blockClickIfDragged}
    >
      <div className="media-carousel-viewport">
        <div
          className="media-carousel-track"
          style={{ transform: `translate3d(-${index * 100}%, 0, 0)` }}
        >
          {slides.map((s, i) => (
            <article
              key={s.id}
              className={`media-slide${i === index ? ' is-active' : ''}`}
              aria-hidden={i !== index}
            >
              <div className="media-visual">
                <img
                  src={s.image}
                  alt={s.alt}
                  draggable="false"
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              </div>
              <div className="media-copy">
                {s.kicker && <p className="kicker">{s.kicker}</p>}
                <h3>{s.title}</h3>
                {s.text && <p className="muted">{s.text}</p>}
                {s.link && (
                  <Link
                    className="text-link"
                    to={s.link.to}
                    tabIndex={i === index ? 0 : -1}
                  >
                    {s.link.label}
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
      <p className="sr-only" aria-live="polite">
        Slide {index + 1} of {n}: {active?.title}
      </p>
      {n > 1 && (
        <>
          <button
            type="button"
            className="media-nav prev"
            aria-label="Previous slide"
            onClick={() => go(-1)}
          >
            <span aria-hidden="true">‹</span>
          </button>
          <button
            type="button"
            className="media-nav next"
            aria-label="Next slide"
            onClick={() => go(1)}
          >
            <span aria-hidden="true">›</span>
          </button>
          <div className="media-dots" role="tablist" aria-label={`${label} pagination`}>
            {slides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show slide ${i + 1}`}
                className={i === index ? 'dot on' : 'dot'}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </>
      )}
    </section>
  )
}
