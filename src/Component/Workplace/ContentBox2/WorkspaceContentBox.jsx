// WorkspaceContentBox.js

import React from 'react';
import './WorkspaceContentBox.css';


const WorkspaceContentBox = () => {
  return (
    <div className="content-box w-100 mt-0">
      <div className="image-container p-md-4">
        <div className="image-tile">
          <img src='./images/image1.png' alt="Image 1" className="content-image img-fluid" />
          <p className="image-description">Facebook</p>
        </div>

        <div className="image-tile">
          <img src='/images/image2.png' alt="Image 2" className="content-image img-fluid" />
          <p className="image-description">Pintrest</p>
        </div>
          
        <div className="image-tile">
          <img src='/images/image3.png' alt="Image 2" className="content-image img-fluid" />
          <p className="image-description">Youtube</p>
        </div>

        <div className="image-tile">
          <img src='/images/image4.png' alt="Image 2" className="content-image img-fluid" />
          <p className="image-description">TickTock</p>
        </div>

        <div className="image-tile">
          <img src='/images/image5.png' alt="Image 2" className="content-image img-fluid" />
          <p className="image-description">Google</p>
        </div>

        <div className="image-tile">
          <img src='/images/insta.png' alt="Image 2" className="content-image img-fluid" />
          <p className="image-description">instragram</p>
        </div>

        <div className="image-tile">
          <img src='/images/image7.png' alt="Image 2" className="content-image img-fluid" />
          <p className="image-description">Twiter</p>
        </div>
        <div className="image-tile">
          <img src='/images/image7.png' alt="Image 2" className="content-image img-fluid" />
          <p className="image-description">LinkedIn</p>
        </div>
      </div>
        <button className='btn custom-buttonn mb-2 mb-md-4 next-button me-md-4 me-2'>Next</button>
    </div>
  );
};

export {WorkspaceContentBox};
