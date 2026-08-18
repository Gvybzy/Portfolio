import { useEffect } from 'react'

export default function PageMeta({ title, description }) {
  useEffect(() => {
    document.title = `${title} | BSIT Student & Aspiring Developer`
    const meta = document.querySelector('meta[name="description"]')
    if (meta && description) meta.setAttribute('content', description)
    const theme = document.querySelector('meta[name="theme-color"]')
    if (theme) theme.setAttribute('content', '#f8fafc')
    return () => { document.title = 'BSIT Student & Aspiring Developer' }
  }, [title, description])
  return null
}
