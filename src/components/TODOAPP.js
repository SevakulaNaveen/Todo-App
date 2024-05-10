import { useState } from "react";
import "../styles/todoapp.css";

//taking todo input from the input box and adding it the array of todos and displaying the todo array using map method

const TODOAPP = () => {
  const [todoList, setTodoList] = useState([]);
  const [inputTodo, setInputTodo] = useState("");

  // handleInput method to get the input value and store it in inputTodo
  const handleInput = (e) => {
    setInputTodo(e.target.value);
  };

  // handleAddTodo method updates the todoList Array by using spread operator and inputTodo
  const handleAddTodo = () => {
    setTodoList([...todoList, inputTodo]);
    setInputTodo("");
  };

  //handleDeleteTodo method takes the index and delete the todo of that index by using splice method
  const handleDeleteTodo = (index) => {
    const currentTodo = [...todoList];
    currentTodo.splice(index, 1);
    setTodoList(currentTodo);
  };

  return (
    <div className="main">
      <h1 className="heading">TODO - APP</h1>
      <div>
        {/* input box and add button to add the todo */}
        <input
          type="text"
          placeholder="add todo item"
          value={inputTodo}
          onChange={handleInput}
        />
        <button onClick={handleAddTodo}> ADD TODO </button>
      </div>

      <ul>
        {/* using map method to iterate over the todoList array and display them */}
        {todoList.map((todo, index) => (
          <li key={index}>
            {todo}
            <button className="delete" onClick={() => handleDeleteTodo(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TODOAPP;
