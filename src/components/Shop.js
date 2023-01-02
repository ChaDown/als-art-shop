import React from 'react';
import './styles/shop.css';
import cartImg from '../imgs/cart-outline.svg';

const Shop = (props) => {
  return (
    <div className='content'>
      <div>
        {props.products.map((prod, index) => (
          <div key={index} className='productContainer'>
            <div className='card'>
              <div className='productName'>{prod.name}</div>
              <img src={prod.image} alt={prod.name}></img>
              <div className='productBottomRow'>
                <span className='price'>€{prod.price}</span>
                <div>
                  {prod.quantity !== 0 ? prod.quantity : ''}
                  {prod.quantity !== 0 ? ' in Cart' : ''}
                </div>
                {prod.quantity === 0 ? (
                  <button
                    className='addCartBtn'
                    onClick={() => props.cartHandler(prod.id, prod)}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <div>
                    <button
                      className='addCartBtn'
                      onClick={() => props.cartHandler(prod.id, prod, false)}
                    >
                      -
                    </button>
                    <button
                      className='addCartBtn'
                      onClick={() => props.cartHandler(prod.id, prod)}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='cartImgContainer'>
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
      </div>
    </div>
  );
};

export default Shop;
