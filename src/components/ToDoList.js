import React from "react";
// Importing components
import Todo from "./Todo";

function ToDoList( {todos} ) {

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo) => (
                    <Todo />
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;