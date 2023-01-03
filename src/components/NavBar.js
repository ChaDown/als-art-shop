import React from 'react';
import './styles/nav.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='NavBar'>
      <div className='title'>Al's Art Shop</div>
      <div className='pages'>
        <NavLink className='tab' to='/'>
          Home
        </NavLink>
        <NavLink className='tab' to='/shop'>
          Shop
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
