import React from 'react';
import '../components/Blog.css'; // Import your CSS file for styling

const Blog = () => {
  // Define your own author information
  // const authors = [
  //   { author: 'Your Name', username: 'yourusername123' },
  //   // Add more authors here as needed
  // ];

  // Create your own blog posts
  const customBlogPosts = [
    {
      title: 'My Coding Bootcamp Experience',
      content:
        'I recently completed a coding bootcamp, and it was an amazing journey. ' +
        'I learned a lot about web development and gained hands-on experience ' +
        'working on real projects. The bootcamp was intense, but it was worth it. ' +
        'I highly recommend considering a coding bootcamp if you want to jumpstart ' +
        'your career in technology.',
      author: 'Jenny Doe',
      username: 'username123',
      date: 'September 15, 2023', // Add your own date
    },
    {
      title: 'The Benefits of Traditional Education',
      content:
        'While coding bootcamps are a great option, traditional education also has its ' +
        'advantages. I pursued a degree in computer science, and it provided me with ' +
        'in-depth knowledge and research opportunities. It took longer to complete ' +
        'but opened doors to various career options.',
      author: 'Mary Joseph',
      username: 'maryJ123',
      date: 'September 20, 2023', // Add your own date
    },
    {
      title: 'Making the Decision: Bootcamp or Degree?',
      content:
        'Choosing between a coding bootcamp and a traditional degree program ' +
        'is a significant decision. It ultimately depends on your goals and ' +
        'circumstances. If you need quick, hands-on skills, a bootcamp might be ' +
        'the way to go. However, if you want a deeper understanding of computer ' +
        'science, a degree program could be the better choice.',
      author: 'Tasha Cobbs',
      username: 'TashInTech',
      date: 'September 25, 2023', // Add your own date
    },
    {
      title: 'Life After My Bootcamp Graduation',
      content:
        'After completing my coding bootcamp, I started my job search in ' +
        'earnest. Thanks to the connections I made during the bootcamp, I ' +
        'quickly found a position as a junior web developer. The fast-paced ' +
        'nature of the bootcamp prepared me well for the real world of ' +
        'software development.',
      author: 'Daniel Duff',
      username: 'danielD',
      date: 'October 5, 2023', // Add your own date
    },
    {
      title: 'Exploring the Best of Both Worlds',
      content:
        'What if you could combine the benefits of both coding bootcamps ' +
        'and traditional education? Some universities now offer coding ' +
        'bootcamp-style programs within their curriculum. Its a hybrid '+
        'approach that provides practical skills alongside a degree.',
      author: 'Eathon Davids',
      username: 'Eathonal202',
      date: 'October 10, 2023', // Add your own date
    },
    {
      title: 'Continuous Learning in Tech',
      content:
        'Regardless of your initial choice, one thing is certain: technology ' +
        'is ever-evolving. Continuous learning is essential. Whether you ' +
        'choose bootcamps, degrees, or a mix of both, staying updated ' +
        'with the latest tech trends is crucial for a successful career.',
      author: 'Yara Georgia',
      username: 'YaraGeorge',
      date: 'October 15, 2023', // Add your own date
    },
    // Add more custom blog posts here as needed
  ];

  const blogPosts = customBlogPosts;

  return (
    <div className="blog-container-2">
      <h1 className="blog-heading">Coding Bootcamps vs. Traditional Education: Which is Right for You?</h1>

      {blogPosts.map((post, index) => (
        <div className="blog-card" key={index}>
          <h2 className="post-title">{post.title}</h2>
          <p className="post-content">{post.content}</p>
          <p className="post-author">Author: {post.author}</p>
          <p className="post-username">Username: {post.username}</p>
          <p className="post-date">Date: {post.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;

