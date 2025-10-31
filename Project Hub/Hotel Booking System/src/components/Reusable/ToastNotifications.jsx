import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const ToastNotifications = () => {
  const { notifications } = useContext(AppContext);

  const getTypeClasses = (type) => {
    switch (type) {
      case 'success':
        return 'bg-success';
      case 'error':
        return 'bg-danger';
      case 'warning':
        return 'bg-warning';
      default:
        return 'bg-primary';
    }
  };

  return (
    <div style={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 1050 }}>
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`toast show ${getTypeClasses(notification.type)} text-white border-0 mb-2`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body">
              {notification.message}
            </div>
            <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToastNotifications;