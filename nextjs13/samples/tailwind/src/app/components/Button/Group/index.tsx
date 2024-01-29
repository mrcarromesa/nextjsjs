import classNames from 'classnames'
import { ReactNode } from 'react'

const sizeButton = {
  normal: '',
  large: '[&_button]:text-xl [&_button]:!p-4 [&_label]:text-xl [&_label]:!p-4',
  small: '[&_button]:text-sm [&_button]:!p-2 [&_label]:text-sm [&_label]:!p-2',
} as const

export type Props = {
  children: ReactNode
  size?: keyof typeof sizeButton
  vertical?: boolean
}

export const ButtonGroup = ({
  children,
  size = 'normal',
  vertical = false,
}: Props) => {
  return (
    <div
      className={classNames('inline-flex', sizeButton[size], {
        ['flex-col [&_>*+*:not(:last-child)]:!rounded-none [&_>*+*]:!rounded-t-none [&_>*+*]:!border-t-0 [&_>*:not(:last-child)]:rounded-b-none [&_>*]:first-of-type:rounded-t-md']:
          vertical,
        ['[&_*:not(:last-child)]:rounded-r-none [&_>*+*]:rounded-l-none [&_>*+*]:!border-l-0']:
          !vertical,
      })}
    >
      {children}
    </div>
  )
}
