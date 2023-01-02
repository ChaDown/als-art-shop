import React from 'react';
import video from '../imgs/vid.mp4';
import ganesha from '../imgs/ele.jpg';
import './styles/home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <video id='background-video' autoPlay loop muted poster={ganesha}>
        <source src={video} type='video/mp4' />
      </video>
      <Link className='goToShop' to='/shop'>
        Visit Shop
      </Link>
    </div>
  );
};

export default Home;
