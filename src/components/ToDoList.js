import React from "react";
// Importing components
import Todo from "./Todo";

function ToDoList( {todos, setTodos} ) {

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo) => (
                    <Todo
                        todos = {todos}
                        setTodos={setTodos}
                        key={todo.id}
                        todo={todo}
                        text={todo.text}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;