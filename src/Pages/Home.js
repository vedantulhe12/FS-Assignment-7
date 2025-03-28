import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import homeImage from '../Assets/home.webp'; // Option 1: Import directly

const Home = () => {
  return (
    <div className="home-container">
      <div className="image-section">
        {/* Option 1: Imported image */}
        <img 
          src={homeImage} 
          alt="Welcome to Our Platform" 
        />

        {/* Option 2: Public folder path */}
        {/* <img 
          src="/Assets/home.webp" 
          alt="Welcome to Our Platform" 
        /> */}
      </div>
      <div className="text-section">
        <h1>Welcome to Our Platform</h1>
        <p>
          Discover a world of possibilities. Our platform offers innovative 
          solutions to help you achieve your goals with ease and efficiency.
        </p>
        <Link to="/signup" className="cta-button">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;