import React, { useState } from 'react'
import CreatePostModal from '../PopupModel'
import SchedulePostModal from '../Modals/schedulePost/SchedulePostModal'
import OptionSelector from '../OptionsSelector'
import { Link } from 'react-router-dom'

const Navbar = () => {
  // const [selectedOption, setSelectedOption] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false) // Add state to track modal open/close

  // const handleOptionChange = event => {
  //   setSelectedOption(event.target.value)
  // }

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }
  // const arr = ['Youtube', 'Instagram', 'facebook']
  return (
    <div className="d-flex align-items-center mb-md-2 flex-column">
      <div className="d-flex align-items-center navbar-custom-buttons me-md-5 me-2 mt-md-5 mt-2">
        <button type="button" className="btn custom-buttonn me-2" data-bs-toggle="modal" data-bs-target=".bd-example-modal-lg" onClick={handleOpenModal}>
          Add Post
        </button>

        <SchedulePostModal onClose={handleCloseModal} isOpen={isModalOpen} />

        <div className="d-flex settings-button-container">
          <img className="me-2" src="/images/das.png" alt="Dashboard" />
          <img className="me-2" src="/images/noti.png" alt="Notifications" />
          <img className="me-2" src="/images/setting.png" alt="Profile" />
          <Link to={'/socialprofile'}>
            <img className="" src="/images/pro.png" alt="Settings" />
          </Link>
        </div>
      </div>
      {/* <div className="change-account-container ms-md-5 ms-2 ">
        <p className="change-account mb-0">Click to change your account:</p>
        <div className="select-container">
          <select value={selectedOption} onChange={handleOptionChange} className="custom-select">
            <option value="">Select an option</option>
            {arr.map(ele => (
              <option className="option" key={ele} value={ele}>
                {ele}
              </option>
            ))}
          </select>
        </div>
      </div> */}
      {/* <OptionSelector arr={arr} /> */}
      {/* {isModalOpen && <CreatePostModal onClose={handleCloseModal} />} */}
    </div>
  )
}

export default Navbar
