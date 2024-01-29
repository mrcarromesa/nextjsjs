import { ChangeEvent, ReactNode } from 'react'
import classNames from 'classnames'

type Props = {
  children: ReactNode
  className?: React.HTMLAttributes<HTMLElement>['className']
  type: 'radio' | 'checkbox'
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
} & React.AllHTMLAttributes<HTMLInputElement>

export const Input = ({
  children,
  type,
  className,
  checked,
  ...props
}: Props) => {
  return (
    <label
      className={classNames(className, 'cursor-pointer', {
        ['!active']: checked,
      })}
    >
      <input type={type} className="hidden" checked={checked} {...props} />
      <span>{children}</span>
    </label>
  )
}
