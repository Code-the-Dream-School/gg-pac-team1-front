import React from 'react';
import './BackgroundCard.css'; // Import CSS file for styling

const BackgroundCard = ({ imageSrc, title, description }) => {
  return (
    <div className="background-card">
      <img src={imageSrc} className="background-image" alt={title} />
      <div className="overlay">
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default BackgroundCard; // Ensure default export
