import React from "react";

function List({ todos, EditItem, DeleteItem }) {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}

            <button onClick={() => DeleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
