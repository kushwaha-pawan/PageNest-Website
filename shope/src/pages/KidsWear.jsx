import React from 'react'
import Hero from '../components/UI/Hero'
import Slider from "../components/UI/Slider"
import saleImage from "../assets/Topimage/kidsweartop.png"

const KidsWear = () => {
  return (
    <>
      <Hero
        heading="🧒 Trendy Kids Wear 👧Colorful Fashion for Your Little Stars!"
        content=" 🌈 Stylish, Comfy & Affordable Clothing
        🎉 Special Offers Just for Kids – Flat 50% Off on Select Styles! 🛒 Let Your Kids Shine Bright Shop Now!"
        image={saleImage}
      />
      <Slider />
      <Slider />
    </>
  )
}

export default KidsWear