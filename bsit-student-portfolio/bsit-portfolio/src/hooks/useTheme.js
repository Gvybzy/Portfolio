import { useEffect, useState } from 'react'

const key = 'portfolio-theme'

export function useTheme() {
  const getInitial = () => {
    const saved = localStorage.getItem(key)
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  const [theme, setTheme] = useState(getInitial)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem(key, theme)
  }, [theme])

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => {
      if (!localStorage.getItem(key)) setTheme(media.matches ? 'dark' : 'light')
    }
    media.addEventListener?.('change', handler)
    return () => media.removeEventListener?.('change', handler)
  }, [])

  return { theme, setTheme, toggleTheme: () => setTheme(t => t === 'dark' ? 'light' : 'dark') }
}
