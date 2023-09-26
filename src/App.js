import React, { useState, useEffect } from 'react';
import './App.css';
import './components/CreatePost.css';
import Home from './pages/home';
import Blog from './pages/Blog';
import EditPost from './pages/EditPost'; // Adjust the path to match the actual location of your EditPost component.
import CreatePost from './pages/CreatePost'; // Import the CreatePost component
import PostList from './pages/PostList';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  const [newPost, setNewPost] = useState({ title: '', content: '' });

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

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const handleCreatePost = async () => {
    try {
      const response = await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });

      if (response.ok) {
        const newPostData = await response.json();
        setPosts([...posts, newPostData]);
        setNewPost({ title: '', content: '' });
        setCurrentPage('post');
      } else {
        // Handle error
        console.error('Failed to create post.');
      }
    } catch (error) {
      // Handle error
      console.error('Error:', error);
    }
  };

  const handleEditPost = async (editedPost) => {
    // ... (rest of your edit post logic)
  };

  const handleDeletePost = async (postId) => {
    // ... (rest of your delete post logic)
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'blog':
        return <Blog />;
      case 'post':
        return (
          <div>
           
           <button className="create-post-button" onClick={() => setCurrentPage('create')}>
  Create a Post
</button>

            <PostList
              posts={posts}
              onDelete={handleDeletePost}
              onEdit={(post) => setEditingPost(post)}
            />
          </div>
        );
      case 'create':
        return (
          <CreatePost onPostCreated={handleCreatePost} />
        );
      case 'edit':
        return (
          <EditPost
            postToEdit={editingPost}
            onEditPost={handleEditPost}
            onCancel={() => setEditingPost(null)}
          />
        );
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <button className="nav-button" onClick={() => changePage('home')}>
              Home
            </button>
          </li>
          <li>
            <button className="nav-button" onClick={() => changePage('blog')}>
              Blog
            </button>
          </li>
          <li>
            <button className="nav-button" onClick={() => changePage('post')}>
              Post
            </button>
          </li>
        </ul>
      </nav>
      {renderPage()}
    </div>
  );
}

export default App;
