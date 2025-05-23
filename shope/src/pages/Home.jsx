import React from 'react';
import Hero from '../components/UI/Hero';
import saleImage from "../assets/Topimage/sale.png"
import Slider from '../components/UI/Slider';
import Banner from '../components/UI/Banner';
import bannerImg from "../assets/Topimage/Home-banner1.jpg";
import productData from '../data/productcardData';

const Home = () => {
  return (
    <>
      <Hero
        heading="🛍️ Welcome to ShopMe 🛒 Best Deals & Latest Trends!"
        content="🔥 Flat 50% Off 🏷️ Shop Now & Save Big! 🏆 Your One-Stop Shop for Fashion, Electronics & More! 
        👕 Men's Fashion 🟨 Stylish Clothing & Accessories"
        buttonLink="/shop"
        image={saleImage}
      />
      <Slider products={productData.slice(0, 6)} /> 
      <Slider products={productData.slice(7, 15)} /> 
      <Banner
        bannerImg={bannerImg}
        title="Big Summer Sale – Limited Time Only!"
      />

      <Slider products={productData.slice(16, 22)} /> 
      <Slider products={productData.slice(22, 30)} /> 
      <div className="marquee-container">
        <div className="marquee-content">
          Limited-time shopping offers! Huge discounts on your favorite items.
          Don’t miss out! Exciting shopping offers just for you! Steal the deal
          and enjoy huge savings. Discounts, deals, and surprises await—shop and save today!
        </div>
      </div>
      <Slider products={productData.slice(31, 40)} /> 
    </>
  );
};

export default Home;