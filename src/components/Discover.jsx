import React from 'react';
import DestinationCard from './DestinationCard';

import './DestinationCard.css';
import Wellness from './Wellness';
import WellnessImage from '../../images/WellnessImage.jpg';
import Romantic from './Romantic'
import RomanticImg from '../../images/RomanticImg.jpg'
import FamilyFriendly from './FamilyFriendly';
import FamilyFriendlyImage from '../../images/FamilyFriendlyImage.jpg'
import BudgetTravel from './BudgetTravel';
import BudgetTravelImage from '../../images/Budgettravel.jpg'; 
import TrendingDestination from './TrendingDestination';
import TrendingDestinationsImg from '../../images/TrendingDestinationsImg.jpg';
import FoodieDestination from './FoodieDestination';
import foodiedestinationsImg from '../../images/foodiedestinationsImg.jpg'




function Discover() {
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        <DestinationCard
          title="Family-Friendly"
          text="Discover destinations perfect for families."
          link="/family-friendly"
          backgroundImage={FamilyFriendlyImage}
        />

        <DestinationCard
          title="Wellness"
          text="Find relaxing and rejuvenating spots."
          link="/wellness"
          backgroundImage={WellnessImage}
        />

        <DestinationCard
          title="Budget Travel"
          text="Explore budget-friendly destinations."
          link="/budget-travel"
          backgroundImage={BudgetTravelImage}
        />

        <DestinationCard
          title="Trending Destinations"
          text="Discover the latest trending destinations."
          link="/trending-destinations"
          backgroundImage={TrendingDestinationsImg}
        />

        <DestinationCard
          title="Romantic"
          text="Experience the most romantic getaways."
          link="/romantic"
          backgroundImage={RomanticImg}
        />

        <DestinationCard
          title="Foodie Destinations"
          text="Indulge in the best culinary experiences."
          link="/foodie-destination"
          backgroundImage={foodiedestinationsImg}
        />
        
      </div>
    </div>
  );
}

export default Discover;
