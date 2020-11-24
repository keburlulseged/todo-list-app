import React, { useState, useEffect } from "react";
import Todo from './components/Todo';
import db from './firebase';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().title))
    })
  }, [])
  
  const addTodo = (e) => {
    e.preventDefault();
    // setTodos([...todos, input]);

    db.collection('todos').add({
      title: input
    })
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
