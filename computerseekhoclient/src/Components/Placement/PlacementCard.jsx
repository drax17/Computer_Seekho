import React from "react";

const PlacementCard = ({ batch, logo, name }) => {
  return (
    <div className="bg-white shadow-lg p-4 rounded-lg text-center">
      <img src={logo} alt={name} className="mx-auto w-10 h-20 object-contain" />
      <h3 className="text-lg font-bold mt-2">{name}</h3>
      <p className="text-gray-500">{batch}</p>
    </div>
  );
};

export default PlacementCard;
