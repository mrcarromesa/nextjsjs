'use client'
import { ReactNode, useRef } from 'react'
import { useDropdown } from '../../context/DropdownContext'
import classNames from 'classnames'
import { useClickOutside } from '@/app/hooks/useClickOutside'

type DropdownListProps = {
  children: ReactNode
}
export function DropdownList({ children }: DropdownListProps) {
  const { isOpen, closeDropdown } = useDropdown()
  const dropDownListComponent = useRef<HTMLUListElement | null>(null)

  useClickOutside({
    component: dropDownListComponent,
    callback: closeDropdown,
  })

  return (
    <ul
      onClick={() => closeDropdown()}
      ref={dropDownListComponent}
      className={classNames(
        'absolute z-[999] my-1 min-w-[10rem] rounded-md border-x border-y border-solid border-gray-300 bg-white py-2 leading-6 text-gray-900 dark:bg-gray-900 dark:text-white',
        { hidden: !isOpen }
      )}
    >
      {children}
    </ul>
  )
}
