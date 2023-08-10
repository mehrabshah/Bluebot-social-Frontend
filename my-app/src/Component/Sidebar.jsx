import React from 'react';
import { FaHome, FaChartBar, FaCalendarAlt, FaTasks, FaInbox, FaUserPlus } from 'react-icons/fa';
import robotImage from './Images/robot.png'; // Replace with the actual path to your robot image
import './Sidebar.css';
import ContentBox from './ContentBox';

const Sidebar = () => {
  return (
<>   
    <nav className="sidebar">
      <div className="profile-icon">
        <FaUserPlus className="icon" />
      </div>
      <div className="sidebar-heading">
        <img src={robotImage} alt="Robot" className="robot-image" />
        <hr className="separator-line" />
        <h3>SOCIAL</h3>
      </div>
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
      </div>
    </nav>
    <ContentBox/>
    </>
  );
};

export default Sidebar;
