import React, { useEffect, useState } from 'react'
import './FinalContentBox.css'
import ContentBox from '../ContentBox/ContentBox'
import OptionSelector from '../../OptionsSelector'
import { Link } from 'react-router-dom'
import PrivacyPolicyModal from '../../privacyModel/privacyModel'
// import Sidebar from '../../Sidebar/Sidebar';

const FinalContentBox = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const privacyPolicyAgreed = localStorage.getItem('privacyPolicyAgree');
  useEffect(() => {
    const delay = setTimeout(() => {
      if(!privacyPolicyAgreed)
      setShowPrivacyPolicy(true);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);
  return (
    <div className="container2 d-flex align-items-center flex-column">
      <OptionSelector arr={['linkedin', 'instagram', 'pinterest']} />
      <ContentBox />
      {showPrivacyPolicy && <PrivacyPolicyModal />}
      <div className="create-workplace-container d-flex flex-column ms-md-5 mt-md-5 mt-2 ms-2">
      <Link to="/workplace">
        <button className="vertical-button align-items-center mb-md-3">
          <p className="mb-0">create a new workspace </p>
          <span className="ms-2  plus-sign">+</span>
        </button>
      </Link>
        <button className="vertical-button align-items-center">
          <p className="mb-0"> create a new account </p>
          <span className="ms-2 plus-sign">+</span>
        </button>
      </div>
    </div>
  )
}

export default FinalContentBox
