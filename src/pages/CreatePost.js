import React, { useState, useEffect } from 'react';
import '../components/CreatePost.css';

function CreatePost() {
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [posts, setPosts] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editedPostIndex, setEditedPostIndex] = useState(null);
  const [showForm, setShowForm] = useState(true); // Define the showForm state

  useEffect(() => {
    // Load posts from localStorage when the component mounts
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(savedPosts);
  }, []);

  useEffect(() => {
    // Save posts to localStorage whenever the posts state changes
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const handleCreatePost = async () => {
    try {
      // Your create post logic here
      // For simplicity, we'll just add the new post to the list
      setPosts([...posts, newPost]);

      // After successfully creating the post, clear the input fields and show the form again
      setNewPost({ title: '', content: '' });
      setShowForm(true);
    } catch (error) {
      // Handle error
      console.error('Error:', error);
    }
  };

  const handleEditPost = (index) => {
    // Enter edit mode for the selected post
    setEditMode(true);
    setEditedPostIndex(index);

    // Pre-fill the input fields with the post data for editing
    setNewPost({ ...posts[index] });
  };

  const handleSaveEditedPost = () => {
    // Update the post in the posts array
    const updatedPosts = [...posts];
    updatedPosts[editedPostIndex] = newPost;
    setPosts(updatedPosts);

    // Exit edit mode and reset the form
    setEditMode(false);
    setEditedPostIndex(null);
    setNewPost({ title: '', content: '' });
  };

  const handleDeletePost = (index) => {
    // Remove the post from the posts array
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);

    // Reset the form if the deleted post was being edited
    if (editMode && index === editedPostIndex) {
      setEditMode(false);
      setEditedPostIndex(null);
      setNewPost({ title: '', content: '' });
    }
  };

  return (
    <div className="form-container">
      <h2>Create Post</h2>
      {editMode ? (
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
          <button onClick={handleSaveEditedPost}>Save Edited Post</button>
        </div>
      ) : (
        // Conditionally render the form based on showForm
        showForm && (
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
        )
      )}

<div className="created-posts">
        <h3>Created Posts</h3>
        {posts.map((post, index) => (
          <div key={index} className="post-card">
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            <button onClick={() => handleEditPost(index)}>Edit</button>
            <button onClick={() => handleDeletePost(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreatePost;
