import React from 'react';
import './BlogList.css';

const BlogList = () => {
  const bootcamps = [
    {
      name: '#5. School of IT',
      description: 'School of IT offers coding bootcamps and IT training programs in South Africa. They cover a range of topics, including web development, software engineering, and cybersecurity. School of IT provides both on-campus and online learning options and focuses on preparing students for industry certifications and job placements.',
      image: 'boot1.jpeg'
    },
    {
      name: '#4. Umuzi Academy',
      description: 'Umuzi Academy is a coding and digital skills training organization in South Africa. They offer programs in web development, data science, and design, with an emphasis on promoting diversity and inclusion in the tech sector. Umuzi Academy provides learners with the skills needed to launch careers in the digital economy.',
      image: 'boot2.png'
    },
    {
      name: '#3. HyperionDev',
      description: 'HyperionDev is a coding bootcamp that offers various programs, including web development, software engineering, and data science courses. They provide flexible learning options, including part-time and full-time courses, with a focus on mentorship and project-based learning. HyperionDev aims to prepare students for career opportunities in the tech industry.',
      image: 'boot3.png'
    },
    {
      name: '#2. CodeSpace Academy',
      description: 'CodeSpace Academy offers a range of coding bootcamps, including web development, data science, and software engineering programs. They focus on providing practical skills through hands-on projects and real-world experience. CodeSpace is known for its supportive community and a strong emphasis on career placement assistance.',
      image: 'boot4.jpg'
    },
    {
      name: '#1. Melsoft Academy',
      description: 'Melsoft Academy is an educational institution that offers programs designed to help individuals acquire the skills needed for careers in software engineering and related fields. Their approach is student-centric.',
      image: 'boot5.png'
    },
  ];

  return (
    <div className="blog-container">
      <h2>Top 5 Coding Bootcamps in South Africa</h2>
      <ul>
        {bootcamps.map((bootcamp, index) => (
          <li key={index}>
            <img src={bootcamp.image} alt={bootcamp.name} className="bootcamp-image" />
            <h3>{bootcamp.name}</h3>
            <p>{bootcamp.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
