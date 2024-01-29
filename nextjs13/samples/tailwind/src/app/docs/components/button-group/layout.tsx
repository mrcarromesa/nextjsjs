'use client'
import { ScrollSpyIndicator } from '@/app/components/internalComponents/ScrollSpyIndicator'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  example: ReactNode
  checkbox: ReactNode
  size: ReactNode
  vertical: ReactNode
}
export default function Layout({
  children,
  example,
  checkbox,
  size,
  vertical,
}: Props) {
  return (
    <section className="grid grid-areas-docPagesXS lg:grid-cols-[4fr_1fr] lg:grid-areas-docPagesDefault">
      <div className="grid-in-intro">{children}</div>
      <ScrollSpyIndicator className="grid-in-rightSide" />
      <div className="overflow-hidden grid-in-content">
        {example}
        {checkbox}
        {size}
        {vertical}
      </div>
    </section>
  )
}
