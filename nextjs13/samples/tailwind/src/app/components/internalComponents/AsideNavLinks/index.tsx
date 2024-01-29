'use client'
import classNames from 'classnames'
// import { headers } from 'next/headers'
import Link from 'next/link'
import { OffCanvas } from '../OffCanvas'
import { usePathname } from 'next/navigation'
import styles from './styles.module.scss'

const linksDoc = [
  {
    title: 'Accordion',
    href: '/docs/components/accordion',
  },
  {
    title: 'Alerts',
    href: '/docs/components/alert',
  },
  {
    title: 'Badge',
    href: '/docs/components/badge',
  },
  {
    title: 'Breadcrumb',
    href: '/docs/components/breadcrumb',
  },
  {
    title: 'Buttons',
    href: '/docs/components/buttons',
  },
  {
    title: 'Button Group',
    href: '/docs/components/button-group',
  },
  {
    title: 'Cards',
    href: '/docs/components/card',
  },
  {
    title: 'Carousel',
    href: '/docs/components/carousel',
  },
  {
    title: 'Dropdown',
    href: '/docs/components/dropdown',
  },
  {
    title: 'ListGroup',
    href: '/docs/components/list-group',
  },
  {
    title: 'Modal',
    href: '/docs/components/modal',
  },
  {
    title: 'Navs & Tabs',
    href: '/docs/components/navs-and-tabs',
  },
  {
    title: 'OffCanvas',
    href: '/docs/components/offcanvas',
  },
  {
    title: 'Pagination',
    href: '/docs/components/pagination',
  },
  {
    title: 'Placeholders',
    href: '/docs/components/placeholders',
  },
  {
    title: 'Popover',
    href: '/docs/components/popover',
  },
  {
    title: 'Progress',
    href: '/docs/components/progress',
  },
  {
    title: 'Tooltips',
    href: '/docs/components/tooltip',
  },
]

export function AsideNavLinks() {
  // const headersList = headers()
  // const pathname = headersList.get('x-invoke-path') || ''

  const pathname = usePathname()

  return (
    <aside
      className={classNames(
        styles.container,
        'absolute left-0 top-16 z-[99] h-[calc(100vh-4rem)] min-w-fit overflow-auto break-words p-8 pt-2 lg:sticky lg:z-10 '
      )}
    >
      <OffCanvas>
        <nav>
          <ul className="max-lg:columns-2">
            <li className="break-inside-avoid">
              <strong className="text-base">Theme</strong>
              <ul className="ml-5 text-sm"></ul>
            </li>
            <li className="break-inside-avoid">
              <strong className="text-base">Components</strong>
              <ul className="ml-5 text-sm">
                {linksDoc.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={classNames(
                        'mb-1 inline-block rounded p-2 hover:bg-pink-400/20 dark:hover:bg-violet-500',
                        {
                          [classNames(`bg-pink-400/30 dark:bg-violet-500`)]:
                            pathname === link.href,
                        }
                      )}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </OffCanvas>
    </aside>
  )
}
