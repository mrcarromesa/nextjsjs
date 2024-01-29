import classNames from 'classnames'
import { HTMLAttributes, ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: HTMLAttributes<HTMLElement>['className']
}

export const Body = ({ children, className }: Props) => {
  return <div className={classNames(className, 'flex-1 p-4')}>{children}</div>
}
