import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faPinterest, faLinkedin, faGoogle, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import './ContentBox.css';

const ContentBox = () => {
  return (
    <div className="content-box">
      <div className="header">
        <h1 className="heading">Your Heading Here</h1>
        <p className="paragraph">Your paragraph text here.</p>
      </div>
      <div className="social-icons">
        <div className="icon-circle">
          <FontAwesomeIcon icon={faFacebook} className="icon" />
        </div>
        <div className="icon-circle">
          <FontAwesomeIcon icon={faTwitter} className="icon" />
        </div>
        <div className="icon-circle">
          <FontAwesomeIcon icon={faInstagram} className="icon" />
        </div>
        {/* Add other icons similarly */}
      </div>
    </div>
  );
};

export default ContentBox;
