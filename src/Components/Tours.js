import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Filter from './Filter';
import tourImage from '../assets/tour.jpg'; // Placeholder image
import './Tours.css';

const tourPackages = [
  {
    title: 'Explore the Northern Areas',
    days: 7,
    price: 1500,
    services: ['Transportation', 'Accommodation', 'Guide'],
    viewpoints: ['Hunza Valley', 'Skardu', 'Naltar Valley'],
    image: tourImage
  },
  {
    title: 'Cultural Karachi Tour',
    days: 5,
    price: 1000,
    services: ['Transportation', 'Accommodation'],
    viewpoints: ['Clifton Beach', 'Faisal Mosque', 'Karimabad'],
    image: tourImage
  },
  {
    title: 'Lahore Heritage Tour',
    days: 3,
    price: 800,
    services: ['Transportation', 'Accommodation'],
    viewpoints: ['Lahore Fort', 'Badshahi Mosque', 'Shalimar Gardens'],
    image: tourImage
  },
  {
    title: 'Mountain Adventure in Swat',
    days: 6,
    price: 1200,
    services: ['Transportation', 'Accommodation', 'Guide'],
    viewpoints: ['Mingora', 'Malam Jabba', 'Kalam Valley'],
    image: tourImage
  },
  {
    title: 'Islamabad City Tour',
    days: 4,
    price: 900,
    services: ['Transportation', 'Accommodation'],
    viewpoints: ['Faisal Mosque', 'Daman-e-Koh', 'Pakistan Monument'],
    image: tourImage
  },
  {
    title: 'Desert Safari in Thar',
    days: 5,
    price: 1100,
    services: ['Transportation', 'Accommodation', 'Guide'],
    viewpoints: ['Thar Desert', 'Mithi', 'Chachro'],
    image: tourImage
  },
  {
    title: 'K2 Base Camp Trek',
    days: 12,
    price: 2500,
    services: ['Transportation', 'Accommodation', 'Guide'],
    viewpoints: ['K2 Base Camp', 'Gondogoro La'],
    image: tourImage
  },
  {
    title: 'Fairy Meadows Retreat',
    days: 5,
    price: 1300,
    services: ['Transportation', 'Accommodation'],
    viewpoints: ['Fairy Meadows', 'Nanga Parbat'],
    image: tourImage
  },
  {
    title: 'Historical Peshawar Tour',
    days: 3,
    price: 700,
    services: ['Transportation', 'Accommodation'],
    viewpoints: ['Qissa Khwani Bazaar', 'Peshawar Museum', 'Khyber Pass'],
    image: tourImage
  },
  {
    title: 'Multan Cultural Experience',
    days: 4,
    price: 850,
    services: ['Transportation', 'Accommodation'],
    viewpoints: ['Multan Fort', 'Shrine of Bahauddin Zakariya'],
    image: tourImage
  },
  {
    title: 'Neelum Valley Journey',
    days: 8,
    price: 1600,
    services: ['Transportation', 'Accommodation', 'Guide'],
    viewpoints: ['Keran', 'Shounter Lake', 'Kel'],
    image: tourImage
  },
  {
    title: 'Skardu Adventure Tour',
    days: 7,
    price: 1400,
    services: ['Transportation', 'Accommodation', 'Guide'],
    viewpoints: ['Skardu Lake', 'Deosai Plains', 'Shigar Fort'],
    image: tourImage
  },
  {
    title: 'Karimabad Exploration',
    days: 6,
    price: 1200,
    services: ['Transportation', 'Accommodation'],
    viewpoints: ['Karimabad', 'Baltit Fort', 'Husseini Suspension Bridge'],
    image: tourImage
  },
  {
    title: 'Ratti Gali Trek',
    days: 5,
    price: 1100,
    services: ['Transportation', 'Accommodation', 'Guide'],
    viewpoints: ['Ratti Gali Lake'],
    image: tourImage
  },
  {
    title: 'Chitral and Kalash Valleys',
    days: 9,
    price: 2000,
    services: ['Transportation', 'Accommodation', 'Guide'],
    viewpoints: ['Chitral Fort', 'Kalash Valleys'],
    image: tourImage
  },
  {
    title: 'Hiking in Margalla Hills',
    days: 2,
    price: 300,
    services: ['Guide'],
    viewpoints: ['Margalla Hills'],
    image: tourImage
  },
  {
    title: 'Nathia Gali Retreat',
    days: 4,
    price: 850,
    services: ['Transportation', 'Accommodation'],
    viewpoints: ['Nathia Gali', 'Dunga Gali'],
    image: tourImage
  },
  {
    title: 'Swat Valley Exploration',
    days: 6,
    price: 1300,
    services: ['Transportation', 'Accommodation'],
    viewpoints: ['Swat Valley', 'Malam Jabba'],
    image: tourImage
  },
  {
    title: 'Gorakh Hill Station',
    days: 3,
    price: 600,
    services: ['Transportation'],
    viewpoints: ['Gorakh Hill'],
    image: tourImage
  },
  {
    title: 'Jhelum River Tour',
    days: 4,
    price: 800,
    services: ['Transportation'],
    viewpoints: ['Jhelum River'],
    image: tourImage
  },
  {
    title: 'Hingol National Park',
    days: 5,
    price: 900,
    services: ['Transportation', 'Guide'],
    viewpoints: ['Hingol National Park'],
    image: tourImage
  },
  {
    title: 'Ratti Gali Lake Trek',
    days: 4,
    price: 1000,
    services: ['Transportation', 'Accommodation', 'Guide'],
    viewpoints: ['Ratti Gali Lake'],
    image: tourImage
  },
  {
    title: 'Wadi-e-Sheikhupura',
    days: 3,
    price: 700,
    services: ['Transportation'],
    viewpoints: ['Sheikhupura'],
    image: tourImage
  },
  {
    title: 'Chitral Adventure Tour',
    days: 6,
    price: 1500,
    services: ['Transportation', 'Accommodation', 'Guide'],
    viewpoints: ['Chitral', 'Kalash Valleys'],
    image: tourImage
  },
  // Additional Tours
  {
    title: 'Hunza Valley Discovery',
    days: 7,
    price: 1400,
    services: ['Transportation', 'Accommodation', 'Guide'],
    viewpoints: ['Hunza Valley', 'Attabad Lake', 'Passu Cones'],
    image: tourImage
  },
  {
    title: 'Shangrila Resort Experience',
    days: 5,
    price: 1200,
    services: ['Transportation', 'Accommodation'],
    viewpoints: ['Shangrila Resort', 'Lower Kachura Lake'],
    image: tourImage
  },
  {
    title: 'Babusar Top Adventure',
    days: 4,
    price: 950,
    services: ['Transportation', 'Accommodation'],
    viewpoints: ['Babusar Top', 'Lulusar Lake'],
    image: tourImage
  },
  {
    title: 'Gilgit-Baltistan Highlights',
    days: 10,
    price: 2200,
    services: ['Transportation', 'Accommodation', 'Guide'],
    viewpoints: ['Gilgit', 'Hunza', 'Skardu', 'Deosai'],
    image: tourImage
  },
  {
    title: 'Sost and Khunjerab Pass',
    days: 6,
    price: 1300,
    services: ['Transportation', 'Accommodation'],
    viewpoints: ['Sost', 'Khunjerab Pass'],
    image: tourImage
  },
  {
    title: 'Malam Jabba Ski Resort',
    days: 4,
    price: 900,
    services: ['Transportation', 'Accommodation', 'Guide'],
    viewpoints: ['Malam Jabba'],
    image: tourImage
  },
  {
    title: 'Astore Valley Experience',
    days: 6,
    price: 1400,
    services: ['Transportation', 'Accommodation', 'Guide'],
    viewpoints: ['Astore Valley', 'Ratti Gali Lake'],
    image: tourImage
  },
  {
    title: 'Ratti Gali Summit Trek',
    days: 5,
    price: 1200,
    services: ['Transportation', 'Accommodation', 'Guide'],
    viewpoints: ['Ratti Gali Summit'],
    image: tourImage
  },
  {
    title: 'Naltar Valley Skiing',
    days: 5,
    price: 1100,
    services: ['Transportation', 'Accommodation', 'Guide'],
    viewpoints: ['Naltar Valley'],
    image: tourImage
  },
  {
    title: 'Sost to Hunza',
    days: 3,
    price: 700,
    services: ['Transportation'],
    viewpoints: ['Sost', 'Hunza Valley'],
    image: tourImage
  },
  {
    title: 'Kalam Valley Adventure',
    days: 6,
    price: 1300,
    services: ['Transportation', 'Accommodation', 'Guide'],
    viewpoints: ['Kalam Valley', 'Malam Jabba'],
    image: tourImage
  },
  {
    title: 'Naran Kaghan Journey',
    days: 7,
    price: 1500,
    services: ['Transportation', 'Accommodation', 'Guide'],
    viewpoints: ['Naran', 'Kaghan', 'Saif-ul-Malook'],
    image: tourImage
  },
  {
    title: 'Gulmit and Passu',
    days: 4,
    price: 900,
    services: ['Transportation', 'Accommodation'],
    viewpoints: ['Gulmit', 'Passu'],
    image: tourImage
  },
  {
    title: 'Khunjerab Pass Exploration',
    days: 5,
    price: 1100,
    services: ['Transportation', 'Accommodation'],
    viewpoints: ['Khunjerab Pass'],
    image: tourImage
  },
  {
    title: 'Skardu Lakes and Forts',
    days: 6,
    price: 1400,
    services: ['Transportation', 'Accommodation', 'Guide'],
    viewpoints: ['Skardu Lake', 'Shigar Fort'],
    image: tourImage
  },
  {
    title: 'Baltit Fort and Karimabad',
    days: 3,
    price: 800,
    services: ['Transportation', 'Accommodation'],
    viewpoints: ['Baltit Fort', 'Karimabad'],
    image: tourImage
  },
  {
    title: 'Fairy Meadows Adventure',
    days: 5,
    price: 1300,
    services: ['Transportation', 'Accommodation', 'Guide'],
    viewpoints: ['Fairy Meadows', 'Nanga Parbat'],
    image: tourImage
  },
  {
    title: 'Chitral Kalash Valley Journey',
    days: 8,
    price: 1800,
    services: ['Transportation', 'Accommodation', 'Guide'],
    viewpoints: ['Chitral', 'Kalash Valleys'],
    image: tourImage
  },
  {
    title: 'Ratti Gali Valley Trek',
    days: 6,
    price: 1400,
    services: ['Transportation', 'Accommodation', 'Guide'],
    viewpoints: ['Ratti Gali Valley'],
    image: tourImage
  },
  {
    title: 'Hunza Valley Experience',
    days: 5,
    price: 1200,
    services: ['Transportation', 'Accommodation', 'Guide'],
    viewpoints: ['Hunza Valley', 'Attabad Lake', 'Passu Cones'],
    image: tourImage
  },
  {
    title: 'Chitral to Kalash Valleys',
    days: 7,
    price: 1600,
    services: ['Transportation', 'Accommodation', 'Guide'],
    viewpoints: ['Chitral', 'Kalash Valleys'],
    image: tourImage
  }
];

