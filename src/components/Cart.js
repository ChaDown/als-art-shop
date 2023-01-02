import React from 'react';
import './styles/cart.css';

const Cart = (props) => {
  const cartClass = props.cart.visible ? 'showCart' : 'hideCart';
  const classes = `cart ${cartClass}`;

  return (
    <div className={classes}>
      <div className='cartHeader'>
        <div className='closeCart' onClick={props.toggleCart}>
          X
        </div>
        <div className='cartTitle'>Shopping Cart</div>
      </div>

      {props.cart.products.length === 0 ? (
        <div className='emptyCart'>Nothing in your cart yet. Go shopping!</div>
      ) : (
        ''
      )}

      {props.cart.products
        ? props.cart.products.map((prod, index) => (
            <div key={index} className='productCartContainer'>
              <div className='cardCart'>
                <div className='productCartName'>{prod.name}</div>
                <img
                  className='cartImgs'
                  src={prod.image}
                  alt={prod.name}
                ></img>
                <div className='cartPrice'>€{prod.price}</div>
                <div className='cartQty'>{prod.quantity}</div>
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
                <div className='cartTotalItemPrice'>
                  €{(prod.price * prod.quantity).toFixed(2)}
                </div>
              </div>
            </div>
          ))
        : ''}
    </div>
  );
};

export default Cart;
