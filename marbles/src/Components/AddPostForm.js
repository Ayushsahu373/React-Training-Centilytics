import { useContext, useRef } from "react";
import { ThemeContext } from "../context/ThemeContext";

function AddPostForm({ onAdd }) {
  const { darkMode } = useContext(ThemeContext);
  const inputRef = useRef();

  const handleAdd = () => {
    if (inputRef.current.value.trim() !== "") {
      onAdd(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <div style={{ margin: "1rem", background: darkMode ? "#222" : "#f9f9f9" }}>
      <input
        ref={inputRef}
        placeholder="What's on your mind?"
        style={{
          background: darkMode ? "#555" : "#fff",
          color: darkMode ? "#fff" : "#000",
        }}
      />
      <button onClick={handleAdd}>Post</button>
    </div>
  );
}

export default AddPostForm;
