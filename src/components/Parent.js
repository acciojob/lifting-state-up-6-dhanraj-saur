import React, { useState } from "react";

const Parent = () => {
    const [todos, setTodos] = useState([
        { "title": "Learn React" },
        { "title": "Build a React App" },
        { "title": "Deploy the React app" },
    ]);

    const handleCompleteTodo = (index) => {
        const updatedTodos = todos.map((todo, i) => {
            if (i === index) {
                return {
                    ...todo,
                    completed: true,
                };
            }
            return todo;
        });

        setTodos(updatedTodos);
    };

    return (
        <div id="main">
            <h1>Parent component</h1>
            <ChildComponent todos={todos} handleCompleteTodo={handleCompleteTodo} />
        </div>
    );
}

const ChildComponent = ({ todos, handleCompleteTodo }) => {
    return (
        <div id="child">
            <h2>Child Component</h2>
            {
                todos.map((todo, index) => (
                    <li key={index}>
                        {todo.title}
                        {!todo.completed && (
                            <button onClick={() => handleCompleteTodo(index)}>Complete</button>
                        )}
                    </li>
                ))
            }
        </div>
    );
};

export default Parent;