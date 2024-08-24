import React from 'react';
import { Row, Col } from 'react-bootstrap';
import DestinationCardChoice from './DestinationCardChoice';

const DestinationList = ({ destinations }) => (
  <Row>
    {destinations.map((destination, index) => (
      <Col md={3} key={index} className="card-container">
        <DestinationCardChoice
          city={destination.city}
          hotels={destination.hotels}
          price={destination.price}
        />
      </Col>
    ))}
  </Row>
);

export default DestinationList;
