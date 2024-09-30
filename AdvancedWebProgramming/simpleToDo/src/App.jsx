import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const TodoItem = ({ text }) => {
    return <li>{text}</li>;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setNewTodo("");
    console.log(todos);
    
  };

  const handleChange = event => {
    setNewTodo(event.target.value)
  };

  return (
    <>
      <p>Cool project you got there.</p>
      <p>Maybe you want to share the code?</p>
      <p>No? That's alright.</p>
      <h3>[Adult Swim]</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="todo-input"
          autoComplete="off"
          type="text"
          name="newTodo"
          placeholder="What must be done?"
          onChange={handleChange}
        />
        <button type="submit" className="save-button">SAVE</button>
      </form>
      <div className="todo-content">
        <ol>
 
        </ol>
      </div>
    </>
  );
}

export default App;
