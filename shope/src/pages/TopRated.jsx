import React from 'react'
import Hero from '../components/UI/Hero'
import Slider from "../components/UI/Slider"
import saleImage from "../assets/Topimage/topratedtop.png"

const TopRated = () => {
  return (
    <>
      <Hero
        heading="⭐ Top Rated Picks 🔝"
        content="🏆 Customer Favorites You Can Trust
        ✅ Handpicked Products with 4.5★ & Above Ratings
        📦 Best in Quality, Value & Style – Don’t Miss Out!
         🔍 Explore What Everyone’s Loving – Shop Top Rated"
        image={saleImage}
      />
      <Slider />
      <Slider />
    </>
  )
}

export default TopRated