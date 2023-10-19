import { useState } from "react";
import "./App.css";
import { TodoTable } from "./components/TodoTable";
import { NewTodoForm } from "./components/NewTodoForm";

function App() {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);
  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Feed puppy", rowAssigned: "User one" },
    { rowNumber: 2, rowDescription: "Water plants", rowAssigned: "User two" },
    { rowNumber: 3, rowDescription: "make dinner", rowAssigned: "User one" },
    {
      rowNumber: 4,
      rowDescription: "Charge phone battery",
      rowAssigned: "User one",
    },
  ]);

  const addtodo = (description, assigned) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned,
    };
    setTodos((todos) => [...todos, newTodo]);
  };

  const deleteTodo = (deleteTodoRowNumber) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo} />
          <button
            onClick={() => setShowAddTodoForm(!showAddTodoForm)}
            className="btn btn-primary"
          >
            {showAddTodoForm ? "Close New Todo" : "Add New Todo"}
          </button>
          {showAddTodoForm && <NewTodoForm addTodo={addtodo} />}
        </div>
      </div>
    </div>
  );
}

export default App;
