import { useContext } from 'react'
import { TabNavContextProvider } from '../..'

export const useTabNav = () => {
  return useContext(TabNavContextProvider)
}
