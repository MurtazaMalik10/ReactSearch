import React from 'react';
import Navbar from './Navbar';
import Filter from './Filter';
import tourImage from '../assets/tour.jpg';
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
  }
];

const Tours = () => {
    return (
        <div className="tours-page">
            <Navbar />
            <div className="sidebar">
                <Filter />
                <div className="arrow" onClick={() => document.querySelector('.sidebar').classList.toggle('open')}>
                    &#9776; {/* Unicode character for hamburger menu */}
                </div>
            </div>
            <div className="content with-sidebar">
                <div className="tours-container">
                    <h1>All Tour Packages</h1>
                    <div className="row">
                        {tourPackages.map((tour, index) => (
                            <div key={index} className="col-md-4">
                                <div className="tour-card">
                                    <img src={tour.image} alt={tour.title} className="card-img-top" />
                                    <div className="card-body">
                                        <h2 className="card-title">{tour.title}</h2>
                                        <p className="card-text"><strong>Number of Days:</strong> {tour.days}</p>
                                        <p className="card-text"><strong>Price:</strong> ${tour.price}</p>
                                        <p className="card-text"><strong>Services:</strong> {tour.services.join(', ')}</p>
                                        <p className="card-text"><strong>Viewpoints:</strong> {tour.viewpoints.join(', ')}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tours;
