import React, { useState } from "react";

export const NewTodoForm = () => {
  const [description, setDescription] = useState("");
  const [assigned, setAssigned] = useState("");

  const descriptionChange = (ev) => {
    console.log("description", ev.target.value);
    setDescription(ev.target.value);
  };

  const assignedChange = (ev) => {
    console.log("assigned", ev.target.value);
    setAssigned(ev.target.value);
  };
  return (
    <div className="mt-5">
      <form action="">
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Assigned
          </label>
          <input
            type="text"
            className="form-control"
            required
            onChange={assignedChange}
            value={assigned}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-control">
            Description
          </label>
          <textarea
            className="form-control"
            rows={3}
            required
            onChange={descriptionChange}
            value={description}
          ></textarea>
        </div>
        <button type="button" className="btn btn-primary mt-3">
          Add todo
        </button>
      </form>
    </div>
  );
};
