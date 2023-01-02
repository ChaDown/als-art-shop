import React from 'react';
import './styles/nav.css';

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
      {/* <div className='cartImgContainer'>
        <img
          onClick={props.toggleCart}
          className='cartImg'
          src={cartImg}
          alt='Cart'
        />
        {props.cart.totalQty > 0 ? (
          <div className='cartQty'>{props.cart.totalQty}</div>
        ) : (
          ''
        )}
      </div> */}
    </div>
  );
};

export default NavBar;
