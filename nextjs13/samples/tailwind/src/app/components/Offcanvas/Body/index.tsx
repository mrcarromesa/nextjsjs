import classNames from 'classnames'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: React.AllHTMLAttributes<HTMLElement>['className']
}

export const Body = ({ children, className }: Props) => {
  return <div className={classNames('flex-1', className)}>{children}</div>
}
