import { useEffect, useState, useCallback } from "react";
import PostItem from "./PostItem";
import AddPostForm from "./AddPostForm";
import Posts from "../Data/Posts.js"; 

function PostList() {
  const [posts, setPosts] = useState([]);

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
    <div>
      <AddPostForm onAdd={addPost} />
      {Array.isArray(posts) &&
        posts.map((post) => <PostItem key={post.id} post={post} />)}
    </div>
  );
}

export default PostList;
