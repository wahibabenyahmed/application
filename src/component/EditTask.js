import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { editTask } from '../toolkit/TaskSlice'

const EditTask = ({element}) => {
    const [edited,setEdited]=useState()
  
    const dispatch=useDispatch()
    const handelEdit=()=>{
       dispatch(editTask({id:element.id,description:edited}))
    }
  return (
    <div>
      
    <input type='text' onChange={(e)=> setEdited(e.target.value)}/>  

<button onClick={handelEdit} >Edit Task</button>
    </div>
  )
}

export default EditTask