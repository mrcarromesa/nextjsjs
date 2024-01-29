import classNames from 'classnames'
import Link from 'next/link'
import { ElementType, Fragment, ReactNode } from 'react'
import { useTabNav } from '../context/hooks/useTabNavRoute'

type ButtonComponentType = {
  asComponent?: 'button'
} & Omit<React.AllHTMLAttributes<HTMLButtonElement>, 'size'>

type FragmentComponentType = {
  asComponent?: 'span'
} & React.AllHTMLAttributes<HTMLSpanElement>

type LinkComponentType = {
  asComponent?: typeof Link
} & React.AllHTMLAttributes<HTMLAnchorElement>

type AnchorComponentType = {
  asComponent?: 'a'
} & React.AllHTMLAttributes<HTMLAnchorElement>

type DefaultProps = {
  children: ReactNode
  route: string
}

type Props = DefaultProps &
  (
    | ButtonComponentType
    | LinkComponentType
    | AnchorComponentType
    | FragmentComponentType
  )

export const Item = ({
  children,
  route,
  asComponent = 'a',
  ...props
}: Props) => {
  const { currentRoute, goToRoute } = useTabNav()

  const active = currentRoute === route
  const Component = active ? Fragment : (asComponent as ElementType)
  return (
    <li
      className={classNames(
        'relative before:absolute before:inset-0 before:border-gray-500 [&>*]:relative [&>*]:z-30 [&>*]:block [&>*]:h-full [&>*]:w-full [&>*]:p-3 [&>*]:text-blue-500',
        {
          ['!dark:text-white -mb-2 p-3 before:rounded-t-md before:border-x before:border-b-8 before:border-t before:border-gray-500']:
            active,
          ['cursor-pointer hover:before:rounded-t-md hover:before:border-x hover:before:border-t hover:before:border-gray-300']:
            !active,
        }
      )}
      onClick={() => goToRoute(route)}
    >
      <Component {...props}>{children}</Component>
    </li>
  )
}
