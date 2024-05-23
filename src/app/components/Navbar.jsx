import React from "react";
import { Link } from "react-router-dom";
 

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/">AddTodo</Link>
        </li>
        <li>
          <Link to="/todolist">Todo list</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
