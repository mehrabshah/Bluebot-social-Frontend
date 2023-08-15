import React from 'react';
import './UperComponent.css';


const UperComponent = () => {
  return (
    <div className="uper-component">
      <h2 className="workspace-heading">MY Workspace</h2>
      <div className="box-container">
        <div className="box">
          <img src={process.env.PUBLIC_URL + '/images/im1.png'} alt="Image 1" className="box-image" />
        </div>
        <div className="box">
          <img src={process.env.PUBLIC_URL + '/images/im2.png'} alt="Image 2" className="box-image" />
        </div>
        <div className="box">
          <img src={process.env.PUBLIC_URL + '/images/im3.png'} alt="Image 3" className="box-image" />
        </div>
      </div>
    </div>
  );
};

export default UperComponent;
