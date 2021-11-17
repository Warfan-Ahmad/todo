import React from "react";
import style from "../App.module.css"
function AddTodo (props)
{
    const [task,setTask] = React.useState('');

    const onInputChange = (event) =>
    {
        setTask(event.target.value)
    } 

    const handleAddTask = () => 
    {
        props.addTask(task)
        setTask("");
    }

    return(
        <div>
            <input className = {style.addTaskInput} type="text" onChange = {onInputChange} value = {task} placeholder=
            "Enter the Task"></input>
            <button onClick = {handleAddTask} className={style.addButton}>Add Task</button>
        </div>
    )
}

export default AddTodo