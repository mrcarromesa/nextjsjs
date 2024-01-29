import Link from 'next/link'
import { ElementType, ReactNode } from 'react'

type InactiveProps = {
  active?: false
  href: string
  linkComponentType?: 'a' | typeof Link
} & React.AllHTMLAttributes<HTMLAnchorElement>

type ActiveProps = {
  active: true
}

type Props = {
  children: ReactNode
} & (InactiveProps | ActiveProps)

export const Item = ({ children, active = false, ...rest }: Props) => {
  const { linkComponentType = 'a' } = (rest as InactiveProps) || {
    linkComponentType: 'a',
  }
  const LinkComponentType = linkComponentType as ElementType
  return (
    <>
      {active ? (
        <li
          aria-current="page"
          className="list-item pl-2 before:float-left  before:pr-2 before:content-['/'] first-of-type:pl-0  first-of-type:before:pr-0 first-of-type:before:content-['']"
        >
          {children}
        </li>
      ) : (
        <li
          className="list-item pl-2 before:float-left before:pr-2 before:content-['/'] 
        first-of-type:pl-0 first-of-type:before:pr-0 first-of-type:before:content-['']"
        >
          <LinkComponentType
            className="text-link-color hover:text-link-hover-color"
            {...rest}
          >
            {children}
          </LinkComponentType>
        </li>
      )}
    </>
  )
}
