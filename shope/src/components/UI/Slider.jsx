import React from 'react';
import ProductCard from "../UI/ProductCard";
import "./Slider.css"

import a1 from "../../assets/card/a1.jpg";
import a2 from "../../assets/card/a2.jpg";
import a3 from "../../assets/card/a3.jpg";
import a4 from "../../assets/card/a4.jpg";
import a5 from "../../assets/card/a5.jpg";
import a6 from "../../assets/card/a6.jpg";
import a7 from "../../assets/card/a7.jpg";
import a8 from "../../assets/card/a8.jpg";
import a9 from "../../assets/card/a9.jpg";
import a10 from "../../assets/card/a10.jpg";


const Slider = [
  { image: a1, title: 'Product 3', description: 'Desc 3', price: 600, originalPrice: 900, discount: '30%' },
  { image: a2, title: 'Product 4', description: 'Desc 4', price: 800, originalPrice: 1200, discount: '33%' },
  { image: a3, title: 'Product 5', description: 'Desc 5', price: 900, originalPrice: 1500, discount: '40%' },
  { image: a4, title: 'Product 6', description: 'Desc 6', price: 750, originalPrice: 1000, discount: '25%' },
  { image: a5, title: 'Product 7', description: 'Desc 7', price: 650, originalPrice: 900, discount: '28%' },
  { image: a6, title: 'Product 8', description: 'Desc 8', price: 500, originalPrice: 700, discount: '30%' },
  { image: a7, title: 'Product 9', description: 'Desc 9', price: 400, originalPrice: 600, discount: '33%' },
  { image: a8, title: 'Product 10', description: 'Desc 10', price: 550, originalPrice: 850, discount: '35%' },
  { image: a9, title: 'Product 11', description: 'Desc 10', price: 550, originalPrice: 850, discount: '35%' },
  { image: a10, title: 'Product 10', description: 'Desc 10', price: 550, originalPrice: 850, discount: '35%' },
];


const ProductRow = () => {
  return (
    <div className="product-row-container">
      {Slider.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductRow;
