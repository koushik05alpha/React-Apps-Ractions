import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const SettingsPage = () => {
  const { showToast } = useContext(AppContext);

  const handleSaveSettings = () => {
    showToast('Settings saved successfully!', 'success');
  };

  return (
    <div className="container-fluid py-3">
      <h1 className="mb-4 text-dark">Settings</h1>

      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h2 className="card-title h4 mb-4 text-dark">Hotel Information</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="hotelName" className="form-label">Hotel Name</label>
              <input type="text" id="hotelName" defaultValue="ViretaDev Hotel" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="hotelAddress" className="form-label">Address</label>
              <textarea id="hotelAddress" rows="3" defaultValue="123 Main Street, City, Country" className="form-control"></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="hotelPhone" className="form-label">Phone</label>
              <input type="tel" id="hotelPhone" defaultValue="01234567890" className="form-control" />
            </div>
            <div className="d-flex justify-content-end">
              <button
                type="button"
                onClick={handleSaveSettings}
                className="btn btn-primary shadow"
              >
                Save Hotel Info
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h2 className="card-title h4 mb-4 text-dark">User & Permissions</h2>
          <p className="card-text text-muted">Manage user accounts, roles, and access permissions here.</p>
          <button
            onClick={() => showToast('Navigating to user management...', 'info')}
            className="btn btn-secondary mt-3"
          >
            Go to User Management
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;