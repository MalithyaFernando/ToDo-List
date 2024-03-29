import React from "react";
// Importing components
import Todo from "./Todo";

function ToDoList( {todos, setTodos, filteredTodos} ) {

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
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