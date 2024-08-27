import React from 'react';
import DestinationList from './DestinationList';
import BackButton from './BackButton';
import WellnessImage from '../../images/WellnessImage.jpg'; 

// Function to group hotels by city and calculate average price
const processHotelData = (hotelsData) => {
  const retreatsMap = {};

  hotelsData.forEach(({ city, state, price }) => {
    const key = `${city}, ${state}`;
    if (!retreatsMap[key]) {
      retreatsMap[key] = { city, state, hotelsCount: 0, totalPrice: 0 };
    }
    retreatsMap[key].hotelsCount += 1;
    retreatsMap[key].totalPrice += price;
  });

  // Convert the map to an array and calculate the average price
  return Object.values(retreatsMap).map(retreat => ({
    city: `${retreat.city}, ${retreat.state}`,
    hotels: `${retreat.hotelsCount} hotels`,
    price: `$${(retreat.totalPrice / retreat.hotelsCount).toFixed(2)}/night (avg)`,
  }));
};

const Wellness = () => {
  const hotelsData = [
    { city: 'Sedona', state: 'Arizona', price: 220 },
    { city: 'Oahu', state: 'Hawaii', price: 250 },
    { city: 'Aspen', state: 'Colorado', price: 300 },
    { city: 'Palm Springs', state: 'California', price: 210 },
    { city: 'Sedona', state: 'Arizona', price: 230 }, // Another hotel in Sedona for demo
    { city: 'Oahu', state: 'Hawaii', price: 260 }, // Another hotel in Oahu
  ];

  const retreats = processHotelData(hotelsData);

  return (
    <div style={{ 
      padding: '40px 20px', 
      minHeight: '100vh',
      backgroundImage: `url(${WellnessImage})`, 
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
        Wellness Retreats
      </h1>

      <DestinationList destinations={retreats} title="Top Wellness Retreats" />

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
        Wellness destinations are locations specifically designed to promote health and well-being through a variety of activities, treatments, and environments. These destinations often focus on relaxation, rejuvenation, and holistic health, offering experiences that help travelers disconnect from the stresses of daily life and reconnect with themselves. Here’s what defines a wellness destination:
        <br /><br />
        1. <strong>Spa and Treatment Centers</strong><br />
        Luxury Spas: Wellness destinations often feature world-class spas offering a range of treatments such as massages, facials, body wraps, and hydrotherapy. These spas are typically set in serene environments to enhance relaxation.
        <br />
        Holistic Therapies: Many wellness resorts offer holistic therapies, including acupuncture, reflexology, aromatherapy, and energy healing practices like Reiki.
        <br /><br />
        2. <strong>Mindfulness and Meditation</strong><br />
        Meditation Retreats: Wellness destinations frequently include meditation sessions, guided mindfulness practices, and yoga retreats that help travelers cultivate inner peace and mental clarity.
        <br />
        Silent Retreats: Some destinations offer silent retreats where guests can immerse themselves in quiet contemplation and disconnect from digital distractions.
        <br /><br />
        3. <strong>Physical Fitness and Outdoor Activities</strong><br />
        Yoga and Pilates: Wellness resorts often offer daily yoga and Pilates classes, focusing on flexibility, strength, and mental well-being. These classes are often held in picturesque settings, such as on the beach or in the mountains.
        <br />
        Hiking and Nature Walks: Many wellness destinations are located in areas with beautiful natural surroundings, offering guided hikes, nature walks, and other outdoor activities that promote physical fitness and mental relaxation.
        <br />
        Water Activities: Activities like paddleboarding, kayaking, and swimming in natural bodies of water are common in wellness destinations, combining fitness with the calming effects of water.
        <br /><br />
        4. <strong>Healthy Eating and Nutrition</strong><br />
        Farm-to-Table Dining: Wellness destinations often emphasize healthy, organic, and locally-sourced food. Farm-to-table dining experiences provide nutritious meals designed to nourish the body and mind.
        <br />
        Detox Programs: Some wellness resorts offer detox programs that focus on cleansing the body through specialized diets, juices, and herbal treatments.
        <br />
        Cooking Classes: Guests may also have the opportunity to participate in healthy cooking classes, learning how to prepare nutritious meals that they can incorporate into their daily lives.
        <br /><br />
        5. <strong>Mental and Emotional Health</strong><br />
        Wellness Workshops: Workshops focused on mental and emotional health, such as stress management, mindfulness, and personal development, are common in wellness destinations.
        <br />
        Counseling and Life Coaching: Some wellness retreats offer sessions with counselors or life coaches to help guests work through personal challenges and set positive life goals.
        <br /><br />
        6. <strong>Eco-Friendly and Sustainable Practices</strong><br />
        Sustainable Accommodations: Many wellness destinations are committed to sustainability, offering eco-friendly accommodations that minimize environmental impact. These may include the use of renewable energy, water conservation, and organic materials.
        <br />
        Connection with Nature: These destinations often emphasize a deep connection with nature, encouraging guests to unplug from technology and immerse themselves in natural surroundings.
      </p>

      <BackButton />
    </div>
  );
};

export default Wellness;
