import { createSlice } from "@reduxjs/toolkit";
import { type Todos } from "./types/todoTypes";

const initialState: Todos = {
    todos: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            const {title} = action.payload

            state.todos.push({
                id: Date.now(),
                title,
                completed: false
            })
        },

        updateTodo: (state, action)=>{
            const todo = state.todos.find(t => t.id == action.payload.id)
            if(todo){
                todo.title = action.payload.title
            }
        },

        removeTodo: (state, action)=>{
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)

        },

        toggleStatus: (state, action)=>{
            const todo = state.todos.find(t => t.id === action.payload.id)
            if(todo){
                todo.completed = !todo.completed
            }
        },
    },
})

export const {addTodo, updateTodo, removeTodo, toggleStatus} = todoSlice.actions
export default todoSlice.reducer