import React from 'react';
import './styles/products.css';
import plusImg from './icons/add.svg';

const ProductCard = (props) => {
  return (
    <div>
      {props.products.map((prod, index) => (
        <div className='productContainer'>
          <div className='card'>
            <div className='productName'>{prod.name}</div>
            <img src={prod.image} alt={prod.name}></img>
            <div className='productBottomRow'>
              <span className='price'>€{prod.price}</span>
              <div>
                <image className='icon' src={plusImg} alt='Plus Icon'></image>
                <span className='quantity'>1</span>
                <image className='icon' src={plusImg} alt='Plus Icon'></image>
              </div>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
