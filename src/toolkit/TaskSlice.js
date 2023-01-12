import {createSlice} from "@reduxjs/toolkit"
import { tasks } from "../component/Task"
const initialState={
task: tasks}
const TaskSlice = createSlice({
    name:'TaskSlice',
    initialState,
reducers:{
    Addtask:(state,action)=>{
   state.task.push(action.payload)
  },
Donetask:(state,action)=> {
state.task.map(el=>(el.id===action.payload)? el.isDone= !el.isDone: null )

},

searchTask:(state,action)=>{

  return {
    ...state.task,
    task:[...state.task].filter((el)=>el.id === action.payload)
  }
},
editTask: (state,action)=>{
  state.task.map((el)=>{

    if(el.id===action.payload.id){
      el.description=action.payload.description
    }
  }
  )

}


}})


export const {Addtask,Donetask,searchTask,editTask}=TaskSlice.actions
export default TaskSlice.reducer