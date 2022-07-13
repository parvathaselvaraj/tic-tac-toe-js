import React, { useState } from "react";
import _, { set } from "lodash";
import App from "../App";

function ToDoListInput() {
  const [toDoListArray, setToDoListArray] = useState([]);
  const [arrayElement, setArrayElement] = useState("");

  const handleChange = (e) => {
    setArrayElement(e.target.value);
  };

  const handleSubmit = () => {
    setToDoListArray([...toDoListArray, arrayElement]);
  };

  return (
    <div className="App">
      <input type="text" value={arrayElement} onChange={handleChange}></input>
      <button onClick={handleSubmit}>Submit</button>
      <br />
      <br />
      <div>
        list of items to be printed
        <ol>
          {_.map(toDoListArray, (toDoList) => {
            return (
            <li key={toDoList}>{toDoList}</li>
          )})}
        </ol>
      </div>
    </div>
  );
}
export default ToDoListInput;
