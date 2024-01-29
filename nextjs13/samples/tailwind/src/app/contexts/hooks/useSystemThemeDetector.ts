'use client'
import { useEffect, useState } from 'react'

export const useSystemThemeDetector = () => {
  const [theme, setTheme] = useState('auto')

  useEffect(() => {
    const handleThemeChange = (event: MediaQueryListEvent) => {
      setTheme(event.matches ? 'dark' : 'light')
    }

    const listener = window.matchMedia('(prefers-color-scheme: dark)')
    listener.addEventListener('change', handleThemeChange)

    setTheme(listener.matches ? 'dark' : 'light')

    return () => {
      listener.removeEventListener('change', handleThemeChange)
    }
  }, [])

  return {
    theme,
  }
}
