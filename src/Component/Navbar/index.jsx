import React, { useState } from 'react';
import CreatePostModal from '../PopupModel';

const Navbar = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    const handleAddPostClick = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  return (
    <div className="d-flex align-items-center flex-column">
                    <div className="d-flex align-items-center navbar-custom-buttons me-md-5 me-2 mt-md-5 mt-2">
                    <button className="btn custom-buttonn me-2" onClick={handleAddPostClick}>
          Add Post
        </button>
        <div className="d-flex settings-button-container">
          <img className="me-2" src='/images/das.png' alt="Dashboard" />
          <img className="me-2" src='/images/noti.png' alt="Notifications" />
          <img className="me-2" src='/images/setting.png' alt="Profile" />
          <img className="" src='/images/pro.png' alt="Settings" />
        </div>
      </div>
    <div className='change-account-container ms-md-5 ms-2 '>
    <p className='change-account mb-0'>Click to change your account:</p>
    <div className="select-container">
        <select
          value={selectedOption}
          onChange={handleOptionChange}
          className="custom-select"
        >
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    </div>
    {isModalOpen && <CreatePostModal onClose={handleCloseModal} />}
    </div>
  );
};

export default Navbar;
