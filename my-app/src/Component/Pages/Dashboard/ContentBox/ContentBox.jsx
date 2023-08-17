import React from 'react';
import './ContentBox.css';

const ContentBox = () => {
  return (
    <div className="content-box">
      <div className="header">
        <h2 className="get-started-heading">Get Started</h2>
        <p>Connect your social media Profile to publish post</p>
      </div>

      <div className="image-container">
        <div className="image-tile">
          <img src='./images/image1.png' alt="Image 1" className="content-image" />
          <p className="image-description">Facebook</p>
        </div>

        <div className="image-tile">
          <img src='/images/image2.png' alt="Image 2" className="content-image" />
          <p className="image-description">Pintrest</p>
        </div>
          
        <div className="image-tile">
          <img src='/images/image3.png' alt="Image 2" className="content-image" />
          <p className="image-description">Youtube</p>
        </div>

        <div className="image-tile">
          <img src='/images/image4.png' alt="Image 2" className="content-image" />
          <p className="image-description">TickTock</p>
        </div>

        <div className="image-tile">
          <img src='/images/image5.png' alt="Image 2" className="content-image" />
          <p className="image-description">Google</p>
        </div>

        <div className="image-tile">
          <img src='/images/insta.png' alt="Image 2" className="content-image" />
          <p className="image-description">instragram</p>
        </div>

        <div className="image-tile">
          <img src='/images/image7.png' alt="Image 2" className="content-image" />
          <p className="image-description">Twiter</p>
        </div>
        <div className="image-tile">
          <img src='/images/image7.png' alt="Image 2" className="content-image" />
          <p className="image-description">LinkedIn</p>
        </div>


       
        {/* Repeat similar blocks for other images */}
        
      </div>
    </div>
  );
};

export default ContentBox;
