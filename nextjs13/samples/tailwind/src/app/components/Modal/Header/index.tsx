import classNames from 'classnames'
import { HTMLAttributes, ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: HTMLAttributes<HTMLElement>['className']
}

export const Header = ({ children, className }: Props) => {
  return (
    <header className={classNames(className, 'border-b border-gray-400 p-4')}>
      {children}
    </header>
  )
}
