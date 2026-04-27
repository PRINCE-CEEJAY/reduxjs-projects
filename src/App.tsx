import { MovieList } from "./features/movies/components/MovieList";

export default function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-zinc-500 to-zinc-300">
      <MovieList/>
    </div>
  )
}
