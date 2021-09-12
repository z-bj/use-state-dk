import React, { useState } from "react";
import AddtodoForm from "./AddTodoform";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, todo: "Buy milk" },
    { id: 2, todo: "Buy bread" },
    { id: 3, todo: "Buy cheese" },
  ]);

  const [warning, setWarning] = useState(false);

  const myTodos = todos.map((todo) => {
    return (
      <li className="list-group-item" key={todo.id}>
        {todo.todo}
      </li>
    );
  });

  const addNewTodo = (newTodo) => {
    if (newTodo !== "") {
      warning && setWarning(false);

      // here we get back addTodo value from AddTodoForm as newTodo.

      //addNewTodo call setTodos and pass it a new value (which is addTodo that come from addTodoForm ) to update the array in the state.
      setTodos([
        ...todos,
        {
          id: uuidv4(), // go to the npm uuid
          todo: newTodo,
        },
      ]); // the setter don't know how to make the append that's why we do it manually.
    } else {
      setWarning(true);
    }
  };

  const warningMsg = warning && (
    <div className="alert alert-danger mt-5" role="alert">
      please enter a todo
    </div>
  );

  return (
    <div>
      {warningMsg}
      <h1 className="text-center">{todos.length} To-do</h1>
      <ul className="list-group">{myTodos}</ul>
      <AddtodoForm addNewTodo={addNewTodo} />
      {/*we pass the function addNewTodo as a props to this component next we will get it back in addTodoForm with destructuring*/}
    </div>
  );
};

export default Todo;
