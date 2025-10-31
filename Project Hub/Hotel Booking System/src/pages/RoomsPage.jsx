import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const RoomsPage = () => {
  const { showToast, openModal } = useContext(AppContext);
  const rooms = [
    { id: '101', type: 'Standard', status: 'Available', price: 5000, floor: 1 },
    { id: '102', type: 'Deluxe', status: 'Occupied', price: 8000, floor: 1 },
    { id: '201', type: 'Suite', status: 'Maintenance', price: 12000, floor: 2 },
    { id: '202', type: 'Standard', status: 'Available', price: 5000, floor: 2 },
    { id: '301', type: 'Deluxe', status: 'Available', price: 8000, floor: 3 },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Available':
        return <span className="badge bg-success">{status}</span>;
      case 'Occupied':
        return <span className="badge bg-danger">{status}</span>;
      case 'Maintenance':
        return <span className="badge bg-warning text-dark">{status}</span>;
      default:
        return <span className="badge bg-secondary">{status}</span>;
    }
  };

  const handleAddRoom = () => {
    openModal(
      <form>
        <div className="mb-3">
          <label htmlFor="roomNumber" className="form-label">Room Number</label>
          <input type="text" className="form-control" id="roomNumber" placeholder="e.g., 101" />
        </div>
        <div className="mb-3">
          <label htmlFor="roomType" className="form-label">Room Type</label>
          <select id="roomType" className="form-select">
            <option>Standard</option>
            <option>Deluxe</option>
            <option>Suite</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="roomPrice" className="form-label">Price (BDT)</label>
          <input type="number" className="form-control" id="roomPrice" placeholder="e.g., 5000" />
        </div>
        <div className="d-flex justify-content-end pt-3">
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              showToast('Room added successfully!', 'success');
              // closeModal();
            }}
            className="btn btn-primary"
          >
            Save Room
          </button>
        </div>
      </form>,
      'Add New Room'
    );
  };


  return (
    <div className="container-fluid py-3">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-dark">Rooms</h1>
        <button
          onClick={handleAddRoom}
          className="btn btn-primary shadow"
        >
          Add Room
        </button>
      </div>

      <div className="card shadow-sm p-3 mb-4">
        <div className="d-flex flex-column flex-md-row gap-3 align-items-center">
          <select className="form-select">
            <option value="">Filter by Status</option>
            <option value="Available">Available</option>
            <option value="Occupied">Occupied</option>
            <option value="Maintenance">Maintenance</option>
          </select>
          <select className="form-select">
            <option value="">Filter by Type</option>
            <option value="Standard">Standard</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Suite">Suite</option>
          </select>
          <button className="btn btn-secondary w-100 w-md-auto">
            Apply Filters
          </button>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        {rooms.map((room) => (
          <div key={room.id} className="col">
            <div className="card shadow-sm h-100 d-flex flex-column">
              <div className="card-body">
                <h3 className="card-title h5 mb-2 text-dark">Room {room.id}</h3>
                <p className="card-text text-muted mb-1">Type: <span className="fw-medium">{room.type}</span></p>
                <p className="card-text text-muted mb-1">Floor: <span className="fw-medium">{room.floor}</span></p>
                <p className="card-text text-muted mb-2">Price: <span className="fw-medium">৳ {room.price} / night</span></p>
                <div className="mb-3">Status: {getStatusBadge(room.status)}</div>
              </div>
              <div className="card-footer bg-transparent border-0 d-flex justify-content-end pt-0">
                <button
                  onClick={() => showToast(`Editing Room ${room.id}`, 'info')}
                  className="btn btn-info btn-sm me-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => openModal(
                    <div>
                      <p>Are you sure you want to delete Room {room.id}?</p>
                      <div className="d-flex justify-content-end mt-3">
                        <button
                          onClick={() => { showToast(`Room ${room.id} deleted!`, 'danger'); }}
                          className="btn btn-danger"
                        >
                          Confirm Delete
                        </button>
                      </div>
                    </div>,
                    'Confirm Deletion'
                  )}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomsPage;