import React from 'react';
import banner from '../../assets/bannersection.jpg';
import './banner.css';

const Banner = () => {
    return (
        <div className="banner-main section-padding">
            <div className="container">
                <div className="banner-container">
                    <div className="banner-left">
                        <img src={banner} alt="Summer Deals" />
                    </div>
                    <div className="banner-right">
                        <div className="banner-content">
                            <h5>Enjoy Summer Deals</h5>
                            <h3>Up to <span>40% Discount!</span></h3>
                            <div className="banner-btn">
                                <button className="glow-btn">See Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
