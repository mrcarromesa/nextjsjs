import classNames from 'classnames'
import { ReactNode, JSX, ElementType } from 'react'
import { Button as ButtonComponent } from '../../Button'

type InternalElements = React.ComponentPropsWithoutRef<typeof ButtonComponent>

type ElementProps<T extends keyof JSX.IntrinsicElements> =
  JSX.IntrinsicElements[T]

type DefaultProps = {
  children: ReactNode
  active?: boolean
}

type CommonComponentProps<T extends keyof JSX.IntrinsicElements> = {
  asElement?: T
} & ElementProps<T>

type SpecialComponentProps = {
  asElement?: typeof ButtonComponent
} & React.ComponentPropsWithoutRef<typeof ButtonComponent>

type ExtendComponent = keyof InternalElements | keyof JSX.IntrinsicElements

type Props<T extends ExtendComponent> = DefaultProps &
  (T extends keyof JSX.IntrinsicElements
    ? CommonComponentProps<T>
    : T extends keyof InternalElements
    ? SpecialComponentProps
    : never)

export function Item<T extends ExtendComponent>({
  children,
  active = false,
  asElement = 'li',
  className,
  ...rest
}: Props<T>) {
  const Element = asElement as ElementType

  return (
    <Element
      className={classNames(
        'block w-full px-4 py-2',
        {
          ['bg-primary-background text-primary-color dark:bg-primary-dark-background dark:text-primary-dark-color']:
            active,
        },
        className
      )}
      {...rest}
    >
      {children}
    </Element>
  )
}
