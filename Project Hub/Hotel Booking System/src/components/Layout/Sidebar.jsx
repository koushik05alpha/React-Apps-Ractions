import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const Sidebar = () => {
  const { isSidebarCollapsed, setIsSidebarCollapsed, currentPage, setCurrentPage } = useContext(AppContext);

  const menuItems = [
    { name: 'Dashboard', icon: (
      <svg className="bi me-2" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
        <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0L12.5 5.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-7h-1v7a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V8.293L1.5 1.5a1 1 0 0 1 0-1.414L7.293 1.5z"/>
      </svg>
    )},
    { name: 'Bookings', icon: (
      <svg className="bi me-2" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM14 4H2v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4z"/>
      </svg>
    )},
    { name: 'Rooms', icon: (
      <svg className="bi me-2" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
        <path d="M2 10a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3zm0-4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6zm0-4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V2z"/>
      </svg>
    )},
    { name: 'Guests', icon: (
      <svg className="bi me-2" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.718 0 2.687.63 3.24 1.276.593.69.758 1.456.76 1.72L15 13s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zM5 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
      </svg>
    )},
    { name: 'Payments', icon: (
      <svg className="bi me-2" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
        <path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm1 3v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6H1zm14-1V3a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 0 .5.5h.75a.5.5 0 0 0 0-1H2.5a.5.5 0 0 0-.5.5zm7 0a.5.5 0 0 0 .5.5h.75a.5.5 0 0 0 0-1H9.5a.5.5 0 0 0-.5.5zm-4 0a.5.5 0 0 0 .5.5h.75a.5.5 0 0 0 0-1H5.5a.5.5 0 0 0-.5.5zm0 2a.5.5 0 0 0 .5.5h.75a.5.5 0 0 0 0-1H5.5a.5.5 0 0 0-.5.5zm7 0a.5.5 0 0 0 .5.5h.75a.5.5 0 0 0 0-1H9.5a.5.5 0 0 0-.5.5z"/>
      </svg>
    )},
    { name: 'Inventory', icon: (
      <svg className="bi me-2" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
        <path d="M14 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/>
        <path d="M8 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"/>
      </svg>
    )},
    { name: 'Employees', icon: (
      <svg className="bi me-2" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.718 0 2.687.63 3.24 1.276.593.69.758 1.456.76 1.72L15 13s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zM5 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
      </svg>
    )},
    { name: 'Payroll', icon: (
      <svg className="bi me-2" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3.5a.5.5 0 0 1-.5-.5V4.5A.5.5 0 0 1 8 4z"/>
      </svg>
    )},
    { name: 'Reports', icon: (
      <svg className="bi me-2" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
        <path d="M14 14V4.5L9.5 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14H2V2h2.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H5v1h1v-.5a.5.5 0 0 1 .5-.5H7v1h1v-.5a.5.5 0 0 1 .5-.5H10v.5H9.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H10v.5H9.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H10v.5H9.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H10v.5H9.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H14V14H2V2h7.5z"/>
      </svg>
    )},
    { name: 'Settings', icon: (
      <svg className="bi me-2" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
        <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.186.686A1.89 1.89 0 0 1 4.27 3.654L1.94 4.899a1.885 1.885 0 0 0-1.115 2.6l.253.862a1.89 1.89 0 0 1 0 1.94l-.253.862a1.885 1.885 0 0 0 1.115 2.6l2.33 1.246a1.89 1.89 0 0 1 2.66 1.05l.187.686a1.89 1.89 0 0 0 2.81 0l.187-.686a1.89 1.89 0 0 1 2.66-1.05l2.33 1.246a1.885 1.885 0 0 0 1.115-2.6l-.253-.862a1.89 1.89 0 0 1 0 1.94l.253-.862a1.885 1.885 0 0 0-1.115-2.6L13.73 3.654a1.89 1.89 0 0 1-2.66-1.05l-.187-.686zM8 10.93a2.929 2.929 0 1 0 0-5.86 2.929 2.929 0 0 0 0 5.86z"/>
      </svg>
    )},
  ];

  return (
    <div className={`offcanvas offcanvas-start bg-white ${isSidebarCollapsed ? '' : 'show'}`} tabIndex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="sidebarMenuLabel">Menu</h5>
        <button type="button" className="btn-close text-reset" onClick={() => setIsSidebarCollapsed(true)} aria-label="Close"></button>
      </div>
      <div className="offcanvas-body d-flex flex-column p-0">
        <nav className="navbar-nav flex-column flex-grow-1 p-3">
          {menuItems.map((item) => (
            <a
              key={item.name}
              className={`nav-link d-flex align-items-center p-2 rounded ${currentPage === item.name.toLowerCase() ? 'active bg-primary text-white' : 'text-dark'}`}
              href="#"
              onClick={() => {
                setCurrentPage(item.name.toLowerCase());
                if (window.innerWidth < 992) {
                  setIsSidebarCollapsed(true);
                }
              }}
              aria-current={currentPage === item.name.toLowerCase() ? 'page' : undefined}
            >
              {item.icon}
              <span className="ms-2">{item.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;