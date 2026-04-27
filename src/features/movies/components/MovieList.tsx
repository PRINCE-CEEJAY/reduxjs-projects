import { MovieForm } from './MovieForm'
import { useSelector } from 'react-redux'
import {type MovieType } from '../types/movieType'
import MovieRow from './MovieRow'
import { useState } from 'react'
import { selectMovies } from '../movieSelectors'

export const MovieList = () => {
  const movieData:MovieType[] = useSelector(selectMovies)
  const[loadForm, setLoadForm] = useState(false)

  return (
    <div className='flex flex-col justify-cente items-center w-full'>

      <h1 className='underline font-bold text-3xl p-4 bg-gradient-to-r from-rose-600 via-yellow-700 to-rose-800 text-transparent bg-clip-text rounded-full'> MOVIE HOMEPAGE </h1>
        
        {
          loadForm ? <MovieForm setLoadForm = {setLoadForm}/>:
          <button onClick={()=> setLoadForm(prev=>!prev)} className='btn'>Add Movie</button>
        }

      <table className='table-zebra table-pin-rows max-w-[800px] shadow-lg m-3'> 
        <thead>  
          <tr className='w-full bg-gradient-to-t from-red-800 via-yellow-800 to-red-600 text-transparent bg-clip-text font-bold'>
          {
            Object.keys(movieData[0] ?? 0).map(heading=> (
                <th key={heading} >{heading.toUpperCase()} </th>
              ))
            }    
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>   
        <tbody>      
          { movieData.map((movie) => (
            <MovieRow movie = {movie} key={movie.id} />
          ))}     
        </tbody>            
      </table>
    </div>
  )
}
