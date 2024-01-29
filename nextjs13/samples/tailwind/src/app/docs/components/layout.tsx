import { DropdownTheme } from '@/app/components/internalComponents/DropdownTheme'
import { ReactNode } from 'react'

import { AsideNavLinks } from '@/app/components/internalComponents/AsideNavLinks'
import { MenuOffCanvas } from '@/app/components/internalComponents/OffCanvas'

import styles from './styles.module.scss'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <header className="sticky left-0 top-0 z-20 flex h-16 w-full justify-between bg-violet-600 pr-5 pt-2">
        <div className="ml-4 mt-2 w-36 max-lg:visible lg:hidden">
          <MenuOffCanvas />
        </div>
        <div className="ml-auto">
          <DropdownTheme />
        </div>
        <div className={styles.indicator}></div>
      </header>
      <section className="mx-auto block max-w-7xl gap-5 px-12 pb-6 pt-6 lg:grid lg:w-full lg:grid-cols-[1fr_5fr] lg:px-0">
        <AsideNavLinks />
        {children}
      </section>
    </>
  )
}
