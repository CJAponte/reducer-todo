import React from 'react'
import ToDoItem from './ToDoItem'
import { Button } from 'semantic-ui-react'
import './todo.css'

const ToDo =  props => {
    return(
        <div className="toDoItemContainer">
            {props.todoitems.map(item => (
                <ToDoItem key={item.id} item={item} toggleItem={props.toggleItem} />
            ))}
            <Button color="red" onClick={props.clearCompleted} style={{marginTop: '15px', marginBottom: '-45px'}}>Clear Completed</Button>
        </div>
    )
}

export default ToDo