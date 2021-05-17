import { createContext, useContext } from "react";

export const TodosDispatchContext = createContext()

export const useTodosDispatch = () => {
  const context = useContext(TodosDispatchContext)
  if (context === undefined) {
    throw new Error('You try to use TodosDispatchContext outside of his provider')
  }
  return context
}