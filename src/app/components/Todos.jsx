import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, addval, decval } from "../../features/todo/todoSlice";
 

function Todos() {
  const todos = useSelector((state) => state.todos);
  const val = useSelector((state) => state.val);
  const dispatch = useDispatch();

  return (
    <div className="todos-container">
      <h2>Your Todo List</h2>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {todo.text}
            <div>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="delete-button"
              >
                Del
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Uncomment these lines if you want to include the counter functionality */}
      {/* <div className="counter">
        <h1>Counter!</h1>
        <button onClick={() => dispatch(addval())} className="counter-button">Increase</button>
        <button onClick={() => dispatch(decval())} className="counter-button">Decrease</button>
        <h2>{val}</h2>
      </div> */}
    </div>
  );
}

export default Todos;
