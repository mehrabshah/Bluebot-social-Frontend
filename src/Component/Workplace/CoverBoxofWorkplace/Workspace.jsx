import React, { useState } from 'react';
import ContentBox from '../../Dashboard/ContentBox/ContentBox';
import Sidebar from '../../Sidebar/Sidebar';
import {WorkspaceContentBox} from '../ContentBox2/WorkspaceContentBox';
import Box from '../Box/Box';
import UperComponent from '../Header/UperComponent';
import './Workspace.css'
const Workspace = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="workspace-container d-flex align-items-center flex-column">
      <UperComponent/>
   <div className='row p-5'>
    <div className='col-md-8'>
      <WorkspaceContentBox/>
    </div>
    <div className='col-md-4'>
       <Box/>
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
      {/* <p>Selected option: {selectedOption}</p> */}
    </div>
    </div>
  );
};

export default Workspace;
