'use client'

import { useContext } from 'react'
import { Dropdown } from '../../Dropdown'
import { ThemeContext } from '@/app/contexts/Theme'

export function DropdownTheme() {
  const { setPreferredTheme, userThemePreference } = useContext(ThemeContext)
  return (
    <Dropdown.Root>
      <Dropdown.Button showIndicator>{userThemePreference}</Dropdown.Button>
      <Dropdown.List>
        <Dropdown.ListItem>
          <button
            type="button"
            className="w-full text-left"
            onClick={() => setPreferredTheme('auto')}
          >
            Auto
          </button>
        </Dropdown.ListItem>
        <Dropdown.ListItem>
          <button
            type="button"
            className="w-full text-left"
            onClick={() => setPreferredTheme('light')}
          >
            Light
          </button>
        </Dropdown.ListItem>
        <Dropdown.ListItem>
          <button
            type="button"
            className="w-full text-left"
            onClick={() => setPreferredTheme('dark')}
          >
            Dark
          </button>
        </Dropdown.ListItem>
      </Dropdown.List>
    </Dropdown.Root>
  )
}
