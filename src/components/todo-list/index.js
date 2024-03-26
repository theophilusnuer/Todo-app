import { useLocalStorage } from "usehooks-ts";
import TodoItem from "../todo-item";
import { useEffect, useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    //Get the todos from the todos-api
    const response = await fetch("http://localhost:4000/todos");
    const data = await response.json();
    console.log(data);
    //update todos state
    setTodos(data);
  };

  async function deleteAll() {
    //Delete todos from todo-api
    const response = await fetch("http://localhost:4000/todos",{
      method: 'DELETE'
    });
   const data = await response.json();
   console.log(data);
    //update todos state
    setTodos([]);
  }
  // function getTodos() {
  //     // Getting all todos from local storage and storing it
  //     let todos = JSON.parse(localStorage.getItem('TODO_KEY')) || [];
  //     // update Reactt state
  //     setTodos (todos);
  // }

  // useEffect(getTodos, []);
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <section>
      <button onClick={deleteAll} className="btn btn-danger">
        Delete All
      </button>
      <ul className="list-group">
        {todos.map(function (todo, index) {
          return <TodoItem key={todo._id} todo={todo.title} index={index} />;
        })}
      </ul>
    </section>
  );
}

export default TodoList;
