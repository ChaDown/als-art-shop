import React from 'react';
import './styles/nav.css';
import cartImg from '../imgs/cart-outline.svg';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
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
      <img
        onClick={props.toggleCart}
        className='cartImg'
        src={cartImg}
        alt='Cart'
      ></img>
    </div>
  );
};

export default NavBar;
