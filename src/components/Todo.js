import React, { useState } from "react";
import AddTodoForm from "./AddTodoform";
import { v4 as uuidv4 } from "uuid";
const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, todo: "Buy milk" },
    { id: 2, todo: "buy bread" },
    { id: 3, todo: "buy cheese" },
  ]);

  const myTodos = todos.map((todo) => {
    return (
      <li className="list-group-item" key={todo.id}>
        {todo.todo}
      </li>
    );
  });

  const addNewTodo = (newTodo) => {
    setTodos([...todos, { id: uuidv4(), todo: newTodo }]); // here please look doc of UUID package on NPM
  };

  return (
    <div>
      <h1 className="text-center">{todos.length} To-do</h1>
      <ul className="list-group">{myTodos}</ul>
      <AddTodoForm addNewTodo={addNewTodo} />
    </div>
  );
};

export default Todo;
