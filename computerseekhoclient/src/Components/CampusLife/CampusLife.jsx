import React from 'react';
import './CampusLife.css';
import Box from '../Box/Box';

const CampusLife = () => {

  const boxContent = [
    { title: 'Hostels', description: 'Explore the hostels and living spaces on campus.', image: 'https://wallpapers.com/images/high/msn-trio-with-neymar-patting-messi-fn137a63qctelo7d.webp' },
    { title: 'Sports', description: 'Sports activities and events for students.', image: 'https://wallpapers.com/images/high/msn-trio-with-neymar-patting-messi-fn137a63qctelo7d.webp' },
    { title: 'Events', description: 'Campus events and festivals throughout the year.', image: 'https://wallpapers.com/images/high/msn-trio-with-neymar-patting-messi-fn137a63qctelo7d.webp' },
    { title: 'Cafeteria', description: 'Enjoy a variety of food in the campus cafeteria.', image: 'https://wallpapers.com/images/high/msn-trio-with-neymar-patting-messi-fn137a63qctelo7d.webp' },
    { title: 'Library', description: 'Study resources and books in the library.', image: 'https://wallpapers.com/images/high/msn-trio-with-neymar-patting-messi-fn137a63qctelo7d.webp' },
    { title: 'Clubs', description: 'Join different clubs and societies on campus.', image: 'https://wallpapers.com/images/high/msn-trio-with-neymar-patting-messi-fn137a63qctelo7d.webp' },
  ];

  return (
    <div className="campus-life">
      <h1>Campus Life</h1>
      <div className="box-container">
        {boxContent.map((box, index) => (
          <Box
            key={index}
            title={box.title}
            description={box.description}
            image={box.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CampusLife;
