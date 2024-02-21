import { useLocalStorage } from "usehooks-ts";
import TodoItem from "../todo-item";

function TodoList() {
  const [todos, setTodos] = useLocalStorage("TODO_KEY", []);

  function deleteAll() {
    setTodos([]);
  }
  // function getTodos() {
  //     // Getting all todos from local storage and storing it
  //     let todos = JSON.parse(localStorage.getItem('TODO_KEY')) || [];
  //     // update Reactt state
  //     setTodos (todos);
  // }

  // useEffect(getTodos, []);

  return (
    <section>
      <button onClick={deleteAll} className="btn btn-danger">
        Delete All
      </button>
      <ul className="list-group">
        {todos.map(function (todo, index) {
          return <TodoItem todo={todo} index={index} />;
        })}
      </ul>
    </section>
  );
}

export default TodoList;
