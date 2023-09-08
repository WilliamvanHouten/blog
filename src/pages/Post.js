import React, { Component } from 'react';
import axios from 'axios';

class PostPage extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      newPost: {
        title: '',
        body: '',
      },
    };
  }

  componentDidMount() {
    // Fetch posts from Express server
    axios.get('http://your-express-server/api/posts')
      .then(response => {
        this.setState({ posts: response.data });
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      newPost: {
        ...prevState.newPost,
        [name]: value,
      },
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // Send a new post to the Express server
    axios.post('http://your-express-server/api/posts', this.state.newPost)
      .then(response => {
        // Update the posts list with the new post
        this.setState(prevState => ({
          posts: [...prevState.posts, response.data],
          newPost: {
            title: '',
            body: '',
          },
        }));
      })
      .catch(error => {
        console.error('Error creating a new post:', error);
      });
  }

  render() {
    const formStyles = {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f4f4f4',
      borderRadius: '5px',
    };

    const inputStyles = {
      width: '90%',
      padding: '10px',
      marginBottom: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    };

    const buttonStyles = {
      backgroundColor: '#007bff',
      color: '#fff',
      cursor: 'pointer',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
    };

    return (
      <div>
        <h1>Posts</h1>
        <h3>Share your thoughts on Local Coding Bootcamps & Traditional vs Bootcamps below:</h3>
        <div>
          <form onSubmit={this.handleSubmit} style={formStyles}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={this.state.newPost.title}
              onChange={this.handleInputChange}
              style={inputStyles}
            />
            <textarea
              name="body"
              placeholder="Body"
              value={this.state.newPost.body}
              onChange={this.handleInputChange}
              style={inputStyles}
            ></textarea>
            <button type="submit" style={buttonStyles}>Create Post</button>
          </form>
        </div>
        <div>
          {this.state.posts.map(post => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PostPage;

