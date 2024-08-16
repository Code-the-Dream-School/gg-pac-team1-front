import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import BackgroundOverlay from './BackgroundOverlay'; 
import DestinationList from './DestinationList'; 
import BackButton from './BackButton'; 
import trendingBackground from '../../images/TrendingDestinations.jpg';

const TrendingDestination = () => {
  const trendingPlaces = [
    {
      city: 'Miami, Florida',
      hotels: '800+ hotels',
      price: '$150/night (avg)',
    },
    {
      city: 'Nashville, Tennessee',
      hotels: '600+ hotels',
      price: '$140/night (avg)',
    },
    {
      city: 'Portland, Oregon',
      hotels: '500+ hotels',
      price: '$130/night (avg)',
    },
    {
      city: 'Savannah, Georgia',
      hotels: '400+ hotels',
      price: '$120/night (avg)',
    },
  ];

  return (
    <div>
      <BackgroundOverlay backgroundImage={trendingBackground} />
      <h1 className="page-title">Trending Destinations</h1>
      <p className="page-description">
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
      <DestinationList destinations={trendingPlaces} />
      <BackButton />
    </div>
  );
};

export default TrendingDestination;
