import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/products';
import './ProductDetails.css';
import Slider from '../components/UI/Slider';
import productData from '../data/productcardData';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const product = products.find((p) => p.id === id);

    if (!product) {
        return <div className="error">Product not found.</div>;
    }

    const handleShopNow = () => {
        navigate('/checkout', { state: { product } });
    };

    return (
        <>
            <div className="product-details">
                <img src={product.image} alt={product.title} className="product-image" />
                <div className="product-info">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>

                    <div className="price">
                        <span>Rs. {product.price}</span>
                        <span className="original">Rs. {product.originalPrice}</span>
                        <span className="discount">({product.discount} OFF)</span>
                    </div>

                    <div className="sizes">
                        <p>Select Size</p>
                        {product.sizes.map((size, index) => (
                            <button key={index} className="size-btn">{size}</button>
                        ))}
                    </div>

                    <button
                        className="shop-now-btn"
                        id="btn"
                        onClick={handleShopNow}
                        style={{ backgroundColor: '#ff5722', color: 'white' }}
                    >
                        Shop Now
                    </button>

                    <button className="add-to-cart" id='btn'>Add to cart</button>
                </div>
            </div>
            <Slider products={productData.slice(15, 20)} />
        </>
    );
};

export default ProductDetails;