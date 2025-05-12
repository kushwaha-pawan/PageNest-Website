import React from 'react'
import Hero from '../components/UI/Hero'
import Slider from "../components/UI/Slider"
import saleImage from "../assets/Topimage/mensweartop.png"

const MensWear = () => {
  return (
    <>
      <Hero
        heading="🛍️ Welcome to  🛒Best Deals & Latest Trends!"
        content=" 🔥 Flat 50% Off 🏷️ Shop Now & Save Big!🏆Your One-Stop Shop for Fashion,
         Electronics & More! Men's Fashion 🟨 Stylish Clothing & Accessories"
        image={saleImage}
      />
      <Slider />
      <Slider />
    </>
  )
}

export default MensWear