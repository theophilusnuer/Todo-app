import styles from "./index.module.css";
import { useLocalStorage } from "usehooks-ts";
import{useState} from 'react';

function AddTodo() {
  const [todos, setTodos] = useLocalStorage("TODO_KEY", []);
//   let todo;
const [todo, setTodo] = useState('');

  return (
    <section className={styles.addTodo}>
      <input
      value={todo}
        onChange={function (event) {
          setTodo(event.target.value);
        }}
        className={styles.addTodoInput}
        placeholder="Start typing..."
      />

      <button
      className= {`btn ${styles.btn}`}
        onClick={function () {
          //IGNORE
          // Get existing list of todos from local storage (deserialize into a string for local storage)
          // let todos = JSON.parse(localStorage.getItem('TODO_KEY')) || [];

          // Add new todo to existing list of todos
          //   todos.push(todo);

          setTodos([...todos, todo]);
          //wiping the add todo after typing, corresponding code with line 13
          setTodo('');

          // Set all todos in local storage (serialize into a string before storing in local storage)
          //   localStorage.setItem("TODO_KEY", JSON.stringify(todos));
        }}
      >
        Create
      </button>
    </section>
  );
}

export default AddTodo;
