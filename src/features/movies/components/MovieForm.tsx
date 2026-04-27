import { useState } from "react"
import { useDispatch } from "react-redux"
import { addMovie, updateMovie } from "../movieSlice"
import MessageBox from "../../../app/MessageBox"
import type { MovieType } from "../types/movieType"
type MovieFormProps = {
    editing?: MovieType,
    setEditing?: React.Dispatch<React.SetStateAction<MovieType | null>>,
    setLoadForm?: React.Dispatch<React.SetStateAction<boolean>>,
}
export const MovieForm = ({editing, setEditing, setLoadForm}: MovieFormProps) => {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [rating, setRating] = useState(1)
    const [info, setInfo] = useState({status: false, message: ""})
    const[edited, setEdited] = useState(editing?.name ?? "")


    const showMessage = (msg: string) => {
        setInfo({status: true, message: msg})            
            setTimeout(()=>{
                setInfo({status: false, message: ''})
            }, 2000)
    }


    const handleSubmit = (event: React.SubmitEvent<HTMLElement>) => {
        event.preventDefault()
        if(!name && !editing?.id){
            showMessage('Type your Movie name')    
            return
        }


        dispatch(addMovie({name, rating}))
        showMessage('Successfully added movie')
        setName("")
        setRating(1)
        setLoadForm(false)
    }

    const handleUpdate = (e:React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()
         if(editing?.id){
            dispatch(updateMovie({id: editing.id, name:edited, rating}))
            showMessage('Updated successfully')
        }
       setEditing(null)
    }
    
  return (
    <>
    {
        editing?.id ? 
        <form className={`flex flex-col justify-center items-center`} onSubmit={handleUpdate}>
            {info.message && <MessageBox text = {info.message}/>}
            <label className="flex items-center">
                <input className="p-3 font-bold"
                placeholder="Type your movie name here" 
                value={edited} 
                onChange={(e)=> setEdited(e.target.value)}
                />
            </label>
            <select 
            className="mt-3 w-full p-3 rounded-md font-bold"
            value={rating} 
            onChange={(e)=> setRating(Number(e.target.value))}
            >
                {Array.from({length: 10}).map((_, index)=>(
                    <option key={index}>{index + 1}</option>
                ))}
            </select>
            <button className="btn btn-primary">Update</button>
        </form>
        :
    <form className={`flex flex-col justify-center items-center`} onSubmit={handleSubmit}>
        {info.message && <MessageBox text = {info.message}/>}
        <label className="flex items-center">
            <input className="p-3 font-bold"
            placeholder="Type your movie name here" 
            value={name} 
            onChange={(e)=> setName(e.target.value)}
            />
        </label>
        <select 
        className="mt-3 w-full p-3 rounded-md font-bold"
        value={rating} 
        onChange={(e)=> setRating(Number(e.target.value))}
        >
            {Array.from({length: 10}).map((_, index)=>(
                <option key={index}>{index + 1}</option>
            ))}
        </select>
        <button className="btn btn-primary">Add</button>
    </form>
    }
    </>
  )
}
