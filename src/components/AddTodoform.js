import React, { useState } from "react";

const AddTodoForm = ({ addNewTodo }) => {
  const [addTodo, setAddTodo] = useState("");

  //here we have to call addNewTodo after submitting the form with handleTodo.

  const handleTodo = (e) => {
    e.preventDefault(); // no refresh
    addNewTodo(addTodo);

    setAddTodo(""); //to empty the state
  };

  return (
    <form className="mt-4" action="" onSubmit={handleTodo}>
      <div className="card card-body">
        <div className="form-group">
          <label htmlFor="">Add Todo</label>
          <input
            className="form-control"
            value={addTodo}
            type="text"
            name=""
            id=""
            onChange={(e) => setAddTodo(e.target.value)}
          />
          <input className="btn btn-success mt-4" type="submit" />
        </div>
      </div>
    </form>
  );
};

export default AddTodoForm;
