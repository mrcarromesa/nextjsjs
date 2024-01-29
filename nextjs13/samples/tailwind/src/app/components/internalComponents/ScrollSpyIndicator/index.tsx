'use client'
import { HTMLAttributes, useCallback, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'

type LinksAnchor = {
  title: string
  hash: string
}

type Props = {
  className?: HTMLAttributes<HTMLElement>['className']
}

export const ScrollSpyIndicator = ({ className }: Props) => {
  const asideRef = useRef<HTMLElement | null>(null)
  const allIds = useRef<Record<string, unknown>>({})
  const [activeItem, setActiveItem] = useState('')
  const [items, setItems] = useState<LinksAnchor[]>([])

  useEffect(() => {
    const h2 = Array.from(document.querySelectorAll('h2[id]'))
    setItems(
      h2.map((item) => ({
        title: item.childNodes[0].textContent,
        hash: item.id,
      })) as LinksAnchor[]
    )
  }, [])

  useEffect(() => {
    if (!asideRef.current) {
      return
    }

    asideRef.current
      .querySelectorAll('a')
      .forEach(
        (item) =>
          (allIds.current[String(item.getAttribute('href')?.replace('#', ''))] =
            '')
      )
  }, [items])

  function isElementInViewport(el: HTMLElement) {
    const rect = el.getBoundingClientRect()

    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const windowViewPortBottom = scrollTop + windowHeight
    const elementTop = rect.top + scrollTop

    return elementTop <= windowViewPortBottom
  }

  const activeItemLink = useCallback(() => {
    setActiveItem('')
    let activeItem = ''

    if (Object.keys(allIds.current).length === 0) {
      return
    }

    activeItem = Object.keys(allIds.current)[0]

    for (const id of Object.keys(allIds.current)) {
      const element = document.getElementById(id)

      if (element && isElementInViewport(element as HTMLElement)) {
        activeItem = id
      }
    }

    setActiveItem(activeItem)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      activeItemLink()
    }

    activeItemLink()

    document.addEventListener('scroll', onScroll)

    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [activeItemLink, items])

  return (
    <aside
      ref={asideRef}
      className={classNames(
        'relative right-0 top-0 z-[2] h-fit w-full max-w-[18.75rem] pl-8 pt-2 lg:sticky lg:top-16',
        className
      )}
    >
      <strong>On this page</strong>
      <nav className="mt-1">
        <ul>
          {items.map((item) => (
            <li key={item.hash}>
              <a
                href={`#${item.hash}`}
                className={`block border-l-2 border-transparent py-[0.125rem] pl-3 text-xs hover:border-l-2 hover:border-gray-400 hover:text-gray-400 ${
                  activeItem === item.hash && '!border-gray-500 text-gray-500'
                }`}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
