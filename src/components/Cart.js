import React from 'react';
import './styles/cart.css';

const Cart = (props) => {
  const cartClass = props.cart.visible ? 'showCart' : 'hideCart';
  const classes = `cart ${cartClass}`;

  return (
    <div className={classes}>
      <div className='cartHeader'>
        <div className='cartTitle'>
          Shopping Cart{' '}
          <div className='closeCart' onClick={props.toggleCart}>
            X
          </div>
        </div>
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
                <div className='cartQtyBtns'>
                  <button onClick={() => props.cartHandler(prod.id, prod)}>
                    +
                  </button>
                  <div>{prod.quantity}</div>
                  <button
                    onClick={() => props.cartHandler(prod.id, prod, false)}
                  >
                    -
                  </button>
                </div>
                <div className='cartTotalItemPrice'>
                  €{(prod.price * prod.quantity).toFixed(2)}
                </div>
              </div>
            </div>
          ))
        : ''}
      {props.cart.products.length > 0 ? (
        <div className='cartTotals'>
          <div className='cartTotalBox'>
            <div>No. of items:</div>
            <div>{props.cart.totalQty}</div>
          </div>
          <div className='cartTotalBox'>
            <div>Total Cost:</div>
            <div>€{props.cart.totalPrice.toFixed(2)}</div>
          </div>
          <div className='cartTotalBox'>
            <div></div>
            <button
              onClick={() =>
                alert(
                  "Hang on a minute ... This site isn't actually real! Pretty nice though ey?"
                )
              }
              className='checkoutBtn'
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Cart;
