import React from "react";

function InputField({ task, setTask, AddItem, ClearAll }) {
  return (
    <div className="input-field">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={AddItem}>Add</button>
      <button onClick={ClearAll}>Clear All</button>
    </div>
  );
}

export default InputField;
