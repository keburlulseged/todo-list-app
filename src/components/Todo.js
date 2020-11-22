import React from 'react';

const Todo = ({ title, description}) => {
  return (
    <div className="todo">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Todo;
