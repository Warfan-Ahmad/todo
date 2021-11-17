import React from "react";


function ShowTodo(props)
{

    return(
        <div>
            {props.tasks && props.tasks.map((task,index)=>{
                return <p onClick = {() => props.removeTask(task)} key={index}>{task}</p>
            })}
        </div>
    )
}

export default ShowTodo