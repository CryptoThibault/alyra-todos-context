import { createContext, useContext } from "react"

export const DarkModeContext = createContext()

export const useDarkMode = () => {
  const context = useContext(DarkModeContext)
  if (context === undefined) {
    throw new Error('You try to use DarkModeContext outside of his provider')
  }
  return context
}