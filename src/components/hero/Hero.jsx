import { useRef, useState } from 'react';
import './hero.css';
import video from '../../assets/lv_0_20250419113319.mp4';
import { IoVolumeMute } from 'react-icons/io5';
import { GoUnmute } from 'react-icons/go';
import { CiPause1, CiPlay1 } from 'react-icons/ci';

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div className="hero-main">
      <div className="video-container">
        <video ref={videoRef} className="video" autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <div className="video-overlay" />
        
        {/* Removed title/button section */}
        
        <div className="video-controls">
          <button onClick={togglePlay} className="control-btn">
            {isPlaying ? <CiPause1 /> : <CiPlay1 /> }
          </button>
          <button onClick={toggleMute} className="control-btn">
            {isMuted ? <GoUnmute /> : <IoVolumeMute />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
