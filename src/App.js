import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Tours from './Components/Tours';

function App() {
  const [searchCriteria, setSearchCriteria] = useState({
    location: '',
    fromDate: '',
    toDate: '',
    price: 5000,
  });

  // Function to handle search criteria passed from HomePage
  const handleSearch = (criteria) => {
    setSearchCriteria(criteria);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage onSearch={handleSearch} />} />
        <Route path="/tours" element={<Tours searchCriteria={searchCriteria} />} />
      </Routes>
    </Router>
  );
}

export default App;
