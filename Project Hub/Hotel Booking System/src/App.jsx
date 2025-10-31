import React, { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import MainContent from './components/Layout/MainContent';
import Footer from './components/Layout/Footer';
import ToastNotifications from './components/Reusable/ToastNotifications';
import Modal from './components/Reusable/Modal';

// Page Components
import Dashboard from './pages/Dashboard';
import BookingsPage from './pages/BookingsPage';
import RoomsPage from './pages/RoomsPage';
import GuestsPage from './pages/GuestsPage';
import PaymentsPage from './pages/PaymentsPage';
import InventoryPage from './pages/InventoryPage';
import EmployeesPage from './pages/EmployeesPage';
import PayrollPage from './pages/PayrollPage';
import ReportsPage from './pages/ReportsPage';
import SettingsPage from './pages/SettingsPage';

const App = () => {
  const { currentPage, theme, isSidebarCollapsed, setIsSidebarCollapsed } = useContext(AppContext);

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);

    const sidebarElement = document.getElementById('sidebarMenu');
    if (sidebarElement) {
      if (window.innerWidth >= 992) {
        if (isSidebarCollapsed) {
          sidebarElement.classList.remove('show');
          sidebarElement.classList.add('hide');
        } else {
          sidebarElement.classList.add('show');
          sidebarElement.classList.remove('hide');
        }
      } else {
        sidebarElement.classList.remove('hide');
      }
    }

    const mainContentElement = document.querySelector('main');
    if (mainContentElement) {
      if (window.innerWidth >= 992) {
        mainContentElement.style.marginLeft = isSidebarCollapsed ? '0' : '250px';
      } else {
        mainContentElement.style.marginLeft = '0';
      }
    }

  }, [theme, isSidebarCollapsed]);

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'bookings':
        return <BookingsPage />;
      case 'rooms':
        return <RoomsPage />;
      case 'guests':
        return <GuestsPage />;
      case 'payments':
        return <PaymentsPage />;
      case 'inventory':
        return <InventoryPage />;
      case 'employees':
        return <EmployeesPage />;
      case 'payroll':
        return <PayrollPage />;
      case 'reports':
        return <ReportsPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-body-tertiary">
      <Header />
      <Sidebar />
      <MainContent>
        {renderPage()}
      </MainContent>
      <Footer />
      <ToastNotifications />
      <Modal />
    </div>
  );
};

export default App;
