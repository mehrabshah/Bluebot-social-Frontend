import React from 'react';
import './UperComponent.css';
import im1 from './Images/im1.png';
import im2 from './Images/im2.png';
import im3 from './Images/im3.png';
const UperComponent = () => {
  return (
    <div className="uper-component">
      <h2 className="workspace-heading">MY Workspace</h2>
      <div className="box-container">
        <div className="box">
          <img src={im1.png} alt="Image 1" className="box-image" />
        </div>
        <div className="box">
          <img src={im2.png} alt="Image 2" className="box-image" />
        </div>
        <div className="box">
          <img src={im3.png} alt="Image 3" className="box-image" />
        </div>
      </div>
    </div>
  );
};

export default UperComponent;
