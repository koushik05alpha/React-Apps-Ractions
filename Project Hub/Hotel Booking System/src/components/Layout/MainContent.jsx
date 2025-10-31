import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const MainContent = ({ children }) => {
  const { isSidebarCollapsed } = useContext(AppContext);

  return (
    <main className={`flex-grow-1 p-3 mt-5 ${!isSidebarCollapsed ? 'main-content-shifted' : ''}`} style={{ transition: 'margin-left .3s ease-in-out' }}>
      <div className="container-fluid">
        {children}
      </div>
    </main>
  );
};

export default MainContent;