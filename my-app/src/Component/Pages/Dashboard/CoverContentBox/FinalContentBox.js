// FinalContentBox.js

import React from 'react';
import './FinalContentBox.css';
import ContentBox from '../ContentBox/ContentBox';
import Sidebar from '../../Sidebar/Sidebar';
import das from './Images/das.png';
import noti from './Images/noti.png';
import pro from './Images/pro.png';
import setting from './Images/setting.png';

const FinalContentBox = () => {
  return (
    <div>
      <div className="header-container">
        <button className="custom-button">add post</button>
        <div className="header1">
          <img src={process.env.PUBLIC_URL + '/images/das.png'} alt="Dashboard" />
          <img src={process.env.PUBLIC_URL + '/images/noti.png'} alt="Notifications" />
          <img src={process.env.PUBLIC_URL + '/images/pro.png'} alt="Profile" />
          <img src={process.env.PUBLIC_URL + '/images/setting.png'} alt="Settings" />
        </div>
      </div>

      <div className="content-container">
        <ContentBox />
      </div>

      <div className="button-container">
        <button className="vertical-button">
          create a new workspace <span className="plus-sign">+</span>
        </button>
        <button className="vertical-button">
          create a new account <span className="plus-sign">+</span>
        </button>
      </div>
      <div className="button-container">
        <button className="vertical-button">
          create a new workspace <span className="plus-sign">+</span>
        </button>
       
      </div>

      <Sidebar />
    </div>
  );
};

export default FinalContentBox;
