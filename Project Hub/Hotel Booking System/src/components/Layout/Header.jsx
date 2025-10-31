import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const Header = () => {
  const { isSidebarCollapsed, setIsSidebarCollapsed, setCurrentPage, theme, toggleTheme } = useContext(AppContext);

  return (
    <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme === 'light' ? 'white' : 'dark'} shadow-sm fixed-top`}>
      <div className="container-fluid">
        <button
          className="navbar-toggler d-lg-none me-2"
          type="button"
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          aria-controls="sidebarMenu"
          aria-expanded={!isSidebarCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <a className="navbar-brand me-auto me-lg-0" href="#" onClick={() => setCurrentPage('dashboard')}>
          <div className="d-flex align-items-center">
            <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center text-white fw-bold me-2" style={{ width: '2rem', height: '2rem' }}>V</div>
            <span className="fw-bold text-dark">ViretaDev</span>
          </div>
        </a>

        <div className="d-flex align-items-center">
          <button
            className="btn btn-link text-decoration-none p-2 me-2"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <svg className="bi" width="1.5em" height="1.5em" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.464 13.5a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.929 3.536a.5.5 0 0 1 .707 0L6.05 4.95a.5.5 0 1 1-.707.707L4.929 3.536a.5.5 0 0 1 0-.707z"/>
              </svg>
            ) : (
              <svg className="bi" width="1.5em" height="1.5em" fill="currentColor" viewBox="0 0 16 16">
                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16c-4.467 0-8.068-3.593-8.068-8 0-1.5-.5-2.93-.99-4.297L.278 6zm1.75 2.125a.5.5 0 0 0-.398.995 7.014 7.014 0 0 1-.587 3.334c-.26.967-.41 1.933-.41 2.915 0 3.324 2.679 6.021 5.955 6.021.968 0 1.89-.234 2.716-.676a.5.5 0 0 0 .15-.657.5.5 0 0 0-.649-.153A6.333 6.333 0 0 0 8.5 15c-3.111 0-5.65-2.518-5.65-5.629 0-1.049.27-2.07.783-3.006a.5.5 0 0 0-.398-.995z"/>
              </svg>
            )}
          </button>

          <button className="btn btn-link text-decoration-none p-2 me-2" aria-label="Notifications">
            <svg className="bi" width="1.5em" height="1.5em" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
            </svg>
          </button>

          <div className="dropdown">
            <button className="btn btn-link text-decoration-none d-flex align-items-center p-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" aria-label="User profile">
              <img
                src="https://placehold.co/32x32/0d6efd/ffffff?text=U"
                alt="User Avatar"
                className="rounded-circle border border-secondary me-2"
                style={{ width: '2rem', height: '2rem' }}
              />
              <span className="d-none d-md-block text-dark fw-medium">John Doe</span>
              <svg className="bi d-none d-md-block ms-1" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="#">Profile</a></li>
              <li><a className="dropdown-item" href="#">Settings</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;