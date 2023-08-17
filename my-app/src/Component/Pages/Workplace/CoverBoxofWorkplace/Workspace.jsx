import React from 'react';
import './FinalContentBox.css';
import ContentBox from '../../Dashboard/ContentBox/ContentBox';
import Sidebar from '../../Sidebar/Sidebar';
import das from './Images/das.png';
import noti from './Images/noti.png';
import pro from './Images/pro.png';
import setting from './Images/setting.png';
import WorkspaceContentBox from '../ContentBox2/WorkspaceContentBox';
import Box from '../Box/Box';
import UperComponent from '../Header/UperComponent';

const Workspace = () => {
  return (
    <div className="workspace-container">
      <div className="header-container">
        <button className="custom-button">add post</button>
        <div className="header1">
          <img src={das.png} alt="Dashboard" />
          <img src={noti.png} alt="Notifications" />
          <img src={pro.png} alt="Profile" />
          <img src={setting.png} alt="Settings" />
        </div>
      </div>
      <UperComponent/>
    
      <WorkspaceContentBox/>
       <Box/>
      <Sidebar />

    
    </div>
  );
};

export default Workspace;
