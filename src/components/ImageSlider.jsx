import React, { useState, useEffect } from 'react';
import ME from '../assets/images/ME.jpg';
import Logo from '../assets/images/logo-s.png';

import './slider.css'

const ImageSlider = ( { imgArray }) => {
  
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imgArray.length);
    };
  
    const prevImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + imgArray.length) % imgArray.length);
    };
  
    return (
      <div className="image-slider">
       
       <button className='slider-buttons' onClick={prevImage} disabled={currentIndex === 0}>
            Previous
        </button>
        <img
          className={`slider-image`}
          src={imgArray[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
        />
  
        <div>
          
          <button className='slider-buttons' onClick={nextImage} disabled={currentIndex === imgArray.length - 1}>
            Next
          </button>
        </div>
      </div>
    );
  };
  
  export default ImageSlider;

