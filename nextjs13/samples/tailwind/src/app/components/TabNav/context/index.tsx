import { ReactNode, createContext, useState } from 'react'

type TabNavContextProvider = {
  currentRoute: string
  goToRoute: (route: string) => void
}

type Props = {
  children: ReactNode
  initialRoute?: string
}

export const TabNavContextProvider = createContext({} as TabNavContextProvider)

export const TabNavContext = ({ children, initialRoute = '' }: Props) => {
  const [currentRoute, setRoute] = useState(initialRoute)

  const goToRoute = (route: string) => setRoute(route)

  return (
    <TabNavContextProvider.Provider
      value={{
        currentRoute,
        goToRoute,
      }}
    >
      {children}
    </TabNavContextProvider.Provider>
  )
}
