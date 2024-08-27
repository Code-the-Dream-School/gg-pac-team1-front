import React from 'react';
import DestinationList from './DestinationList';
import BackButton from './BackButton';
import foodiedestinationsImg from '../../images/foodiedestinationsImg.jpg';

// Function to group destinations by city and state and calculate average price
const processFoodieData = (destinationsData) => {
  const destinationsMap = {};

  destinationsData.forEach(({ city, state, price }) => {
    const key = `${city}, ${state}`;
    if (!destinationsMap[key]) {
      destinationsMap[key] = { city, state, totalPrice: 0, count: 0 };
    }
    destinationsMap[key].totalPrice += price;
    destinationsMap[key].count += 1;
  });

  // Convert the map to an array and calculate the average price
  return Object.values(destinationsMap).map(destination => ({
    city: `${destination.city}, ${destination.state}`,
    description: 'Various local cuisines and dining experiences.',
    price: `$${(destination.totalPrice / destination.count).toFixed(2)}/night (avg)`, // Ensure two decimal places
  }));
};

const FoodieDestination = () => {
  const destinationsData = [
    { city: 'New Orleans', state: 'Louisiana', price: 140 },
    { city: 'New York City', state: 'New York', price: 200 },
    { city: 'San Francisco', state: 'California', price: 180 },
    { city: 'Austin', state: 'Texas', price: 150 },
    { city: 'New Orleans', state: 'Louisiana', price: 145 }, // Example of multiple entries
  ];

  const foodiePlaces = processFoodieData(destinationsData);

  return (
    <div style={{ 
      padding: '40px 20px', 
      backgroundColor: '#333', 
      minHeight: '100vh',
      backgroundImage: `url(${foodiedestinationsImg})`,
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
        Foodie Destinations
      </h1>
      
      <DestinationList destinations={foodiePlaces} title="Top Foodie Destinations" />

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
        Foodie destinations are regions celebrated for their diverse and rich culinary landscapes. These destinations cater to travelers with a passion for food, offering a blend of traditional and innovative culinary experiences. Whether you’re indulging in street food, dining at a high-end restaurant, or exploring local markets, these locations are a paradise for food enthusiasts.
        <br /><br />
        Characteristics of a Foodie Destination:
        <br />
        Local Cuisine and Specialties:
        <br />
        Foodie destinations are known for their unique dishes and culinary traditions, reflecting the region’s cultural heritage. Visitors can explore a variety of flavors, from traditional recipes passed down through generations to contemporary dishes that put a twist on the classics.
        <br /><br />
        Vibrant Food Markets and Street Food:
        <br />
        Bustling food markets and street food scenes are common in foodie destinations. These spots offer a chance to taste authentic, local dishes in a casual setting, often prepared by vendors who have perfected their craft over years.
        <br /><br />
        Gourmet Dining and Fine Restaurants:
        <br />
        Alongside local eateries, foodie destinations often boast a selection of gourmet restaurants, where chefs showcase their culinary artistry. These establishments provide exquisite dining experiences, with menus that highlight both local ingredients and international influences.
        <br /><br />
        Culinary Events and Festivals:
        <br />
        Food festivals and events are a hallmark of foodie destinations, celebrating the region’s cuisine and bringing together chefs, food producers, and food lovers. These events offer tastings, cooking demonstrations, and opportunities to discover new flavors.
        <br /><br />
        Cooking Classes and Culinary Tours:
        <br />
        For those who want a deeper dive into the local food culture, foodie destinations frequently offer cooking classes, where participants can learn to prepare regional dishes, and culinary tours that provide insight into the area’s food history and best-kept culinary secrets.
      </p>

      <BackButton />
    </div>
  );
};

export default FoodieDestination;
