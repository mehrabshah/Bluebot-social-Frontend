import React from 'react';
import './FinalContentBox.css';
import ContentBox from './ContentBox';
import Sidebar from './Sidebar';
import das from './Images/das.png';
import noti from './Images/noti.png';
import pro from './Images/pro.png';
import setting from './Images/setting.png';
import WorkspaceContentBox from './WorkspaceContentBox';
import Box from './Box';
import UperComponent from './UperComponent';

const Workspace = () => {
  return (
    <div className="workspace-container">
      <div className="header-container">
        <button className="custom-button">add post</button>
        <div className="header1">
          <img src={das} alt="Dashboard" />
          <img src={noti} alt="Notifications" />
          <img src={pro} alt="Profile" />
          <img src={setting} alt="Settings" />
        </div>
      </div>
   
      <UperComponent/>
     
      <WorkspaceContentBox />
    
      <Sidebar />

      <Box />
    </div>
  );
};

export default Workspace;
