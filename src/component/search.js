import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { searchTask } from '../toolkit/TaskSlice'
const Search = () => {
    const [searched,setSearched]=useState()
    

    const dispatch=useDispatch()
    const handelsearch=()=>{
       
    }
  return (
    <div>
    <input type='text' onChange={(e)=> setSearched(e.target.value)}/>  

<button onClick={()=> dispatch(searchTask(Number(searched)))} >search</button>
    </div>
  )
}

export default Search