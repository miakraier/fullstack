import React, {Component} from 'react';
import Todo from './Todo';
import Form from "./Form";
import'./App.css';

class App extends Component{
  state={
    todos:[]
  }
  updateState= (todo) =>{
    let obj= {todo: todo, id: Math.random()}
    console.log(todo)
    this.setState({
      todos:[...this.state.todos, obj]
    })
    console.log(this.state);
  }
  deleteFromState= (id)=>{
console.log(id)
const newTodos= this.state.todos.filter(todo => todo.id !== Number(id))
this.setState({
  todos: newTodos
})
  }
render(){
  return(
    <div className="App">
      <h1>my todo app</h1>
      <Form updateState={this.updateState}/>
      <Todo del={this.deleteFromState} todos={this.state.todos}/>
    </div>
  )
}
}
export default App;
