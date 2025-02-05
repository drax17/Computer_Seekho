import React from "react";
import './Box.css';

const Box = ({ title, description, image }) => {
  return (
    <div className="box">
      {/* Rendering the image passed from CampusLife.js */}
      <img src={image} alt={title} className="box-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Box;
