'use client'
import { ReactNode, createContext, useEffect, useState } from 'react'
import { useSystemThemeDetector } from '../hooks/useSystemThemeDetector'

type Themes = 'light' | 'dark' | 'auto'

type ThemeContextProps = {
  theme: 'light' | 'dark'
  userThemePreference: Themes
  setPreferredTheme: (theme: Themes) => void
}

type ThemeContextProviderProps = {
  children: ReactNode
}

export const ThemeContext = createContext({} as ThemeContextProps)

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<ThemeContextProps['theme']>('light')
  const [userThemePreference, setUserThemePreference] = useState<Themes>('auto')

  const { theme: systemTheme } = useSystemThemeDetector()

  useEffect(() => {
    if (userThemePreference !== 'auto') {
      return
    }

    setTheme(
      systemTheme === 'auto'
        ? 'light'
        : (systemTheme as ThemeContextProps['theme'])
    )
  }, [userThemePreference, systemTheme])

  useEffect(
    function changeHTMLClassTheme() {
      const htmlTag = document.documentElement
      htmlTag.classList.remove('auto')
      htmlTag.classList.remove('dark')
      htmlTag.classList.remove('light')
      htmlTag.classList.add(theme)
    },
    [theme]
  )

  const setPreferredTheme = (newTheme: Themes) => {
    setUserThemePreference(newTheme)
    setTheme(
      newTheme === 'auto'
        ? (systemTheme as ThemeContextProps['theme'])
        : (newTheme as ThemeContextProps['theme'])
    )
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        userThemePreference,
        setPreferredTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
