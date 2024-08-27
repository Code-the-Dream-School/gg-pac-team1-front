import React from 'react';
import DestinationList from './DestinationList';
import BackButton from './BackButton';
import budgetTravel from '../../images/Budgettravel.jpg';

const BudgetTravel = () => {
  const budgetSpots = [
    {
      city: 'New Orleans, Louisiana',
      hotels: 600,
      price: 100,
    },
    {
      city: 'Austin, Texas',
      hotels: 700,
      price: 110,
    },
    {
      city: 'Las Vegas, Nevada',
      hotels: 1000,
      price: 90,
    },
    {
      city: 'Asheville, North Carolina',
      hotels: 400,
      price: 95,
    },
  ];

  const calculateAveragePrice = (spots) => {
    const stateCityMap = {};
    spots.forEach((spot) => {
      const [city, state] = spot.city.split(', ');
      if (!stateCityMap[state]) {
        stateCityMap[state] = [];
      }
      stateCityMap[state].push({
        city,
        hotels: spot.hotels,
        price: spot.price,
      });
    });

    for (const state in stateCityMap) {
      stateCityMap[state].forEach((location) => {
        location.averagePrice = location.price / location.hotels;
      });
    }

    return stateCityMap;
  };

  const separatedBudgetSpots = calculateAveragePrice(budgetSpots);

  return (
    <div
      style={{
        padding: '40px 20px',
        backgroundColor: '#333',
        minHeight: '100vh',
        backgroundImage: `url(${budgetTravel})`, // Set background image
        backgroundSize: 'cover', // Cover the whole container
        backgroundPosition: 'center', // Center the background image
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          color: '#fff',
          marginBottom: '30px',
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        Budget Travel Destinations
      </h1>
      <DestinationList destinations={budgetSpots} title="Top Budget Travel Spots" />
      <p
        style={{
          fontSize: '1rem',
          color: '#fff',
          lineHeight: '1.6',
          maxWidth: '800px',
          margin: '40px auto 0',
          textAlign: 'justify',
          fontFamily: "'Lato', sans-serif",
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '20px',
          borderRadius: '8px',
        }}
      >
        Budget destinations are locations where families can enjoy a memorable vacation without breaking the bank. These destinations typically offer affordable accommodations, dining options, and activities that provide great value. Here’s what defines a budget-friendly destination:
        <br /><br />
        1. <strong>Affordable Accommodations</strong><br />
        Budget Hotels & Motels: These destinations offer a range of budget-friendly lodging options, including motels, inns, and budget hotels that provide basic amenities at lower prices.
        <br /><br />
        2. <strong>Why Choose a Budget Destination?</strong><br />
        Cost Savings: These destinations allow families to enjoy a vacation without the high costs associated with more popular or luxury destinations.
        <br />
        Value for Money: Even with a smaller budget, families can still enjoy a wide range of activities and experiences.
        <br />
        Accessibility: Many budget destinations are easy to reach, making them ideal for road trips and weekend getaways.
        <br /><br />
        These budget-friendly destinations ensure that families can have an enjoyable and memorable vacation without overspending.
      </p>
      <BackButton />
    </div>
  );
};

export default BudgetTravel;