const Tours = ({ searchCriteria }) => {
  const [filteredTours, setFilteredTours] = useState([]);
  const [filters, setFilters] = useState({
    services: [],
    locations: [],
    viewpoints: [],
    priceRange: [0, 5000],
    daysRange: [1, 30]
  });
  
  const applyFilters = (newFilters) => {
    setFilters(newFilters);
  };

  useEffect(() => {
    const { location, fromDate, toDate, price } = searchCriteria;

    const filtered = tourPackages.filter((tour) => {
      const matchesLocation = location ? tour.title.toLowerCase().includes(location.toLowerCase()) : true;
      const matchesPrice = tour.price <= price;

      const matchesService = filters.services.length === 0 || filters.services.every(service => tour.services.includes(service));
      const matchesLocationFilter = filters.locations.length === 0 || filters.locations.some(loc => tour.viewpoints.includes(loc));
      const matchesViewpoint = filters.viewpoints.length === 0 || filters.viewpoints.every(vp => tour.viewpoints.includes(vp));
      const matchesPriceRange = tour.price >= filters.priceRange[0] && tour.price <= filters.priceRange[1];
      const matchesDaysRange = tour.days >= filters.daysRange[0] && tour.days <= filters.daysRange[1];

      return matchesLocation && matchesPrice && matchesService && matchesLocationFilter && matchesViewpoint && matchesPriceRange && matchesDaysRange;
    });

    setFilteredTours(filtered);
  }, [searchCriteria, filters]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate indices for slicing the tours array
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTours.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredTours.length / itemsPerPage);

  // Handler for changing the page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Navbar />
      <div className="content with-sidebar">
        <div className="sidebar">
          <Filter onFilterChange={applyFilters} />
          <div className="arrow" onClick={() => document.querySelector('.sidebar').classList.toggle('open')}>
            &#9776; {/* Unicode character for hamburger menu */}
          </div>
        </div>
        <div className="tours-container">
          <h1>All Tour Packages</h1>
          <div className="row">
            {currentItems.length > 0 ? (
              currentItems.map((tour, index) => (
                <div key={index} className="col-md-4">
                  <div className="tour-card">
                    <img src={tour.image || tourImage} alt={tour.title} className="card-img-top" />
                    <div className="card-body">
                      <h2 className="card-title">{tour.title}</h2>
                      <p className="card-text"><strong>Number of Days:</strong> {tour.days}</p>
                      <p className="card-text"><strong>Price:</strong> ${tour.price}</p>
                      <p className="card-text"><strong>Services:</strong> {tour.services.join(', ')}</p>
                      <p className="card-text"><strong>Viewpoints:</strong> {tour.viewpoints.join(', ')}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No tours match your search criteria.</p>
            )}
          </div>

          {/* Pagination Controls */}
          <div className="pagination">
            <button 
              onClick={() => handlePageChange(currentPage - 1)} 
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {[...Array(totalPages).keys()].map((page) => (
              <button 
                key={page + 1} 
                onClick={() => handlePageChange(page + 1)} 
                className={currentPage === page + 1 ? 'active' : ''}
              >
                {page + 1}
              </button>
            ))}
            <button 
              onClick={() => handlePageChange(currentPage + 1)} 
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tours;