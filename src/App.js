import React, { useState } from "react";
import './App.css';
import Todo from './components/Todo'

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Take out the trash",
      description: "The ben men come at 9pm"
    },
    {
      title: "Walk the dog",
      description: "He is bored"
    },
    {
      title: "Clean the crib",
      description: "It's getting messy"
    },
    {
      title: "Dominate the day",
      description: "Only you can change your life"
    }
  ]);
  const [input, setInput] = useState('');

  return (
    <div className="App">
      <h1>To-do App</h1>
      <input value={input} onChange={e => setInput(e.target.value)} type="text" />
      <button>Add Todo</button>
      {
        todos.map(todo => (
          <Todo title={todo.title} description={todo.description} />
        ))
      }

    </div>
  );
}

export default App;
