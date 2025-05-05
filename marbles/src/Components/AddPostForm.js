
import { useRef } from 'react';

function AddPostForm({ onAdd }) {
  const inputRef = useRef();

  const handleAdd = () => {
    if (inputRef.current.value.trim() !== '') {
      onAdd(inputRef.current.value);
      inputRef.current.value = '';
    }
  };

  return (
    <div style={{ margin: '1rem' }}>
      <input ref={inputRef} placeholder="What's on your mind?" />
      <button onClick={handleAdd}>Post</button>
    </div>
  );
}

export default AddPostForm;
