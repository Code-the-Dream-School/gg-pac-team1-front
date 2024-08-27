import React from 'react';
import DestinationList from './DestinationList';
import BackButton from './BackButton';
import budgetTravel from '../../images/Budgettravel.jpg';

// Function to group hotels by city and calculate average price
const processHotelData = (hotelsData) => {
  const destinationsMap = {};

  hotelsData.forEach(({ city, state, price }) => {
    const key = `${city}, ${state}`;
    if (!destinationsMap[key]) {
      destinationsMap[key] = { city, state, hotelsCount: 0, totalPrice: 0 };
    }
    destinationsMap[key].hotelsCount += 1;
    destinationsMap[key].totalPrice += price;
  });

  // Convert the map to an array and calculate the average price
  return Object.values(destinationsMap).map(destination => ({
    city: `${destination.city}, ${destination.state}`,
    hotels: `${destination.hotelsCount} hotels`,
    price: `$${(destination.totalPrice / destination.hotelsCount).toFixed(2)}/night (avg)`,
  }));
};

const BudgetTravel = () => {
  const hotelsData = [
    { city: 'New Orleans', state: 'Louisiana', price: 100 },
    { city: 'Austin', state: 'Texas', price: 110 },
    { city: 'Las Vegas', state: 'Nevada', price: 90 },
    { city: 'Asheville', state: 'North Carolina', price: 95 },
    { city: 'New Orleans', state: 'Louisiana', price: 105 }, // Another hotel in New Orleans for demo
    { city: 'Austin', state: 'Texas', price: 115 }, // Another hotel in Austin
  ];

  const budgetPlaces = processHotelData(hotelsData);

  return (
    <div style={{ 
      padding: '40px 20px', 
      backgroundColor: '#333', 
      minHeight: '100vh',
      backgroundImage: `url(${budgetTravel})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        fontSize: '2.5rem', 
        color: '#fff', 
        marginBottom: '30px', 
        fontFamily: "'Montserrat', sans-serif" 
      }}>
        Budget Travel Destinations
      </h1>

      <DestinationList destinations={budgetPlaces} title="Top Budget Travel Spots" />

      <p style={{ 
        fontSize: '1rem', 
        color: '#fff', 
        lineHeight: '1.6', 
        maxWidth: '800px', 
        margin: '40px auto', 
        textAlign: 'justify', 
        fontFamily: "'Lato', sans-serif",
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        padding: '20px', 
        borderRadius: '8px' 
      }}>
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
