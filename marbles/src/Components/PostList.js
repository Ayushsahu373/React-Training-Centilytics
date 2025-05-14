import { useEffect, useState, useCallback, useContext } from "react";
import PostItem from "./PostItem";
import AddPostForm from "./AddPostForm";
import Posts from "../Data/Posts.js";
import { ThemeContext } from "../context/ThemeContext";

function PostList() {
  const [posts, setPosts] = useState([]);
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts"));
    if (storedPosts && Array.isArray(storedPosts)) {
      setPosts(storedPosts);
    } else {
      setPosts(Posts);
    }
  }, []);

  const addPost = useCallback(
    (title) => {
      const newPost = {
        id: posts.length + 1,
        title,
        likes: 0,
      };
      const updatedPosts = [newPost, ...posts];
      setPosts(updatedPosts);
      localStorage.setItem("posts", JSON.stringify(updatedPosts));
    },
    [posts]
  );

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: darkMode ? "#333" : "#eee",
        color: darkMode ? "#fff" : "#000",
      }}
    >
      <AddPostForm onAdd={addPost} />
      {Array.isArray(posts) &&
        posts.map((post) => <PostItem key={post.id} post={post} />)}
    </div>
  );
}

export default PostList;
