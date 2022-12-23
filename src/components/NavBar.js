import React from 'react';
import './styles/nav.css';
import cartImg from '../imgs/cart-outline.svg';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='NavBar'>
      <div className='title'>Al's Art Shop</div>
      <div className='pages'>
        <NavLink className='tab' to='/' activeClassName='currentTab'>
          Home
        </NavLink>
        <NavLink className='tab' to='/shop' activeClassName='currentTab'>
          Shop
        </NavLink>
      </div>
      <img className='cartImg' src={cartImg} alt='Cart'></img>
    </div>
  );
};

export default NavBar;
