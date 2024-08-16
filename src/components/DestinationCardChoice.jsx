import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';

function DestinationCardChoice({ city, hotels, price }) {
  return (
    <Card style={{ width: '18rem' }}>
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
