import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import DestinationList from './DestinationList';
function DestinationCardChoice({ city, hotels, price }) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/search?city=${encodeURIComponent(city)}`);
  };

  return (
    <Card className="destination-card" onClick={handleClick}>
      <Card.Header className="destination-card-header">{city}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item className="destination-card-item">{hotels}</ListGroup.Item>
        <ListGroup.Item className="destination-card-item">{price}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

DestinationCardChoice.propTypes = {
  city: PropTypes.string.isRequired,
  hotels: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default DestinationCardChoice;
