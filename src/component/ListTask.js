import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Donetask } from '../toolkit/TaskSlice';
import EditTask from './EditTask';
const ListTask = () => {
const list=useSelector(state=>state.task)
console.log(list);
const dispatch=useDispatch()


  return (
    <div>


{list.task.map((task)=> <div id={task.des}>

 

<Card>
      <Card.Header>TASKS</Card.Header>
      <Card.Body>
        <Card.Title>ID:{task.id}</Card.Title>
        <Card.Text>
      Decription: {task.description}
        </Card.Text>
        <Button onClick={()=>dispatch(Donetask(task.id))}  variant="primary">isDone</Button>
      </Card.Body>
    </Card>
 <EditTask element={task} />


</div>)}

    </div>
  )
}

export default ListTask