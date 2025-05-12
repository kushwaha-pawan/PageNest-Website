import React from 'react';
import './Footers.css'; // Import the CSS file
import { FaDiscord, FaGithub, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footers = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h1 className="logo">ShopMe</h1>
          <p>Your one-stop destination for fashion, electronics, and more. Quality products, fast delivery, and great deals — all in one place.</p>

          <div className="social-icons">
            <FaDiscord />
            <FaGithub />
            <FaLinkedin />
            <FaInstagram />
            <FaYoutube />
          </div>

          <div className="status">● All systems operational</div>
        </div>


        <div className="footer-section">
          <h3>Shop</h3>
          <ul>
            <li>Men's Wear</li>
            <li>Women's Wear</li>
            <li>Kids' Wear</li>
            <li>Electronics <span className="badge">New</span></li>
          </ul>
        </div>


        <div className="footer-section">
          <h3>Explore</h3>
          <ul>
            <li>Trending Products</li>
            <li>New Arrivals</li>
            <li>Best Sellers</li>
            <li>Gift Ideas</li>
          </ul>
        </div>


        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Our Stores</li>
            <li>Press & Media</li>
            <li>Affiliate Program</li>
          </ul>
        </div>


        <div className="footer-section">
          <h3>Customer Support</h3>
          <ul>
            <li>Shipping & Delivery</li>
            <li>Return Policy</li>
            <li>Track Order</li>
            <li>Help Center</li>
          </ul>

          <h3>Resources</h3>
          <ul>
            <li>Blog</li>
            <li>Gift Cards</li>
            <li>Offers & Discounts</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        2025 |pawangabbar09@gmail.com | Privacy Policy | Terms | Code of conduct
      </div>
    </footer>
  );
};

export default Footers;
