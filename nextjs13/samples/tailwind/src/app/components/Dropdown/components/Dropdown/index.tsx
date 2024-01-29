'use client'

import { ReactNode } from 'react'
import { DropdownProvider } from '../../context/DropdownContext'
import { DropdownContainer } from '../DropdownContainer'

type DropdownProps = {
  open?: boolean
  children: ReactNode
}
export function Dropdown({ children, open = false }: DropdownProps) {
  return (
    <DropdownProvider open={open}>
      <DropdownContainer>{children}</DropdownContainer>
    </DropdownProvider>
  )
}
