import React from 'react';
import BackgroundOverlay from './BackgroundOverlay'; // If needed
import DestinationList from './DestinationList';
import BackButton from './BackButton';
import SearchButton from './SearchButton'; // If needed
import BudgetTravelImage from '../../images/BudgetTravel.jpg'; 

const BudgetTravel = () => {
  const budgetSpots = [
    {
      city: 'New Orleans, Louisiana',
      hotels: '600+ hotels',
      price: '$100/night (avg)',
    },
    {
      city: 'Austin, Texas',
      hotels: '700+ hotels',
      price: '$110/night (avg)',
    },
    {
      city: 'Las Vegas, Nevada',
      hotels: '1000+ hotels',
      price: '$90/night (avg)',
    },
    {
      city: 'Asheville, North Carolina',
      hotels: '400+ hotels',
      price: '$95/night (avg)',
    },
  ];

  return (
    <div>
      {/* Uncomment and use BackgroundOverlay if you have a background image */}
      <BackgroundOverlay backgroundImage={BudgetTravelImage} />
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#fff', marginBottom: '30px', fontFamily: "'Montserrat', sans-serif" }}>
        Budget Travel Destinations
      </h1>
      <p style={{ fontSize: '1rem', color: '#fff', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto 40px', textAlign: 'justify', fontFamily: "'Lato', sans-serif" }}>
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
      <DestinationList destinations={budgetSpots} title="Top Budget Travel Spots" />
      <SearchButton /> {/* Add the search button here if needed */}
      <BackButton />
    </div>
  );
};

export default BudgetTravel;
