import classNames from 'classnames'
import { ReactNode, JSX, ElementType } from 'react'

type Elements = 'ul' | 'ol' | 'div'

type ElementProps<T extends keyof JSX.IntrinsicElements> =
  JSX.IntrinsicElements[T]

type Props<T extends Elements> = {
  children: ReactNode
  asElement?: Elements
  flush?: boolean
} & ElementProps<T>

export function Root<T extends Elements>({
  children,
  asElement = 'ul',
  className,
  flush = false,
  ...rest
}: Props<T>) {
  const Element = asElement as ElementType
  return (
    <Element
      className={classNames(
        ' [&_*]:border-gray-500 [&_*]:text-left [&_>*+*]:!rounded-none [&_>*+*]:border-t-0 [&_>*:first-child]:rounded-b-none [&_>*:first-child]:rounded-t-md [&_>*:last-child]:!rounded-b-md [&_>li:disabled]:text-gray-600',
        {
          ['[&_*]:border-x [&_*]:border-y']: !flush,
          ['[&_>*+*]:border-y [&_>*:first-child]:border-y [&_>*:first-child]:border-t-0 [&_>*:last-child]:border-b-0']:
            flush,
        },
        className
      )}
      {...rest}
    >
      {children}
    </Element>
  )
}
