import React from 'react'
import Hero from '../components/UI/Hero'
import Slider from "../components/UI/Slider"
import saleImage from "../assets/Topimage/Electronictop.jpg"
import Banner from '../components/UI/Banner';
import bannerImg from "../assets/Topimage/electricbanner.png";
import productData from '../data/productcardData';

const Electronics = () => {
  return (
    <>
      <Hero
        heading="⚡ Top Electronics Deals 🧲"
        content="💻 Laptops, 📱 Smartphones, 🎧 Gadgets & More!🔋 Best Prices, Trusted Brands 🛒 Limited Stock — Order Now!"
        image={saleImage}
      />
      <Slider products={productData.slice(40,41)} />
      <Slider />
      <Slider />
      <Banner
        bannerImg={bannerImg}
        title="Big Summer Sale – Limited Time Only!"
      />
      <Slider />
      <Slider />
    </>
  )
}

export default Electronics