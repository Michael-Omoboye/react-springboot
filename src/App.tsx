import { useState } from "react";
import "./App.css";
import { TodoTable } from "./components/TodoTable";

function App() {
  const todos = [
    { rowNumber: 1, rowDescription: "Feed puppy", rowAssigned: "User one" },
    { rowNumber: 2, rowDescription: "Water plants", rowAssigned: "User two" },
    { rowNumber: 3, rowDescription: "make dinner", rowAssigned: "User one" },
    { rowNumber: 4, rowDescription: "Charge phone battery", rowAssigned: "User one" }
  ];

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
