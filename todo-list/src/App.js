import React, { useState } from 'react';
import './App.css';
import InputField from './Todo Components/input';
import List from './Todo Components/list';
function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const AddItem = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const DeleteItem = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  

  const ClearAll = () => {
    setTodos([]);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <InputField
        task={task}
        setTask={setTask}
        AddItem={AddItem}
        ClearAll={ClearAll}
      />
      <List
        todos={todos}
        DeleteItem={DeleteItem}
      />
    </div>
  );
}

export default App;
