import React, { useState, createContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [notifications, setNotifications] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalTitle, setModalTitle] = useState('');
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const showToast = (message, type = 'info') => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 3000);
  };

  const openModal = (content, title = 'Details') => {
    setModalContent(content);
    setModalTitle(title);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent(null);
    setModalTitle('');
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarCollapsed,
        setIsSidebarCollapsed,
        currentPage,
        setCurrentPage,
        showToast,
        notifications,
        showModal,
        openModal,
        closeModal,
        modalContent,
        modalTitle,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };