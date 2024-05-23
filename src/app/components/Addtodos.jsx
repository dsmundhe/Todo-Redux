import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todo/todoSlice";
 

function Addtodos() {
  const [indata, setindata] = useState("");
  const dispatch = useDispatch();

  function addData(val) {
    dispatch(addTodo(val));
  }

  return (
    <div className="addtodos-container">
      <h2>Add a New Todo</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (e.target.data.value !== "") {
            addData(e.target.data.value);
          }
          e.target.data.value = "";
        }}
      >
        <input 
          type="text" 
          placeholder="Enter todo..." 
          name="data" 
          className="todo-input"
        />
        <button type="submit" className="add-button">Add</button>
      </form>
    </div>
  );
}

export default Addtodos;
