import React from 'react';
import './ProductCard.css'; 

const ProductCard = ({ image, title, description, price, originalPrice, discount }) => {
  return (
    <div className="card" id="showProductDetails">
      <img src={image} alt={title} className="card-image" />
      <div className="product-title">{title}</div>
      <div className="product-description">{description}</div>
      <div className="product-price">
        Rs. {price} 
        {originalPrice && <span className="original-price">Rs. {originalPrice}</span>}
        {discount && <span className="discount">({discount} OFF)</span>}
      </div>
    </div>
  );
}

export default ProductCard;
