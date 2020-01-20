import React, {createContext, useReducer} from "react";
import todoReducer from "../reducer/todo.reducer";
import useTodoState from "../hooks/useTodoState"

const defaultTodos = [
    {id: 1, task: "Wash the clothes", completed: false},
    {id: 2, task: "Iron the clothes", completed: true},
]




export const TodosContext = createContext();

export function TodosProvider (props){
 const [todos, dispatch] = useReducer(todoReducer, defaultTodos) 
    return (
        <TodosContext.Provider value={{todos, dispatch}}>
            {props.children}
        </TodosContext.Provider>
    )
}