import React, { useState } from 'react';
import './App.css';
import Home from './pages/home';
import Blog from './pages/Blog';
import Post from './pages/Post';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Function to change the current page
  const changePage = (page) => {
    setCurrentPage(page);
  };

  // Render the component based on the current page
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'blog':
        return <Blog />;
      case 'post':
        return <Post />;
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

