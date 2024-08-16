import React from 'react';
import DestinationCard from './DestinationCard';
import './Discover.css';
import './DestinationCard.css';

function Discover() {
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        <DestinationCard
          title="Family-Friendly"
          text="Discover destinations perfect for families."
          link="/family-friendly"
          backgroundImage="https://source.unsplash.com/1600x900/?family-vacation"
        />

        <DestinationCard
          title="Wellness"
          text="Find relaxing and rejuvenating spots."
          link="/wellness"
          backgroundImage="https://source.unsplash.com/1600x900/?wellness"
        />

        <DestinationCard
          title="Budget Travel"
          text="Explore budget-friendly destinations."
          link="/budget-travel"
          backgroundImage="https://source.unsplash.com/1600x900/?budget-travel"
        />

        <DestinationCard
          title="Trending Destinations"
          text="Discover the latest trending destinations."
          link="/trending-destinations"
          backgroundImage="https://source.unsplash.com/1600x900/?trending-destination"
        />

        <DestinationCard
          title="Romantic"
          text="Experience the most romantic getaways."
          link="/romantic"
          backgroundImage="https://source.unsplash.com/1600x900/?romantic-getaway"
        />

        <DestinationCard
          title="Foodie Destinations"
          text="Indulge in the best culinary experiences."
          link="/foodie-destination"
          backgroundImage="https://source.unsplash.com/1600x900/?food"
        />
        
      </div>
    </div>
  );
}

export default Discover;
