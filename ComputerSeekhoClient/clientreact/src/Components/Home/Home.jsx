import React from 'react';
import Courses from '../Courses/Courses';
import Title from '../Title/Title';
import CampusLifeHome from '../CampusLife/CampusLifeHome';
import Carousel from '../Carousel/Carousel';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div>
      <Carousel />
      <div className='container'>
        <Title title='Our Courses' subTitle='What We Offer' />
        <div className='courses'>
          <Courses />
        </div>
        <Title title='Campus Life' subTitle='Life At Computer Seekho' />
        <div className='campus-life'>
          <CampusLifeHome />
        </div>
      </div>
    </div>
  );
}

export default Home;