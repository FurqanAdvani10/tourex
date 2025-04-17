import { useEffect, useRef, useState } from 'react';
import './hero.css'
import video from '../../assets/travelVideo.mp4'

const Hero = () => {

  // const videoRef = useRef(null);

  return (
    <div className="hero-main">
      <div className="video-container">
        <video className="video" autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
        <div className="video-content" data-aos="fade-up" data-aos-duration="1500">
          {/* <h4 className="hero-subtitle">لَبَّيْكَ اللَّهُمَّ لَبَّيْك</h4> */}
          <h1 className="hero-title">Explore the Unseen From Hidden Gems to iconic Landmarks</h1>
          <button className="hero-button">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
