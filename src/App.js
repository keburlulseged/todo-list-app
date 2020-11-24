import React, { useState } from "react";
import Todo from './components/Todo'
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  }

  return (
    <div className="App">
      <h1>To-do App</h1>
      <form>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          type="text"
          />
        <button
          disabled={!input}
          type="submit"
          onClick={addTodo}>Add Todo</button>
      </form>


        {
          todos.map((todo,i) => (
            <Todo key={i} title={todo}  />
          ))
        }


    </div>
  );
}

export default App;
