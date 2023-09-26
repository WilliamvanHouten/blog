import React, { useState, useEffect } from 'react';

function CreatePost() {
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] = useState(true);

  // Load posts from localStorage when the component mounts
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(savedPosts);
  }, []);

  // Save posts to localStorage whenever the posts state changes
  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const handleCreatePost = async () => {
    // Your create post logic here
    // For simplicity, we'll just add the new post to the list
    setPosts([...posts, newPost]);

    // After successfully creating the post, clear the input fields and show the form again
    setNewPost({ title: '', content: '' });
    setShowForm(true);
  };

  return (
    <div>
      <h2>Create Post</h2>
      {showForm && (
        <div>
          <input
            type="text"
            placeholder="Title"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          />
          <textarea
            placeholder="Content"
            value={newPost.content}
            onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
          />
          <button onClick={handleCreatePost}>Save</button>
        </div>
      )}

      <div>
        <h3>Created Posts</h3>
        {posts.map((post, index) => (
          <div key={index} className="post-card">
            <h4>{post.title}</h4>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreatePost;
