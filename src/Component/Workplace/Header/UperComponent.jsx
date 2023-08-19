import React from 'react';
import './UperComponent.css';
import { Link } from 'react-router-dom';
const UperComponent = () => {
  return (
    <div className="uper-component">
      <h2 className="workspace-heading mb-2 mb-md-5 mt-md-5 mt-2">MY Workspace</h2>

      <div className="box-container">
        <div className='align-items-center d-flex flex-column'>
          <h1 className='navigation-box-heading '>Social Profiles</h1>
        <div className="box p-2">
        <Link to='/socialProfile'>
          <img src='./images/im1.png' alt="Image 1" className="box-image" />
        </Link>
        </div>
        </div>
        <div className='align-items-center d-flex flex-column'>
          <h1 className='navigation-box-heading '>Content</h1>
        <div className="box p-2">
          <img src='./images/im2.png' alt="Image 2" className="box-image" />
        </div>
        </div>
        <div className='align-items-center d-flex flex-column'>
          <h1 className='navigation-box-heading '>Create Schedule</h1>
        <div className="box p-2">
        <Link to='/schedulePost'>
          <img src='./images/im3.png' alt="Image 3" className="box-image" />
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default UperComponent;
