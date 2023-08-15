// ContentBox.js

import React from 'react';
import './ContentBox.css';

const ContentBox = () => {
  return (
    <div className="content-box">
      <div className="header">
        <h2 className="get-started-heading">Get Started</h2>
       <p> Connect your social media Profile to publish post</p>
      </div>

      <div className="image-container">
        <img src={process.env.PUBLIC_URL + '/images/image1.png'} alt="Image 1" className="content-image" />
     
        <img src={process.env.PUBLIC_URL + '/images/image8.png'} alt="Image 2" className="content-image" />
        <img src={process.env.PUBLIC_URL + '/images/image2.png'} alt="Image 3" className="content-image" />
        <img src={process.env.PUBLIC_URL + '/images/image3.png'} alt="Image 4" className="content-image" />
        <img src={process.env.PUBLIC_URL + '/images/image4.png'} alt="Image 5" className="content-image" />
        <img src={process.env.PUBLIC_URL + '/images/image5.png'} alt="Image 6" className="content-image" />
        <img src={process.env.PUBLIC_URL + '/images/image6.png'} alt="Image 7" className="content-image" />
        <img src={process.env.PUBLIC_URL + '/images/image7.png'} alt="Image 8" className="content-image" />
      </div>
    </div>
  );
};

export default ContentBox;
