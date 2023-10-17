import { useState } from "react";
import TodoRowItem from "./components/TodoRowItem";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const todos = [
    { rowNumber: 1, rowDescription: "Feed puppy", rowAssigned: "User one" },
    { rowNumber: 2, rowDescription: "Water plants", rowAssigned: "User two" },
    { rowNumber: 3, rowDescription: "make dinner", rowAssigned: "User one" },
  ];

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Description</th>
                <th scope="col">Assigned</th>
              </tr>
            </thead>
            <tbody>
              <TodoRowItem
                rowNumber={todos[0].rowNumber}
                rowDescription={todos[0].rowDescription}
                rowAssigned={todos[0].rowAssigned}
              />
              <tr>
                <th scope="row">2</th>
                <td>Get haircut</td>
                <td>Eric</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
