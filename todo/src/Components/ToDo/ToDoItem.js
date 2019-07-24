import React from 'react'
import './todo.css'

const ToDoItem = (props) => {
    return(
        <div className={`item${props.item.completed ? 'completed' : 'todoItem'}`} onClick={()=>{props.toggleItem(props.item.id)}}>
            <p>{props.item.name}</p>
        </div>
    )
}

export default ToDoItem