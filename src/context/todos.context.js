import React, {createContext} from "react";
import useTodoState from "../hooks/useTodoState"

const defaultTodos = [
    {id: 1, task: "Wash the clothes", completed: false},
    {id: 2, task: "Iron the clothes", completed: true},
]


export const TodosContext = createContext();

export function TodosProvider (props){
    const todosStuff = useTodoState(defaultTodos)
    return (
        <TodosContext.Provider value={todosStuff}>
            {props.children}
        </TodosContext.Provider>
    )
}