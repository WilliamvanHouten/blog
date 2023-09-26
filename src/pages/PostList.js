import React, { useState, useEffect } from 'react';

const PostList = ({ onDelete, onEdit }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:3000/posts');
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        } else {
          // Handle error
        }
      } catch (error) {
        // Handle error
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {/* <h2>Posts</h2> */}
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button onClick={() => onDelete(post._id)}>Delete</button>
            <button onClick={() => onEdit(post)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
