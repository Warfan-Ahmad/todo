import React from "react"; 
import AddTodo from "./AddTodo";
import ShowTodo from "./ShowTodo"

function TodoBoard()
{
    const [tasks, setTasks] = React.useState([]);
    const addTask = (task)=>
    {
        setTasks([...tasks,task]);
    }
    const removeTask = (text) =>{
        const currenttasks = tasks;
        const newTasks = currenttasks.filter((task)=> task !== text)
        setTasks(newTasks);
    }


return(
    <div>
        <AddTodo addTask = {addTask}/>
        <ShowTodo tasks = {tasks} removeTask = {removeTask}/>
    </div>
)
}

export default TodoBoard;