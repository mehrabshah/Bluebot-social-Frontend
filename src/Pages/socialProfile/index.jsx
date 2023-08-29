import React, { useState } from 'react';
import './socialProfile.css'
import SocialProfileCard from '../../Component/SocialProfileCard';
const SocialProfile = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const profiles = [
    { id: 1, name: 'Profile 1' },
    { id: 2, name: 'Profile 2' },
    { id: 3, name: 'Profile 3' },
    { id: 4, name: 'Profile 4' },
    { id: 5, name: 'Profile 5' },
    { id: 6, name: 'Profile 6' },
    { id: 7, name: 'Profile 7' },
    { id: 8, name: 'Profile 8' },
  ];
  return (
    <div className="workspace-container d-flex align-items-center flex-column">
    <div className='container mb-md-5'>

    <div className='container'>
        <div className='profile-grid'>
          {profiles.map(profile => (
              <SocialProfileCard key={profile.id} profileName={profile.name} />
              ))}
        </div>
      </div>
              </div>
    </div>
  );
};

export default SocialProfile;
