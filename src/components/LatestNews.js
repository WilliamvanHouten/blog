import React, { useState, useEffect } from 'react';
import './LatestNews.css'; // Import your CSS file

const LatestNews = () => {
  // Sample news data (you can replace this with your actual data)
  const newsData = [
    {
      id: 1,
      title: 'AI',
      image: 'tech1.jpg',
      description: 'New Deep Learning Algorithm Achieves Human-Level Understanding.',
    },
    {
      id: 2,
      title: 'Uproar over AI',
      image: 'tech2.jpg',
      description: 'Is Artificial Intelligence the start of the end? Will we see a rise in unemployment? Check out this article and find out.',
    },
    {
      id: 3,
      title: 'Robotics & AI',
      image: 'tech3.jpg',
      description: 'Autonomous Robots Set to Transform Manufacturing Industries.',
    },
    {
      id: 4,
      title: 'Tech salaries soar',
      image: 'tech4.jpg',
      description: ' IT Professionals Enjoy Record High Paychecks.',
    },
    {
        id: 4,
        title: 'Tech Talent Shortage',
        image: 'tech1.jpg',
        description: 'Software Engineers in High Demand as Tech Industry Faces Talent Shortage',
      },
      {
        id: 4,
        title: 'In-Demand Tech Languages:',
        image: 'tech1.jpg',
        description: ' Python and JavaScript Dominate Job Listings.',
      }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the index of the next slide
      const nextIndex = (currentIndex + 1) % newsData.length;
      setCurrentIndex(nextIndex);
    }, 5000); // Auto-advance every 10 seconds (10000 milliseconds)

    // Clean up the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, newsData.length]);

  return (
    <div className="latest-news-container">
        <h2 className="news-header">LATEST NEWS</h2>
      <div className="slider">
        {newsData.map((newsItem, index) => (
          <div
            key={newsItem.id}
            className={`news-item ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={newsItem.image} alt={newsItem.title} className="news-image" />
            <h3 className="news-title">{newsItem.title}</h3>
            <p className="news-description">{newsItem.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
