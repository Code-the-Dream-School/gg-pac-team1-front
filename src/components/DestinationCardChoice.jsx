import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function DestinationCardChoice({ city, hotels, price }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/search?city=${encodeURIComponent(city)}`);
  };

  return (
    <Card style={{ width: '18rem', cursor: 'pointer' }} onClick={handleClick}>
      <Card.Header>{city}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>{hotels}</ListGroup.Item>
        <ListGroup.Item>{price}</ListGroup.Item>
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
