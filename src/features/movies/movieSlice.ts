import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { type MoviesType, type MovieType } from "./types/movieType";

const initialState:MoviesType = {
        movies: [
            {
                id: Date.now(),
                name: 'Merlin',
                rating: 10,
                watched: true,
            },
        ]
    }

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovie: (state, action: PayloadAction<Omit<MovieType, "id">>) => {
            const {name, rating} = action.payload            
            state.movies.push({                
                id: Date.now(),
                name,
                rating,
                watched: false
            })
        },

        removeMovie: (state, action: PayloadAction<number>) => {
            state.movies = state.movies.filter(movie => movie.id !== action.payload)
         }, 

       updateMovie: (state, action: PayloadAction<MovieType>) => {
            const movie = state.movies.find(m => m.id === action.payload.id)
            if (movie) {
                movie.name = action.payload.name ?? movie.name,
                movie.rating = action.payload.rating ?? movie.rating
            }
        },

         toggleWatched: (state, action: PayloadAction<MovieType>) => {
            state.movies = state.movies.map(movie => movie.id === action.payload.id ? {...movie, watched: !movie.watched}: movie)
         }
    }
})

export const { addMovie, removeMovie, updateMovie, toggleWatched } = movieSlice.actions
export default movieSlice.reducer