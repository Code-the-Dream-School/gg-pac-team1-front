import React from 'react';
import DestinationList from './DestinationList';
import BackButton from './BackButton';
import familyFriendlyImage from '../../images/FamilyFriendlyImage.jpg'; // Import your background image

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
  const result = Object.values(destinationsMap).map(destination => ({
    city: `${destination.city}, ${destination.state}`,
    hotels: `${destination.hotelsCount} hotels`,
    price: `$${(destination.totalPrice / destination.hotelsCount).toFixed(2)}/night (avg)`,
  }));

  console.log(result); // Log the result to verify
  return result;
};

const FamilyFriendly = () => {
  const hotelsData = [
    { city: 'Orlando', state: 'Florida', price: 120 },
    { city: 'San Diego', state: 'California', price: 130 },
    { city: 'Yellowstone', state: 'Wyoming', price: 180 },
    { city: 'Washington', state: 'D.C.', price: 160 },
    { city: 'Orlando', state: 'Florida', price: 110 }, 
    { city: 'San Diego', state: 'California', price: 140 }, 
  ];

  const destinations = processHotelData(hotelsData);

  return (
    <div style={{ 
      padding: '40px 20px', 
      minHeight: '100vh',
      backgroundImage: `url(${familyFriendlyImage})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        fontSize: '2.5rem', 
        color: '#fff', 
        marginBottom: '10px', 
        fontFamily: "'Montserrat', sans-serif" 
      }}>
        Family-Friendly Destinations
      </h1>

      <DestinationList destinations={destinations} />

      <p style={{ 
        fontSize: '1rem', 
        color: '#fff', 
        lineHeight: '1.6', 
        maxWidth: '800px', 
        margin: '40px auto', 
        textAlign: 'justify', 
        fontFamily: "'Lato', sans-serif",
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Background color for better text readability
        padding: '20px', // Padding for better spacing
        borderRadius: '8px' // Rounded corners for a softer look
      }}>
        Family-friendly destinations are locations that offer a wide range of activities and amenities designed to cater to families with children. These destinations typically prioritize safety, convenience, and entertainment for all ages, ensuring that both kids and adults can enjoy their vacation. Here are some characteristics that define family-friendly destinations:
        <br /><br />
        1. <strong>Attractions for All Ages</strong><br />
        Theme Parks: Places like Disneyland, Universal Studios, and Legoland are designed with families in mind, offering rides, shows, and experiences suitable for young children, teenagers, and adults.
        <br />
        Zoos & Aquariums: Destinations with large zoos, aquariums, or wildlife parks are great for educational and interactive family experiences.
        <br />
        Museums: Interactive and child-friendly museums, such as science centers or children's museums, provide fun learning opportunities.
        <br /><br />
        2. <strong>Family-Friendly Accommodations</strong><br />
        Hotels with Family Suites: Many family-friendly destinations offer accommodations with larger rooms or suites that can comfortably fit families, along with amenities like cribs, bunk beds, and kitchenettes.
        <br />
        Resorts with Kids Clubs: Some resorts feature kids' clubs, where children can engage in supervised activities while parents enjoy some time to themselves.
        <br />
        Family Resorts: Resorts specifically tailored for families may include water parks, multiple pools, playgrounds, and babysitting services.
      </p>

      <BackButton />
    </div>
  );
};

export default FamilyFriendly;
