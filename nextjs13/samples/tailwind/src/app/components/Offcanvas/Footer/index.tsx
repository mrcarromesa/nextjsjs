import classNames from 'classnames'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: React.AllHTMLAttributes<HTMLElement>['className']
}
export const Footer = ({ children, className }: Props) => {
  return <footer className={classNames(className)}>{children}</footer>
}
