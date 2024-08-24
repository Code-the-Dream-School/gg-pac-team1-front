import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import './DestinationCard.css';

const DestinationCard = ({ title, text, link, backgroundImage }) => {
  return (
    <Card className="destination-card" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary" href={link}>Explore</Button>
      </Card.Body>
    </Card>
  );
}

DestinationCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

export default DestinationCard;
