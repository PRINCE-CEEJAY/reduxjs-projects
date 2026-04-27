export type MovieType = {
    id: number,
    name: string,
    rating: number,
    watched: boolean | string,
}

export type MoviesType = {
    movies: MovieType[]
}