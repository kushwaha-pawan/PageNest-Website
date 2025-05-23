import React from 'react';
import ProductCard from './ProductCard';
import './Slider.css';

const Slider = ({ products }) => {
  return (
    <div className="product-row-container">
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default Slider;