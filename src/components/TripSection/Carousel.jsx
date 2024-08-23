import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ChicagoCarousel from '../../../images/CitiesCarousel/ChicagoCarousel.jpg';
import HollywoodCarousel from '../../../images/CitiesCarousel/HollywoodCarousel.jpg';
import MiamiCarousel from '../../../images/CitiesCarousel/MiamiCarousel.jpg';
import NewYorkCarousel from '../../../images/CitiesCarousel/NewYorkCarousel.jpg';
import SanFransicoCarousel from '../../../images/CitiesCarousel/SanFransicoCarousel.jpg';

const CarouselComponent = () => {
  const navigate = useNavigate();
  
  const cities = [
    {
      name: 'New York City',
      image:  NewYorkCarousel,
      description: 'The city that never sleeps, full of iconic landmarks and vibrant culture.',
    },
    {
      name: 'Los Angeles',
      image: HollywoodCarousel,
      description: 'Home to Hollywood, stunning beaches, and year-round sunshine.',
    },
    {
      name: 'Chicago',
      image: ChicagoCarousel,
      description: 'Known for its impressive architecture and deep-dish pizza.',
    },
    {
      name: 'Miami',
      image: MiamiCarousel,
      description: 'A tropical paradise with beautiful beaches and vibrant nightlife.',
    },
    {
      name: 'San Francisco',
      image:  SanFransicoCarousel,
      description: 'Famous for the Golden Gate Bridge and its rolling hills.',
    },
  ];

  const handleSelect = (city) => {
    navigate('/trip-description', { state: { city } });
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
