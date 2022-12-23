import React, { useState } from 'react';
import dotImg from '../imgs/dot.jpg';
import ganesha from '../imgs/ele.jpg';
import elephant from '../imgs/ele2.jpg';
import fatima from '../imgs/hand.jpg';
import octopus from '../imgs/octopus.jpg';
import red from '../imgs/red.jpg';
import yel2 from '../imgs/yel2.jpg';
import yellow from '../imgs/yellow.jpg';
import ProductCard from './ProductCard';

const Shop = () => {
  const products = [
    { name: 'Australian Dot', price: 24.99, image: dotImg },
    { name: 'Ganesha', price: 34.99, image: ganesha },
    { name: 'Pale Elephant', price: 29.99, image: elephant },
    { name: 'Fatimas Hand', price: 29.99, image: fatima },
    { name: 'Octopus', price: 19.99, image: octopus },
    { name: 'Red Lotus', price: 29.99, image: red },
    { name: 'Mandala', price: 19.99, image: yel2 },
    { name: 'Yellow Lotus', price: 39.99, image: yellow },
  ];

  return (
    <div>
      <ProductCard products={products} />
    </div>
  );
};

export default Shop;
