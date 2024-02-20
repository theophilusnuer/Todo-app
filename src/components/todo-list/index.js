import {useLocalStorage} from'usehooks-ts';


function TodoList(){
    
    const [todos] = useLocalStorage('TODO_KEY', []);
  

// function getTodos() {
//     // Getting all todos from local storage and storing it
//     let todos = JSON.parse(localStorage.getItem('TODO_KEY')) || [];
//     // update Reactt state
//     setTodos (todos);
// }

// useEffect(getTodos, []);

    return(
        <ul>
           {todos.map(function(todo, index) {
            return<li key={index}>{todo}</li>
           })}
        </ul>
    );
}

export default TodoList;