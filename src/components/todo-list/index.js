import React from "react";

function TodoList(){
    
    const [todos, setTodos] = React.useState([]);

function getTodos() {
    // Getting all todos from local storage and storing it
    let todos = JSON.parse(localStorage.getItem('TODO_KEY')) || [];
    // update Reactt state
    setTodos (todos);
}

React.useEffect(getTodos, []);

    return(
        <ul>
           {todos.map(function(todo, index) {
            return<li key={index}>{todo}</li>
           })}
        </ul>
    );
}

export default TodoList;