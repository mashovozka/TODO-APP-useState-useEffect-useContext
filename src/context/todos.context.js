import React, {createContext} from "react";
import {useLocalStorageReducer} from "../hooks/useLocalStorageReducer";
import todoReducer from "../reducer/todo.reducer.js"

const defaultTodos = [
    {id: 1, task: "Wash the clothes", completed: false},
    {id: 2, task: "Iron the clothes", completed: true},
]




export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider (props){
 const [todos, dispatch] = useLocalStorageReducer(
     "todos", defaultTodos, todoReducer
 )
    return (
        <TodosContext.Provider value={todos}>
          <DispatchContext.Provider value={dispatch}>      
            {props.children}
          </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}