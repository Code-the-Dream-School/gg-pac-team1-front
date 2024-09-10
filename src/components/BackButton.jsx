import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const BackButton = () => (
  <div className="d-flex justify-content-center mt-5">
    <Link to="/">
      <Button variant="primary" className="w-auto" style={{ minWidth: '150px' }}>
        Back to Discover
      </Button>
    </Link>
  </div>
);

export default BackButton;
