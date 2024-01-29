'use client'

import { CaretDown } from '@phosphor-icons/react'
import { useDropdown } from '../../context/DropdownContext'
import { Button } from '@/app/components/Button'
import classNames from 'classnames'

type DropdownButtonProps = {
  showIndicator?: boolean
} & React.ComponentPropsWithoutRef<typeof Button>

export function DropdownButton({
  showIndicator = false,
  children,
  className,
  ...rest
}: DropdownButtonProps) {
  const { isOpen, toggleDropdown } = useDropdown()

  return (
    <Button
      aria-expanded={isOpen}
      onClick={() => toggleDropdown()}
      className={classNames(
        'relative flex items-center justify-center text-left',
        className
      )}
      {...rest}
    >
      <span className="mr-auto">{children}</span>
      {showIndicator && (
        <CaretDown size={20} className={classNames({ ['ml-2']: !!children })} />
      )}
    </Button>
  )
}
