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
          <img src={image1} alt="Image 1" className="content-image" />
          <p className="image-title">Title 1</p>
        </div>
        <div className="image-item">
          <img src={image2} alt="Image 2" className="content-image" />
          <p className="image-title">Title 2</p>
        </div>
        <div className="image-item">
          <img src={image3} alt="Image 3" className="content-image" />
          <p className="image-title">Title 3</p>
        </div>
        <div className="image-item">
          <img src={image4} alt="Image 4" className="content-image" />
          <p className="image-title">Title 4</p>
        </div>
        <div className="image-item">
          <img src={image5} alt="Image 5" className="content-image" />
          <p className="image-title">Title 5</p>
        </div>
        <div className="image-item">
          <img src={image6} alt="Image 6" className="content-image" />
          <p className="image-title">Title 6</p>
        </div>
        <div className="image-item">
          <img src={image7} alt="Image 7" className="content-image" />
          <p className="image-title">Title 7</p>
        </div>
        <div className="image-item">
          <img src={image5} alt="Twitter" className="content-image" />
          <p className="image-title">Twitter</p>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceContentBox;
