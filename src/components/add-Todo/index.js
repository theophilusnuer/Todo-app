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
        onClick={async function () {
         //Post todo to toso-api
         const response = await fetch('http://localhost:4000/todos', {
          method:'POST',
          body: JSON.stringify({
            title: todo
          }),
          headers: {
            'Content-Type':'application/json'
          }
         });
const data = await response.json();
console.log(data)

         //wipe the input
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
