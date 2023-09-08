
import React from 'react';
import './BlogList.css';
import '../App.css'

const BlogList = () => {
  const bootcamps = [
    {
      name: '#5. School of IT',
      location: ' Cape Town and Somerset West, South Africa.',
      description: 'School of IT offers coding bootcamps and IT training programs in South Africa. They cover a range of topics, including web development, software engineering, and cybersecurity. School of IT provides both on-campus and online learning options and focuses on preparing students for industry certifications and job placements. Learn to code South Africa, java, c#, vb, python, IT Courses South Africa, coding courses.',
      image: 'boot1.jpeg',
      paid: true,
      rating: 4,
    },
    {
      name: '#4. Umuzi Academy',
      location: '28 Madison St, Jeppestown, Johannesburg, South Africa',
      description: 'Umuzi Academy is a coding and digital skills training organization in South Africa. They offer programs in web development, data science, and design, with an emphasis on promoting diversity and inclusion in the tech sector. Umuzi Academy provides learners with the skills needed to launch careers in the digital economy.offer fully remote, personalised full-time and part-time training.',
      image: 'boot2.png',
      paid: false,
      rating: 3,
    },
    {
      name: '#3. HyperionDev',
      location: ' Sandton ,South Africa',
      description: 'HyperionDev is a coding bootcamp that offers various programs, including web development, software engineering, and data science courses. They provide flexible learning options, including part-time and full-time courses, with a focus on mentorship and project-based learning. HyperionDev aims to prepare students for career opportunities in the tech industry.',
      image: 'boot3.png',
      paid: true,
      rating: 4,
    },
    {
      name: '#2. CodeSpace Academy',
      location: ' Capetown ,South Africa',
      description: 'CodeSpace Academy offers a range of coding bootcamps, including web development, data science, and software engineering programs. They focus on providing practical skills through hands-on projects and real-world experience. CodeSpace is known for its supportive community and a strong emphasis on career placement assistance.',
      image: 'boot4.jpg',
      paid: true,
    },
    {
      name: '#1. Melsoft Academy',
      location: 'Rosebank & Capetown ,South Africa',
      description: 'Melsoft Academy is an educational institution that offers programs designed to help individuals acquire the skills needed for careers in software engineering and related fields. Their approach is student-centric.',
      image: 'boot5.png',
      paid: true,
      rating: 4,
    },
  ];

    // Function to generate star symbols based on the rating
    const generateStars = (rating) => {
      const maxRating = 5;
      const stars = [];
  
      for (let i = 1; i <= maxRating; i++) {
        if (i <= rating) {
          stars.push(<span key={i}>&#9733;</span>); // Unicode star character
        } else {
          stars.push(<span key={i}>&#9734;</span>); // Unicode empty star character
        }
      }
  
      return stars;
    };
  
    return (
      <div className="blog-container">
        <h2>Top 5 Coding Bootcamps in South Africa</h2>
        <ul>
          {bootcamps.map((bootcamp, index) => (
            <li key={index}>
              <img src={bootcamp.image} alt={bootcamp.name} className="bootcamp-image" />
              <h3>{bootcamp.name}</h3>
              <p>{bootcamp.description}</p>
              <p><strong>Location:</strong> {bootcamp.location}</p>
              <p><strong>Paid:</strong> {bootcamp.paid ? 'Yes' : 'No'}</p>
              <p><strong>Rating:</strong> {generateStars(bootcamp.rating)}</p>
            </li>
          ))}
        </ul>
           {/* Footer */}
      <footer className="footer">
        <p>&copy; TTW BLOG CODED BY Tionne , Theo , William. All Rights Reserved.</p>
      </footer>
    </div>
  );
};
    

  


export default BlogList;
