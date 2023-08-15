// WorkspaceContentBox.js

import React from 'react';
import './WorkspaceContentBox.css';
import image1 from './Images/image1.png';
import image2 from './Images/image2.png';
import image3 from './Images/image3.png';
import image4 from './Images/image4.png';
import image5 from './Images/image5.png';
import image6 from './Images/image6.png';
import image7 from './Images/image7.png';


const WorkspaceContentBox = () => {
  return (
    <div className="workspace-content-box">
      <div className="image-container">
        <div className="image-item">
          <img src={process.env.PUBLIC_URL + '/images/image1.png'} alt="Image 1" className="content-image" />
          <p className="image-title">Title 1</p>
        </div>
        <div className="image-item">
          <img src={process.env.PUBLIC_URL + '/images/image2.png'} alt="Image 2" className="content-image" />
          <p className="image-title">Title 2</p>
        </div>
        <div className="image-item">
          <img src={process.env.PUBLIC_URL + '/images/image3.png'} alt="Image 3" className="content-image" />
          <p className="image-title">Title 3</p>
        </div>
        <div className="image-item">
          <img src={process.env.PUBLIC_URL + '/images/image4.png'} alt="Image 4" className="content-image" />
          <p className="image-title">Title 4</p>
        </div>
        <div className="image-item">
          <img src={process.env.PUBLIC_URL + '/images/image5.png'} alt="Image 5" className="content-image" />
          <p className="image-title">Title 5</p>
        </div>
        <div className="image-item">
          <img src={process.env.PUBLIC_URL + '/images/image6.png'} alt="Image 6" className="content-image" />
          <p className="image-title">Title 6</p>
        </div>
        <div className="image-item">
          <img src={process.env.PUBLIC_URL + '/images/image7.png'} alt="Image 7" className="content-image" />
          <p className="image-title">Title 7</p>
        </div>
        <div className="image-item">
          <img src={process.env.PUBLIC_URL + '/images/image8.png'} alt="Twitter" className="content-image" />
          <p className="image-title">Twitter</p>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceContentBox;
