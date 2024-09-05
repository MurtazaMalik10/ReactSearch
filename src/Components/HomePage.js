import React, { useState } from 'react';
import './HomePage.css';
import Navbar from './Navbar';
import backgroundImage from '../assets/cityscape.jpg';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function HomePage({ onSearch }) {
  const [location, setLocation] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [price, setPrice] = useState(5000); // Initial price

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSearch = (e) => {
    e.preventDefault();
    // Send the search criteria to the parent component
    onSearch({ location, fromDate, toDate, price });

    // Navigate to the Tours page
    navigate('/tours');
  };

  return (
    <div
      className="homepage"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
      }}
    >
      <Navbar />
      <div className="hero-section">
        <div className="search-bar-container">
          <h1>Find Your Next Adventure</h1>
          <form className="search-form" onSubmit={handleSearch}>
            {/* Location Input */}
            <input
              type="text"
              placeholder="Location"
              className="search-input"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            {/* Date Range Picker */}
            <input
              type="date"
              placeholder="From"
              className="date-input"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
            <input
              type="date"
              placeholder="To"
              className="date-input"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />

            {/* Single Price Range Slider */}
            <div className="slider-container">
              <label>Price Range: Up to {price}</label>
              <input
                type="range"
                min="1000"
                max="10000"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="price-slider"
              />
            </div>

            <button type="submit" className="search-button">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
