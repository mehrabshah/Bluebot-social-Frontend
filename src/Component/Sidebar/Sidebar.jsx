import React from 'react'
import { FaHome, FaChartBar, FaCalendarAlt, FaTasks, FaInbox, FaSearch, FaCog, FaLibraryIcon } from 'react-icons/fa'
import './Sidebar.css'
import { Outlet, Link } from 'react-router-dom'
import Navbar from '../Navbar'

const Sidebar = () => {
  return (
    <>
      <div className="main-sidebar-container">
        <nav className="sidebar">
          <div className="d-flex align-items-center container">
            <img src="/images/robot.png" alt="Robot" className="img-fluid ms-0" />
            <h4 className="sidebar-logo-heading">SOCIAL</h4>
          </div>
          <hr />

          <div className="profile-icon">
            <i className="fas fa-search"></i>
            {/* <RiUserAddLine/> */}
          </div>
          <div className="sidebar-items">
            <Link to="/dashboard" disabled={true}>
              <img src="/images/das.png" alt="dashboardImage" className="iconImg" />
              Dashboard
            </Link>

            <Link to="/dashboard" disabled={true}>
              <img src="/images/analysis.png" alt="alalysisImage" className="iconImg" />
              Analytics
            </Link>
            <Link to="/schedulePost">
              <img src="/images/calender.png" alt="calenderImage" className="iconImg" />
              Calendar
            </Link>

            <Link to="/dashboard" disabled={true}>
              <img src="/images/planning.png" alt="planningImage" className="iconImg" />
              Planning
            </Link>
            <Link to="/dashboard" disabled={true}>
              <img src="/images/inbox.png" alt="inboxImage" className="iconImg" />
              Inbox
            </Link>
          </div>
          <hr></hr>
          <h4 className="">Spaces</h4>
          <button className="space-button">
            <span>+</span> Add space
          </button>

          <div className="search-container">
            <FaSearch className="search-icon" />
            <input type="text" className="search-input-sidebar" placeholder="Search" />
          </div>

          <div className="">
            <FaCog className="me-4" />
            <span className="">Settings</span>
          </div>
        </nav>
        <div className="navbar-container-sidebar">
          <Navbar />
        </div>
      </div>
      <div className="outlet-container">
        <Outlet />
      </div>
    </>
  )
}

export default Sidebar
