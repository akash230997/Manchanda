import { useEffect } from 'react'
import { SITE_URL, site } from '../content'
export default function Seo({ title, description, path = '/' }) {
  useEffect(() => {
    const full = title
      ? `${title} | ${site.name}`
      : `${site.name} | ${site.tagline}, London & Mississauga`
    document.title = full
    const set = (sel, attr, val) => {
      const el = document.querySelector(sel)
      if (el) el.setAttribute(attr, val)
    }
    set('meta[name="description"]', 'content', description)
    set('meta[property="og:title"]', 'content', full)
    set('meta[property="og:description"]', 'content', description)
    set('meta[property="og:url"]', 'content', SITE_URL + path)
    set('link[rel="canonical"]', 'href', SITE_URL + path)
  }, [title, description, path])
  return null
}
