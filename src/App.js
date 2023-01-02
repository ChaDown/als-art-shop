import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import React, { useState } from 'react';
import dotImg from './imgs/dot.jpg';
import ganesha from './imgs/ele.jpg';
import elephant from './imgs/ele2.jpg';
import fatima from './imgs/hand.jpg';
import octopus from './imgs/octopus.jpg';
import red from './imgs/red.jpg';
import yel2 from './imgs/yel2.jpg';
import yellow from './imgs/yellow.jpg';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Australian Dot', price: 24.99, image: dotImg, quantity: 0 },
    { id: 2, name: 'Ganesha', price: 34.99, image: ganesha, quantity: 0 },
    {
      id: 3,
      name: 'Pale Elephant',
      price: 29.99,
      image: elephant,
      quantity: 0,
    },
    { id: 4, name: 'Fatimas Hand', price: 29.99, image: fatima, quantity: 0 },
    { id: 5, name: 'Octopus', price: 19.99, image: octopus, quantity: 0 },
    { id: 6, name: 'Red Lotus', price: 29.99, image: red, quantity: 0 },
    { id: 7, name: 'Mandala', price: 19.99, image: yel2, quantity: 0 },
    { id: 8, name: 'Yellow Lotus', price: 39.99, image: yellow, quantity: 0 },
  ]);

  const [cart, setCart] = useState({
    products: [],
    visible: false,
  });

  function updateCart(id, prod, add = true) {
    const newCart = [...cart.products];

    const index = newCart.findIndex((el) => el.id === id);

    if (index !== -1 && add) {
      newCart[index].quantity += 1;
    } else if (index !== -1 && !add) {
      newCart[index].quantity -= 1;
      if (newCart[index].quantity === 0) newCart.splice(index, 1);
    } else {
      prod.quantity = 1;
      newCart.push(prod);
    }

    setCart({
      ...cart,
      products: [...newCart],
    });

    console.log(cart);
  }

  function calcCartTotal() {
    let total = 0;
    cart.map((el) => (total += el.price * el.quantity));

    return total;
  }

  function toggleCart() {
    setCart({
      products: [...cart.products],
      visible: !cart.visible,
    });
  }

  return (
    <div>
      <NavBar cart={cart} toggleCart={toggleCart} />
      <Cart cart={cart} cartHandler={updateCart} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/shop'
          element={
            <Shop
              cart={cart}
              updateCart={updateCart}
              products={products}
              cartHandler={updateCart}
            />
          }
        />
        <Route
          path='/cart'
          element={
            <Cart cart={cart} updateCart={updateCart} toggleCart={toggleCart} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
