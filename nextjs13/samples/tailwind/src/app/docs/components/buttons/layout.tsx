'use client'
import { ScrollSpyIndicator } from '@/app/components/internalComponents/ScrollSpyIndicator'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  variants: ReactNode
  outline: ReactNode
  sizes: ReactNode
  disabled: ReactNode
  tagbutton: ReactNode
}
export default function Layout({
  children,
  variants,
  outline,
  sizes,
  disabled,
  tagbutton,
}: Props) {
  return (
    <section className="grid grid-areas-docPagesXS lg:grid-cols-[4fr_1fr] lg:grid-areas-docPagesDefault">
      <div className="grid-in-intro">{children}</div>
      <ScrollSpyIndicator className="grid-in-rightSide" />
      <div className="overflow-hidden grid-in-content">
        {variants}
        {outline}
        {sizes}
        {disabled}
        {tagbutton}
      </div>
    </section>
  )
}
