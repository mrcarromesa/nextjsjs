import classNames from 'classnames'
import { HTMLAttributes, ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: HTMLAttributes<HTMLElement>['className']
}

export const Footer = ({ children, className }: Props) => {
  return (
    <footer className={classNames(className, 'border-t border-gray-400 p-4')}>
      {children}
    </footer>
  )
}
