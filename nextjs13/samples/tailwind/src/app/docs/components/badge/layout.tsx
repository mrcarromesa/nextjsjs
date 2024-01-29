'use client'
import { ScrollSpyIndicator } from '@/app/components/internalComponents/ScrollSpyIndicator'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  examples: ReactNode
  buttons: ReactNode
  pill: ReactNode
}
export default function Layout({ children, examples, buttons, pill }: Props) {
  return (
    <section className="grid grid-areas-docPagesXS lg:grid-cols-[4fr_1fr] lg:grid-areas-docPagesDefault">
      <div className="grid-in-intro">{children}</div>
      <ScrollSpyIndicator className="grid-in-rightSide" />
      <div className="overflow-hidden grid-in-content">
        {examples}
        {buttons}
        {pill}
      </div>
    </section>
  )
}
