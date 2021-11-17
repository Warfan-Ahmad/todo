import React from "react";
import style from "./App.module.css"
import TodoBoard from "./components/TodoBoard";

function App(){

  return(
    <div className = {style.todo}>
      <TodoBoard />
    </div>
  )

}
export default App