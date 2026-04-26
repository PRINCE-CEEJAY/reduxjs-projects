import { createSlice } from "@reduxjs/toolkit";
import { type MoviesType } from "./types/movieType";

const initialState:MoviesType = {
        movies: []
    }

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovie: (state, action) => {
            const {name, rating, watched} = action.payload            
            state.movies.push({                
                id: Date.now(),
                name,
                rating,
                watched
            })
        },

        removeMovie: (state, action) => {
            state.movies = state.movies.filter(movie => movie.id !== action.payload.id)
         }, 

       updateMovie: (state, action) => {
            const movie = state.movies.find(m => m.id === action.payload.id)
            if (movie) {
                movie.name = action.payload.name ?? movie.name
                movie.rating = action.payload.rating ?? movie.rating
            }
        },

         toggleWatched: (state, action) => {
            state.movies = state.movies.map(movie => movie.id === action.payload.id ? {...movie, watched: !movie.watched}: movie)
         }
    }
})

export const { addMovie, removeMovie, updateMovie, toggleWatched } = movieSlice.actions
export default movieSlice.reducer