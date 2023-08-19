import React from 'react';
import './socialProfileCard.css';

const SocialProfileCard =({ profileName })=> {
  return (
        <div className='profile-card-conatiner'>
            <div className='profile-card'>
                <div className='profile-card-header '>
                    <div className='d-flex w-100 justify-content-between align-items-center'>

                    <p className='mb-0'>{profileName}</p>
                <i class="fa fa-trash p-2 delete-button-social-profile me-3"></i>
                    </div>
                </div>
                <div className='profile-card-body d-flex'>
                    
                </div>
            </div>
        </div>
  );
};

export default SocialProfileCard;
