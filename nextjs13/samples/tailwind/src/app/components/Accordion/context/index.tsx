import { ReactNode, createContext, useContext, useState } from 'react'

type AccordionContextProps = {
  active: Record<string, boolean>
  flush: boolean
  withIndicator?: boolean
  indicatorPosition?: 'start' | 'end'
  toggleActive: (eventKey: string) => void
}

const AccordionContext = createContext({} as AccordionContextProps)

type AccordionContextProviderProps = {
  alwaysOpen?: boolean
  children: ReactNode
  withIndicator?: boolean
  indicatorPosition?: 'start' | 'end'
  flush?: boolean
  defaultActiveKey?: string
}

export const AccordionContextProvider = ({
  children,
  alwaysOpen = false,
  flush = false,
  withIndicator = true,
  indicatorPosition = 'end',
  defaultActiveKey,
}: AccordionContextProviderProps) => {
  const [active, setActive] = useState<Record<string, boolean>>(
    defaultActiveKey ? { [defaultActiveKey]: true } : {}
  )

  const toggleActive = (eventKey: string) =>
    setActive((current) => {
      const currentEventKeyIsActive = current.hasOwnProperty(eventKey)
        ? !current[eventKey]
        : true

      return alwaysOpen
        ? { ...current, ...{ [eventKey]: currentEventKeyIsActive } }
        : { [eventKey]: currentEventKeyIsActive }
    })

  return (
    <AccordionContext.Provider
      value={{
        active,
        toggleActive,
        flush,
        withIndicator,
        indicatorPosition,
      }}
    >
      {children}
    </AccordionContext.Provider>
  )
}

export const useAccordion = () => {
  return useContext(AccordionContext)
}
