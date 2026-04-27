import { useState } from 'react'
import { removeMovie } from '../movieSlice'
import type { MovieType } from '../types/movieType'
import { useDispatch } from 'react-redux'
import { MovieForm } from './MovieForm'

export default function MovieRow({movie}: {movie:MovieType}) {
  const dispatch = useDispatch()
  const [editing, setEditing] = useState<MovieType | null>(null)

  const handleDel = (id: number) => {
    dispatch(removeMovie(id))
  }

  const handleEdit = (data:MovieType) => {
    setEditing(data) 
    console.log(data.id)   
  }
  
  return (
    <>
    { editing ? 
    <tr>
      <td colSpan={5}>
      <MovieForm editing ={editing} setEditing={setEditing}/>
      </td>
    </tr>
    :
    <tr className='m-2 gap-2'>
        <td>{movie.id}</td>          
        <td>{movie.name}</td>          
        <td>{movie.rating}</td>          
        <td>Watched: {movie.watched ? 'Yes': 'Not Yet'}</td>
        <td>
          <button className='btn btn-primary' onClick={()=>handleEdit(movie)}>Edit</button>
          <button className='btn btn-secondary' onClick={()=>handleDel(movie.id)}>Delete</button>
        </td>
    </tr>
    }
    </>
  )
}
