import React, { useState } from "react";

const AddToForm = ({ addNewTodo }) => {
  const [addTodo, setaddTodo] = useState("");

  const handleTodo = (e) => {
    e.preventDefault();
  };

  addNewTodo(addTodo);

  return (
    <form onSubmit={handleTodo} className="mt-4">
      <div className="card card-body">
        <div>
          <div className="form-group">
            <label htmlFor="">Add Todo</label>
            <input
              className="form-control"
              type="text"
              value={addTodo}
              onChange={(e) => setaddTodo(e.target.value)}
            />
            <input
              className="btn btn-success mt-4"
              type="submit"
              name=""
              id=""
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddToForm;
