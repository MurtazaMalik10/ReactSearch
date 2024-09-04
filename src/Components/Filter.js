import React, { useState } from 'react';
import './Filter.css'; // Ensure you create corresponding CSS for styling

const Filter = () => {
  const [filters, setFilters] = useState({
    services: [],
    locations: [],
    viewpoints: [],
    priceRange: [0, 5000], // Example range
    daysRange: [1, 30] // Example range
  });

  const handleCheckboxChange = (category, value) => {
    setFilters(prevFilters => {
      const newCategory = prevFilters[category].includes(value)
        ? prevFilters[category].filter(item => item !== value)
        : [...prevFilters[category], value];

      return { ...prevFilters, [category]: newCategory };
    });
  };

  const handleRangeChange = (rangeType, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [rangeType]: value
    }));
  };

  return (
    <div className="filter-container">
      <h2 className="filter-title">Filters</h2>
      
      {/* Services Filter */}
      <div className="filter-group">
        <h3>Services</h3>
        <label>
          <input
            type="checkbox"
            onChange={() => handleCheckboxChange('services', 'Transportation')}
          />
          Transportation
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => handleCheckboxChange('services', 'Accommodation')}
          />
          Accommodation
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => handleCheckboxChange('services', 'Guide')}
          />
          Guide
        </label>
        {/* Add more services as needed */}
      </div>
      
      {/* Locations Filter */}
      <div className="filter-group">
        <h3>Locations</h3>
        <label>
          <input
            type="checkbox"
            onChange={() => handleCheckboxChange('locations', 'Hunza Valley')}
          />
          Hunza Valley
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => handleCheckboxChange('locations', 'Skardu')}
          />
          Skardu
        </label>
        {/* Add more locations as needed */}
      </div>
      
      {/* Viewpoints Filter */}
      <div className="filter-group">
        <h3>Viewpoints</h3>
        <label>
          <input
            type="checkbox"
            onChange={() => handleCheckboxChange('viewpoints', 'Baltit Fort')}
          />
          Baltit Fort
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => handleCheckboxChange('viewpoints', 'Nanga Parbat')}
          />
          Nanga Parbat
        </label>
        {/* Add more viewpoints as needed */}
      </div>
      
      {/* Price Range Filter */}
      <div className="filter-group">
        <h3>Price Range</h3>
        <input
          type="range"
          min="0"
          max="5000"
          value={filters.priceRange[0]}
          onChange={(e) => handleRangeChange('priceRange', [Number(e.target.value), filters.priceRange[1]])}
        />
        <input
          type="range"
          min="0"
          max="5000"
          value={filters.priceRange[1]}
          onChange={(e) => handleRangeChange('priceRange', [filters.priceRange[0], Number(e.target.value)])}
        />
        <p>Price: ${filters.priceRange[0]} - ${filters.priceRange[1]}</p>
      </div>
      
      {/* Number of Days Filter */}
      <div className="filter-group">
        <h3>Number of Days</h3>
        <input
          type="range"
          min="1"
          max="30"
          value={filters.daysRange[0]}
          onChange={(e) => handleRangeChange('daysRange', [Number(e.target.value), filters.daysRange[1]])}
        />
        <input
          type="range"
          min="1"
          max="30"
          value={filters.daysRange[1]}
          onChange={(e) => handleRangeChange('daysRange', [filters.daysRange[0], Number(e.target.value)])}
        />
        <p>Days: {filters.daysRange[0]} - {filters.daysRange[1]}</p>
      </div>
    </div>
  );
};

export default Filter;
