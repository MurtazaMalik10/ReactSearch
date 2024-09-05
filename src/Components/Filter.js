import React, { useState } from 'react';
import './Filter.css'; // Ensure you have styling for the filter component

const Filter = ({ onFilterChange }) => {
  const defaultFilters = {
    services: [],
    locations: [],
    viewpoints: [],
    priceRange: [0, 5000], // Default price range
    daysRange: [1, 30] // Default number of days range
  };

  const [filters, setFilters] = useState(defaultFilters);

  // Handle checkbox selection for services, locations, and viewpoints
  const handleCheckboxChange = (category, value) => {
    setFilters(prevFilters => {
      const updatedCategory = prevFilters[category].includes(value)
        ? prevFilters[category].filter(item => item !== value)
        : [...prevFilters[category], value];

      const updatedFilters = { ...prevFilters, [category]: updatedCategory };
      onFilterChange(updatedFilters); // Pass updated filters to parent
      return updatedFilters;
    });
  };

  // Handle range sliders (price and days)
  const handleRangeChange = (rangeType, newRange) => {
    setFilters(prevFilters => {
      const updatedFilters = { ...prevFilters, [rangeType]: newRange };
      onFilterChange(updatedFilters); // Pass updated filters to parent
      return updatedFilters;
    });
  };

  // Trigger filter change whenever a filter is modified
  const applyFilters = () => {
    onFilterChange(filters);
  };

  // Reset all filters to default values
  const resetFilters = () => {
    setFilters(defaultFilters);
    onFilterChange(defaultFilters); // Pass default filters to parent
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
            checked={filters.services.includes('Transportation')}
            onChange={() => handleCheckboxChange('services', 'Transportation')}
          />
          Transportation
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.services.includes('Accommodation')}
            onChange={() => handleCheckboxChange('services', 'Accommodation')}
          />
          Accommodation
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.services.includes('Guide')}
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
            checked={filters.locations.includes('Hunza Valley')}
            onChange={() => handleCheckboxChange('locations', 'Hunza Valley')}
          />
          Hunza Valley
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.locations.includes('Skardu')}
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
            checked={filters.viewpoints.includes('Baltit Fort')}
            onChange={() => handleCheckboxChange('viewpoints', 'Baltit Fort')}
          />
          Baltit Fort
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.viewpoints.includes('Nanga Parbat')}
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

      <button className="apply-filter-button" onClick={applyFilters}>Apply Filters</button>
      <button className="reset-filter-button" onClick={resetFilters}>Reset Filters</button>
    </div>
  );
};

export default Filter;
