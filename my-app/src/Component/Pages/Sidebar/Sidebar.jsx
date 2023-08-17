import React from 'react';
import { FaHome, FaChartBar, FaCalendarAlt, FaTasks, FaInbox, FaSearch, FaCog ,FaLibraryIcon} from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <>   
      <nav className="sidebar">
        <div className="profile-icon">
        
        </div>
        <div className="sidebar-heading">
          <img src= '/images/robot.png' alt="Robot" className="robot-image" />
          <h4>SOCIAL</h4>
        </div>
        <hr className="separator-line" />

        <div className="profile-icon">
        <img src='/images/User.png' />
        </div>
        <div className="sidebar-items">
          <a href="#">
            <img src='/images/das.png' className="iconImg" />
            Dashboard
          </a>

          <a href="#">
            <img src='/images/analysis.png' className="iconImg" />
            Analytics
          </a>
          <a href="#">
            <img src='/images/calender.png' className="iconImg" />
            Calendar
          </a>
          <a href="#">
            <img src='/images/planning.png' className="iconImg" />
            Planning
          </a>
          <a href="#">
            <img src='/images/inbox.png' className="iconImg" />
            Inbox
          </a>
          <a href="#">
            <img src='/images/Lib.png' className="iconImg" />
            Dashboard
          </a>
        
          <hr className="separator-line" />
          <h4 className='spaceh4'>Spaces</h4>
          <button className="space-button">
            <span>+</span> Add space
          </button>
        </div>

        <div className="search-bar">
          <FaSearch className="icon2" />
          <input type="text" className="search-input" placeholder="Search" />
        
        </div>
        
        <div className="settings-field">
          <FaCog className="icon2" />
          <span className="spaceh5">Settings</span>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;