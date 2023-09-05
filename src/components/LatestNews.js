import React, { useState, useEffect } from 'react';
import './LatestNews.css'; // Import your CSS file

const LatestNews = () => {
  // Sample news data (you can replace this with your actual data)
  const newsData = [
    {
      id: 1,
      title: 'AI',
      image: 'tech1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'Uproar over AI',
      image: 'tech2.jpg',
      description: 'Is Artificial Intelligence the start of the end? Will we see a rise in unemployment? Check out this article and find out.',
    },
    {
      id: 3,
      title: 'Breaking News 3',
      image: 'tech3.jpg',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
      id: 4,
      title: 'Breaking News 4',
      image: 'tech4.jpg',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
        id: 4,
        title: 'Breaking News 4',
        image: 'tech1.jpg',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
      {
        id: 4,
        title: 'Breaking News 4',
        image: 'tech1.jpg',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
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
