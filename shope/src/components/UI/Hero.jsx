import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = (props) => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h2>{props.heading}</h2>
                <p>{props.content}</p>
                <Link to={props.buttonLink} className="btn">
                    Order Now
                </Link>
            </div>
            <div className="hero-image">
                <img src={props.image} alt="Hero" />
            </div>
        </section>
    );
};

export default Hero;
