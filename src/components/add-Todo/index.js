import React from 'react';
import styles from './index.module.css';

function AddTodo (){
// const [todo, setTodo] = React.useState('');
let todo;

    return (
        <section className={styles.addTodo}>
            <input 
            onChange={function (event) {
                todo = event.target.value;
            }}
            className={styles.addTodoInput} 
            placeholder="Start typing..."/>

            <button onClick={function () {
                // Get existing list of todos from local storage (deserialize into a string for local storage)
                let todos = JSON.parse(localStorage.getItem('TODO_KEY')) || [];
                // Add new todo to existing list of todos
                todos.push(todo);
                // Set all todos in local storage (serialize into a string before storing in local storage)
                localStorage.setItem('TODO_KEY', JSON.stringify(todos));
                
            }}>Create</button>
        </section>
    );
}

export default AddTodo;




