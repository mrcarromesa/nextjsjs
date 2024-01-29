import { ReactElement, ReactNode, cloneElement, Children } from 'react'
import { Header } from './Header'
import { useAccordion } from '../context'
// import { AccordionContextProvider } from '../context'

type Props = {
  children: ReactNode
  eventKey: string
}

export const AccordionItem = ({ children, eventKey }: Props) => {
  const { toggleActive } = useAccordion()

  return (
    <>
      {Children.map(children, (child) => {
        let additionalProps = {}
        if ((child as ReactElement).type === Header) {
          additionalProps = { onToggleActive: toggleActive }
        }
        return cloneElement(child as ReactElement, {
          eventKey,
          ...additionalProps,
        })
      })}
    </>
  )
}
