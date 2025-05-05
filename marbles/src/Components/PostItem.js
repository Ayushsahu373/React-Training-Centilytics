
import { useReducer } from "react";

function likeReducer(state, action) {
  switch (action.type) {
    case "LIKE":
      return { likes: state.likes + 1 };
    case "DISLIKE":
      return { likes: state.likes - 1 };
    default:
      return state;
  }
}

function PostItem({ post }) {
  const [state, dispatch] = useReducer(likeReducer, { likes: 0 });

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem" }}>
      <h3>{post.title}</h3>
      <button onClick={() => dispatch({ type: "LIKE" })}>❤️</button>
      <button onClick={() => dispatch({ type: "DISLIKE" })}>💔</button>
      <p>Likes: {state.likes}</p>
    </div>
  );
}

export default PostItem;
