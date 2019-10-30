import React from "react";

function Todo (props) {
    console.log(props.todos);
 
    const del= (e)=>{
    props.del(e.target.id)
    }
    const line = (e) =>{
        let id= e.target.nextElementSibling.id
        if(e.target.checked){
            document.getElementById(id).classList.add("line")
        }else{
            document.getElementById(id).classList.remove("line") 
        }
    }

    return(
       <div>
        {props.todos.map((todo) => {
        return (
            <div key={todo.id}>
                <input onChange={line} type="checkbox"></input>
                <h1 id={todo.id} className="task" onClick={del}>{todo.todo}</h1>
            </div>
        )
    })}
    </div>
    )
  }

export default Todo;
