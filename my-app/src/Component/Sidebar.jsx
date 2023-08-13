

import React from 'react';
import { FaHome, FaChartBar, FaCalendarAlt, FaTasks, FaInbox, FaUserPlus, FaSearch, FaCog } from 'react-icons/fa';
import robotImage from './Images/robot.png'; // Replace with the actual path to your robot image
import './Sidebar.css';

const Sidebar = () => {
  return (
    <>   
      <nav className="sidebar">
        <div className="profile-icon">
          <FaUserPlus className="icon" />
        </div>
        <div className="sidebar-heading">
          <img src={robotImage} alt="Robot" className="robot-image" />
          <h3>SOCIAL</h3>
        </div>
        <hr className="separator-line" />
        <div className="sidebar-items">
          <a href="#">
            <FaHome className="icon" />
            Dashboard
          </a>
          <a href="#">
            <FaChartBar className="icon" />
            Analytics
          </a>
          <a href="#">
            <FaCalendarAlt className="icon" />
            Calendar
          </a>
          <a href="#">
            <FaTasks className="icon" />
            Planning
          </a>
          <a href="#">
            <FaInbox className="icon" />
            Inbox
          </a>
          <hr className="separator-line" />
          <h4>Space</h4>
          <button className="space-button">
            <span>+</span> Add space
          </button>
        </div>

        <div className="search-bar">
          <FaSearch className="icon2" />
          <input type="text" placeholder="Search" className="search-input" />
        </div>
        
        <div className="settings-field">
          <FaCog className="icon2" />
          Settings
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
