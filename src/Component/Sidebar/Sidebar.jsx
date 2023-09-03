import React from 'react';
import { FaHome, FaChartBar, FaCalendarAlt, FaTasks, FaInbox, FaSearch, FaCog ,FaLibraryIcon} from 'react-icons/fa';
import './Sidebar.css';
import { Outlet,Link } from 'react-router-dom';
import Navbar from '../Navbar';

const Sidebar = () => {
  return (
    <>   
      <div className='main-sidebar-container'>

      <nav className="sidebar">
        <div className="d-flex align-items-center container">
          <img src= '/images/robot.png' alt="Robot" className="img-fluid ms-0" />
          <h4 className='sidebar-logo-heading'>SOCIAL</h4>
        </div>
        <hr />

        <div className="profile-icon">
        <i className="fas fa-search"></i>
        {/* <RiUserAddLine/> */}
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
          <Link to="/schedulePost">
            <img src='/images/calender.png' className="iconImg" />
            Calendar
            </Link>
      
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
        
        </div>
        <hr></hr>
          <h4 className=''>Spaces</h4>
          <button className="space-button">
            <span>+</span> Add space
          </button>

        <div className="">
          <FaSearch className="" />
          <input type="text" className="search-input-sidebar" placeholder="Search" />
        
        </div>
        
        <div className="">
          <FaCog className="me-4" />
          <span className="">Settings</span>
        </div>
      </nav>
      <div className='navbar-container-sidebar'>

      <Navbar/>
      </div>
      </div>
      <div className='outlet-container'>

      <Outlet/>
      </div>
    </>
  );
};

export default Sidebar;