// ContentBox.js

import React from 'react';
import './ContentBox.css';
import image1 from './Images/image1.png';
import image2 from './Images/image2.png';
import image3 from './Images/image3.png';
import image4 from './Images/image4.png';
import image5 from './Images/image5.png';
import image6 from './Images/image6.png';
import image7 from './Images/image7.png';
import image8 from './Images/image8.png';

const ContentBox = () => {
  return (
    <div className="content-box">
      <div className="header">
        <h2 className="get-started-heading">Get Started</h2>
       <p> Connect your social media Profile to publish post</p>
      </div>

      <div className="image-container">
        <img src={image1} alt="Image 1" className="content-image" />
     
        <img src={image2} alt="Image 2" className="content-image" />
        <img src={image3} alt="Image 3" className="content-image" />
        <img src={image4} alt="Image 4" className="content-image" />
        <img src={image5} alt="Image 5" className="content-image" />
        <img src={image6} alt="Image 6" className="content-image" />
        <img src={image7} alt="Image 7" className="content-image" />
        <img src={image8} alt="Image 8" className="content-image" />
      </div>
    </div>
  );
};

export default ContentBox;
