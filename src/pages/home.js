import React from 'react';
import HeroSection from '../components/HeroSection';
import NavBar from '../components/NavBar';
import BlogList from '../components/BlogList';
import LatestNews from '../components/LatestNews';



function Home() {
  return (
    
      <div className="App">
        <NavBar />
        <HeroSection />
        <LatestNews />
        <BlogList />
        
      </div>
  
  );
}

export default Home;