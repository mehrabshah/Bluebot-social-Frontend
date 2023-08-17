// WorkspaceContentBox.js

import React from 'react';
import './WorkspaceContentBox.css';
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';
import image5 from './image5.png';
import image6 from './image6.png';
import image7 from './image7.png';
import image8 from './image8.png';


const WorkspaceContentBox = () => {
  return (
    <div className="workspace-content-box">
      <div className="image-container">
        <div className="image-item">
          <img src={image1.png} alt="Image 1" className="content-image" />
          <p className="image-title">Title 1</p>
        </div>
        <div className="image-item">
          <img src={image2.png} alt="Image 2" className="content-image" />
          <p className="image-title">Title 2</p>
        </div>
        <div className="image-item">
          <img src={image3.png} alt="Image 3" className="content-image" />
          <p className="image-title">Title 3</p>
        </div>
        <div className="image-item">
          <img src={image4.png} alt="Image 4" className="content-image" />
          <p className="image-title">Title 4</p>
        </div>
        <div className="image-item">
          <img src={image5.png} alt="Image 5" className="content-image" />
          <p className="image-title">Title 5</p>
        </div>
        <div className="image-item">
          <img src={image6.png} alt="Image 6" className="content-image" />
          <p className="image-title">Title 6</p>
        </div>
        <div className="image-item">
          <img src={image7.png} alt="Image 7" className="content-image" />
          <p className="image-title">Title 7</p>
        </div>
        <div className="image-item">
          <img src={image8.png} alt="Twitter" className="content-image" />
          <p className="image-title">Twitter</p>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceContentBox;
