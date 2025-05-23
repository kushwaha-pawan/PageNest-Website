import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ id, image, title, description, price, originalPrice, discount }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="card" id="showProductDetails" onClick={handleClick}>
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
};

export default ProductCard;