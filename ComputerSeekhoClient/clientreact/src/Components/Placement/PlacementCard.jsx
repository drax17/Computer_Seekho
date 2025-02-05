import React from 'react';
import './PlacementCard.css';

const PlacementCard = ({ batch, logo, name }) => {
  return (
    <div className="placement-card">
      <img src={logo} alt={`${name} logo`} />
      <h2>{batch}</h2>
      <p>{name}</p>
    </div>
  );
};

export default PlacementCard;