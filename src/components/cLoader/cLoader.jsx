import React from 'react';
import { HashLoader } from 'react-spinners';
import './loader.css';

const CLoader = () => {
  return (
    <div className="loading-spinner">
      <div className="loader-main-container text-center">
        <HashLoader color="#bb9166" size={60} />
        <p className="loader-text ">Travel N Memories</p>
      </div>
    </div>
  );
};

export default CLoader;
