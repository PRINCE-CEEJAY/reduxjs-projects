export type MovieType = {
    id: number,
    name: string,
    rating: number,
    watched: boolean,
}

export type MoviesType = {
    movies: MovieType[]
}