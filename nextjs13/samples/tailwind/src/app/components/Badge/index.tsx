import classNames from 'classnames'
import { HTMLAttributes, ReactNode } from 'react'

const variations = {
  primary: 'badge-primary',
  secondary: 'badge-secondary',
  success: 'badge-success',
  danger: 'badge-danger',
  warning: 'badge-warning',
  info: 'badge-info',
  light: 'badge-light',
  dark: 'badge-dark',
} as const

type Props = {
  children?: ReactNode
  variation?: keyof typeof variations
  className?: HTMLAttributes<HTMLElement>['className']
  pill?: boolean
}

export const Badge = ({
  children,
  variation = 'primary',
  className,
  pill = false,
}: Props) => {
  return (
    <span
      className={classNames(
        'relative top-[-2px] min-h-[20px] min-w-[20px] whitespace-nowrap rounded px-2 py-2 align-baseline text-[0.5em]',
        variations[variation],
        { ['rounded-xl py-1']: pill },
        className
      )}
    >
      {children}
    </span>
  )
}
