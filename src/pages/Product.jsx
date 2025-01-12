/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import { useState } from 'react';
import products from '../data';


import ProductCard from '../components/product/ProductCard';


export default function Product() {

  
   
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filterCategory =
    selectedCategory === 'All'
      ? products
      : products.filter(product => product.category === selectedCategory);
  return (
    <>
      <section className='product-page wrapper'>
        <h2>Choose Your Favorite Product..😍</h2>
        <div className="btn-area">
          <button onClick={() => setSelectedCategory('Men')}>Men</button>
          <button onClick={() => setSelectedCategory('Women')}>Women</button>
          <button onClick={() => setSelectedCategory('Kids')}>kids</button>
          <button onClick={() => setSelectedCategory('Electronics')}>
            Electronics
          </button>
        </div>
        <div className="product-info">
          {filterCategory.map(product => (
            <>
              <ProductCard product={product} />
              {/* <PricingCard product={product} /> */}
            </>
          ))}
        </div>
      </section>
    </>
  );
}
