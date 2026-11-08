import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Carousel({ slides, interval = 7000 }) {
  const n = slides.length
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const startX = useRef(null)
  const dragged = useRef(false)
  const root = useRef(null)
  const go = useCallback((delta) => setIndex((v) => (v + delta + n) % n), [n])

  useEffect(() => {
    if (paused || n < 2) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => go(1), interval)
    return () => clearInterval(id)
  }, [paused, n, interval, go])

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

  return (
    <section
      ref={root}
      className="carousel"
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Firm portfolio"
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
      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{ transform: `translate3d(-${index * 100}%, 0, 0)` }}
        >
          {slides.map((s, i) => (
            <article
              key={s.id}
              className={`carousel-slide${i === index ? ' is-active' : ''}`}
              aria-hidden={i !== index}
            >
              <img
                src={s.image}
                alt={s.alt}
                className="carousel-img"
                draggable="false"
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
              <div className="carousel-shade" />
              <div className="container carousel-copy">
                <p className="eyebrow">{s.kicker}</p>
                <h1>{s.title}</h1>
                <p className="lead">{s.text}</p>
                <div className="hero-actions">
                  <Link className="btn" to={s.cta.to} tabIndex={i === index ? 0 : -1}>
                    {s.cta.label}
                  </Link>
                  <Link className="btn ghost" to={s.ghost.to} tabIndex={i === index ? 0 : -1}>
                    {s.ghost.label}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <p className="sr-only" aria-live="polite">
        Slide {index + 1} of {n}: {slides[index]?.title}
      </p>
      <button
        type="button"
        className="carousel-nav prev"
        aria-label="Previous slide"
        onClick={() => go(-1)}
      >
        <span aria-hidden="true">‹</span>
      </button>
      <button
        type="button"
        className="carousel-nav next"
        aria-label="Next slide"
        onClick={() => go(1)}
      >
        <span aria-hidden="true">›</span>
      </button>
      <div className="carousel-dots" role="tablist" aria-label="Slide pagination">
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
      <div className="carousel-progress" aria-hidden="true">
        <span
          key={index}
          className={paused ? 'progress-fill paused' : 'progress-fill'}
          style={{ animationDuration: `${interval}ms` }}
        />
      </div>
    </section>
  )
}
