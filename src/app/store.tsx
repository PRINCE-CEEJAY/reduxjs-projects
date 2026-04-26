import { configureStore } from "@reduxjs/toolkit";
import  movieReducer  from "../features/movies/movieSlice";
import todoReducer from "../features/todo/todoSlice"

const store = configureStore({
    reducer: {
        movies: movieReducer,
        todos: todoReducer,
    }
})

export default store;