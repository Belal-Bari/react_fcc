import { createContext, useContext } from "react"

export const TodoContext = createContext({
    todo: {
        id:0,
        message:'',
        completed:false
    },
    addTodo: (todoMsg) => {},
    updateTodo: (id,newTodo) => {},
    deleteTodo: (id) => {},
    completedTodo: (id) => {}
})

export const TodoProvider = TodoContext.Provider

export function useTodo() {
    return useContext(TodoContext)
}