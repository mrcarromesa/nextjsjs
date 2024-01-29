'use client'
import { ReactNode, createContext, useContext, useState } from 'react'

type DropdownContextProps = {
  isOpen: boolean
  closeDropdown: () => void
  toggleDropdown: () => void
}

export const DropdownContext = createContext({} as DropdownContextProps)

type DropdownProviderProps = {
  open?: boolean
  children: ReactNode
}

export const DropdownProvider = ({
  open = false,
  children,
}: DropdownProviderProps) => {
  const [isOpen, setIsOpen] = useState(open)

  const toggleDropdown = () => setIsOpen((current) => !current)
  const closeDropdown = () => setIsOpen(false)

  return (
    <DropdownContext.Provider
      value={{
        isOpen,
        toggleDropdown,
        closeDropdown,
      }}
    >
      {children}
    </DropdownContext.Provider>
  )
}

export const useDropdown = () => {
  return useContext(DropdownContext)
}
