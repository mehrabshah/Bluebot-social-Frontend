import React from 'react'
import './FinalContentBox.css'
import ContentBox from '../ContentBox/ContentBox'
import OptionSelector from '../../OptionsSelector'
// import Sidebar from '../../Sidebar/Sidebar';

const FinalContentBox = () => {
  return (
    <div className="container2 d-flex align-items-center flex-column">
      <OptionSelector arr={['linkedin', 'instagram', 'pinterest']} />
      <ContentBox />
      <div className="create-workplace-container d-flex flex-column ms-md-5 mt-md-5 mt-2 ms-2">
        <button className="vertical-button align-items-center mb-md-3">
          <p className="mb-0">create a new workspace </p>
          <span className="ms-2  plus-sign">+</span>
        </button>

        <button className="vertical-button align-items-center">
          <p className="mb-0"> create a new account </p>
          <span className="ms-2 plus-sign">+</span>
        </button>
      </div>
    </div>
  )
}

export default FinalContentBox
