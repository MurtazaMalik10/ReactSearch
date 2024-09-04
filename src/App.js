import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Tours from './Components/Tours';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tours" element={<Tours />} />
      </Routes>
    </Router>
  );
}

export default App;