import React from 'react';
//import ProductCard from './ProductCard';
import './styles/shop.css';

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
                <div>{prod.quantity !== 0 ? prod.quantity : ''}</div>
                {prod.quantity === 0 ? (
                  <button onClick={() => props.cartHandler(prod.id, prod)}>
                    Add to Cart
                  </button>
                ) : (
                  <div>
                    <button onClick={() => props.cartHandler(prod.id, prod)}>
                      +
                    </button>
                    <button
                      onClick={() => props.cartHandler(prod.id, prod, false)}
                    >
                      -
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;

{
  /* <ProductCard
  cart={props.cart}
  cartHandler={props.updateCart}
  products={props.products}
/>; */
}
