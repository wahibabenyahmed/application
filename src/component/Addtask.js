import React , {useState} from 'react'
import { useDispatch } from 'react-redux'
import { Addtask} from '../toolkit/TaskSlice'

const AddTask = () => {
   

    let [descriptionn,setDescription]=useState()

 const dispatch=useDispatch()

    const handelData=()=>{
        dispatch(Addtask({
        id:Date.now(),
         isDone:false,
        description:descriptionn,
      
       
       }))
}
  return (
    <div>
  
    description: <input type='text' onChange= {(event)=>setDescription(event.target.value) } />
  
    
    <button onClick={handelData}>Add</button>
    </div>
  )
}


export default AddTask