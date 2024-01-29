import classNames from 'classnames'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: React.AllHTMLAttributes<HTMLElement>['className']
}

export const Header = ({ children, className }: Props) => {
  return (
    <header
      className={classNames('flex min-h-[3rem] items-center p-1', className)}
    >
      {children}
    </header>
  )
}
