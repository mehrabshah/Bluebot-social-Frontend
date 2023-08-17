import React from 'react';
import './FinalContentBox.css';
import ContentBox from '../ContentBox/ContentBox';
import Sidebar from '../../Sidebar/Sidebar';

const FinalContentBox = () => {
  return (
    <div className="container2">
      <div className="header-container2">
        <button className="custom-button">add post</button>
        <div className="header1">
          <img src='/images/das.png' alt="Dashboard" />
          <img src='/images/noti.png' alt="Notifications" />
          <img src='/images/setting.png' alt="Profile" />
          <img src='/images/pro.png' alt="Settings" />
        </div>
      </div>

      
       
  <ContentBox/>

      <button className="vertical-button">
        create a new workspace <span className="plus-sign">+</span>
      </button>

      <button className="vertical-button">
        create a new account <span className="plus-sign">+</span>
      </button>

      <Sidebar />
    </div>
  );
};

export default FinalContentBox;
