import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NewYorkCar from '../../../images/CarouselImg/NewYorkCar.jpg';
import ChicagoCar from '../../../images/CarouselImg/ChicagoCar.jpg';
import SanFrCar from '../../../images/CarouselImg/SanFrCar.jpg';
import MiamiCar from '../../../images/CarouselImg/Miamicar.jpg';
import LaCar from '../../../images/CarouselImg/LaCar.jpg';

const CarouselComponent = () => {
  const navigate = useNavigate();
  
  const cities = [
    {
      name: 'New York City',
      image: NewYorkCar,
      description: 'The city that never sleeps, full of iconic landmarks and vibrant culture.',
      path: '/trip-description-ny',
    },
    {
      name: 'Los Angeles',
      image: LaCar,
      description: 'Home to Hollywood, stunning beaches, and year-round sunshine.',
      path: '/trip-description-la',
    },
    {
      name: 'Chicago',
      image: ChicagoCar,
      description: 'Known for its impressive architecture and deep-dish pizza.',
      path: '/trip-description-chicago', // You might want to set up this route if it exists
    },
    {
      name: 'Miami',
      image: MiamiCar,
      description: 'A tropical paradise with beautiful beaches and vibrant nightlife.',
      path: '/trip-description-miami', // You might want to set up this route if it exists
    },
    {
      name: 'San Francisco',
      image: SanFrCar,
      description: 'Famous for the Golden Gate Bridge and its rolling hills.',
      path: '/trip-description-san-francisco', // You might want to set up this route if it exists
    },
  ];

  const handleSelect = (city) => {
    navigate(city.path, { state: { city } });
  };

  return (
    <Carousel id="carouselExampleCaptions">
      {cities.map((city, index) => (
        <Carousel.Item key={index} onClick={() => handleSelect(city)}>
          <img src={city.image} className="d-block w-100" alt={city.name} />
          <Carousel.Caption>
            <h5>{city.name}</h5>
            <p>{city.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
