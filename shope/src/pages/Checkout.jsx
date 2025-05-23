import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!product) {
    return <div>No product selected for checkout.</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order Confirmed!\nThank you for purchasing ${product.title}.\nYour order is being processed and will be shipped soon.`);
    setOrderPlaced(true); 
  };

  
  const handleAllDone = () => {
    navigate('/'); 
  };

  if (orderPlaced) {
    return (
      <div className="order-confirmation">
        <h2>Order Confirmed!</h2>
        <p>Thank you for purchasing <strong>{product.title}</strong>.</p>
        <button onClick={handleAllDone} className="all-done-btn">All Done</button>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <div className="checkout-summary">
        <img src={product.image} alt={product.title} />
        <div>
          <h3>{product.title}</h3>
          <p>Rs. {product.price}</p>
        </div>
      </div>

      <form className="checkout-form" onSubmit={handleSubmit}>
        <h3>Shipping Address</h3>
        <input type="text" placeholder="Full Name" required />
        <input type="text" placeholder="Address Line 1" required />
        <input type="text" placeholder="City" required />
        <input type="text" placeholder="Postal Code" required />
        <input type="text" placeholder="Phone Number" required />

        <h3>Payment Details</h3>
        <input type="text" placeholder="Card Number" required />
        <input type="text" placeholder="Expiry Date (MM/YY)" required />
        <input type="text" placeholder="CVV" required />

        <button type="submit" className="place-order-btn">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
