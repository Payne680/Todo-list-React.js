import React, {useState} from "react"
import '../Components/UI.css'

function TodoList () {
    const [list, setList] = useState([]);
    const [input, newInput] = useState("");
  
    const add = (todos) => {
      const newTodo = {
        id: Math.random(),
        todo: todos,
      };
      setList([...list, newTodo]);
      newInput("");
    };
  
    const remove = (id) => {
      const newList = list.filter((todos) => todos.id !== id);
  
      setList(newList);
    };
    
    const reset = () => {
        window.location.reload();
      }


    return (
    <div id="wrapper">
        <h1>Todo List</h1>
        <input id="task"  type="text"
        value={input}
        onChange={(e) => newInput(e.target.value)}/><button id="add"  onClick={() => add(input)}>Add Task</button>
        <hr/>
        <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            <input className="box" type="checkbox"></input>
            {todo.todo}
            <button className="remove" onClick={() => remove(todo.id)}>X</button>
          </li>
        ))}
      </ul>
      <button className="reload" onClick={() => reset()}>Reset</button>
    </div>
 )
}

export default TodoList;