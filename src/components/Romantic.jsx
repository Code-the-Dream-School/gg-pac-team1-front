import React from 'react';
import BackgroundOverlay from './BackgroundOverlay';
import DestinationList from './DestinationList';
import BackButton from './BackButton';
import Romantic from '../../images/DiscoverySection/Romantic.jpg';

const RomanticDestinations = () => {
  const destinations = [
    {
      city: 'Napa Valley, California',
      hotels: '300+ hotels',
      price: '$250/night (avg)',
    },
    {
      city: 'Charleston, South Carolina',
      hotels: '400+ hotels',
      price: '$220/night (avg)',
    },
    {
      city: 'Sedona, Arizona',
      hotels: '200+ hotels',
      price: '$230/night (avg)',
    },
    {
      city: 'Key West, Florida',
      hotels: '150+ hotels',
      price: '$270/night (avg)',
    },
  ];

  return (
    <div>
      <BackgroundOverlay backgroundImage={romanticBackground} />
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#fff', marginBottom: '30px', fontFamily: "'Montserrat', sans-serif" }}>
        Romantic Destinations in the USA
      </h1>
      <p style={{ fontSize: '1rem', color: '#fff', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto 40px', textAlign: 'justify', fontFamily: "'Lato', sans-serif" }}>
        Imagine a place where time seems to slow down, and the beauty of nature creates an intimate setting for love to flourish. Nestled between rolling vineyards and majestic mountains, this romantic getaway offers couples the perfect blend of luxury and tranquility. The air is filled with the fragrance of blooming flowers and fresh grapes, while the golden hues of the sunset paint the sky in a breathtaking display of color.
        <br /><br />
        As you stroll through charming streets lined with quaint boutiques and cafes, you can feel the history and romance in every corner. The cobblestone pathways lead to cozy restaurants where candlelit dinners are accompanied by world-class wines, each sip more delightful than the last. For those seeking adventure, a hot air balloon ride at dawn provides a panoramic view of the stunning landscape, creating memories that will last a lifetime.
        <br /><br />
        In the evenings, retreat to a luxurious suite where a private balcony offers unobstructed views of the starry sky. The gentle rustling of leaves and the distant sound of a flowing river provide the perfect soundtrack to a night of romance. Whether you’re celebrating a honeymoon, anniversary, or simply the joy of being together, this destination is designed to make every moment magical.
      </p>
      <DestinationList destinations={destinations} />
      <BackButton />
    </div>
  );
};

export default RomanticDestinations;
