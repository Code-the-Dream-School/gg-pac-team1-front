import React from 'react';
import DestinationList from './DestinationList';
import Button from 'react-bootstrap/Button'
import TrendingDestinationsImg from '../../images/TrendingDestinationsImg.jpg';

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

const TrendingDestination = () => {
  const hotelsData = [
    { city: 'Miami', state: 'Florida', price: 150 },
    { city: 'Nashville', state: 'Tennessee', price: 140 },
    { city: 'Portland', state: 'Oregon', price: 130 },
    { city: 'Savannah', state: 'Georgia', price: 120 },
    { city: 'Miami', state: 'Florida', price: 160 }, // Another hotel in Miami for demo
    { city: 'Nashville', state: 'Tennessee', price: 150 }, // Another hotel in Nashville
  ];

  const trendingPlaces = processHotelData(hotelsData);

  return (
    <div style={{ 
      padding: '40px 20px', 
      minHeight: '100vh',
      backgroundImage: `url(${TrendingDestinationsImg})`, 
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
        <Button variant="primary" href={link}>Back</Button>
        
      </h1>

      <DestinationList destinations={trendingPlaces} title="Top Trending Destinations" />

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
        Trending destinations are locations that are currently gaining popularity due to new attractions, cultural significance, or social media buzz. These places often offer a mix of modern experiences and unique local culture, drawing in travelers looking for something fresh and exciting. Here's what characterizes a trending destination:
        <br /><br />
        <strong>1. New or Revitalized Attractions</strong><br />
        Cutting-Edge Museums & Galleries: Trending destinations often feature recently opened or renovated museums, galleries, or cultural centers that attract visitors with unique exhibits and interactive experiences.<br />
        Innovative Architecture: These locations may boast striking new buildings, urban developments, or revitalized neighborhoods that blend modern design with historical elements.<br />
        Entertainment & Events: Popular new festivals, music events, or sports venues can also turn a location into a trending destination.<br /><br />
        <strong>2. Unique Cultural Experiences</strong><br />
        Local Traditions & Cuisine: Trending destinations often highlight unique local traditions, culinary experiences, and cultural events that draw travelers looking to immerse themselves in authentic regional culture.<br />
        Art & Music Scenes: A thriving art and music scene, with emerging local artists, live performances, and vibrant street art, often contributes to a destination's trendiness.<br /><br />
        <strong>3. Social Media Influence</strong><br />
        Instagrammable Spots: These destinations are filled with visually stunning spots—like picturesque landscapes, colorful street art, or architecturally unique buildings—that are frequently shared on social media, boosting their popularity.<br />
        Influencer Endorsements: Social media influencers and travel bloggers often highlight these locations, helping to drive their popularity among a wider audience.
      </p>

      <BackButton />
    </div>
  );
};

export default TrendingDestination;
