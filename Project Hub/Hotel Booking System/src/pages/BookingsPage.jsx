import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const BookingsPage = () => {
  const { showToast, openModal } = useContext(AppContext);

  const bookings = [
    { id: 'B001', guest: 'Alice Smith', room: '101', checkIn: '2024-07-01', checkOut: '2024-07-05', status: 'Confirmed' },
    { id: 'B002', guest: 'Bob Johnson', room: '203', checkIn: '2024-07-02', checkOut: '2024-07-06', status: 'Pending' },
    { id: 'B003', guest: 'Charlie Brown', room: '305', checkIn: '2024-07-03', checkOut: '2024-07-07', status: 'Cancelled' },
    { id: 'B004', guest: 'Diana Prince', room: '102', checkIn: '2024-07-04', checkOut: '2024-07-08', status: 'Confirmed' },
    { id: 'B005', guest: 'Eve Adams', room: '201', checkIn: '2024-07-05', checkOut: '2024-07-09', status: 'Confirmed' },
    { id: 'B006', guest: 'Frank White', room: '301', checkIn: '2024-07-06', checkOut: '2024-07-10', status: 'Pending' },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Confirmed':
        return <span className="badge bg-success">{status}</span>;
      case 'Pending':
        return <span className="badge bg-warning text-dark">{status}</span>;
      case 'Cancelled':
        return <span className="badge bg-danger">{status}</span>;
      default:
        return <span className="badge bg-secondary">{status}</span>;
    }
  };

  const handleAddBooking = () => {
    openModal(
      <form>
        <div className="mb-3">
          <label htmlFor="guestName" className="form-label">Guest Name</label>
          <input type="text" className="form-control" id="guestName" placeholder="Enter guest name" />
        </div>
        <div className="mb-3">
          <label htmlFor="roomNumber" className="form-label">Room Number</label>
          <input type="text" className="form-control" id="roomNumber" placeholder="e.g., 101" />
        </div>
        <div className="mb-3">
          <label htmlFor="checkIn" className="form-label">Check-in Date</label>
          <input type="date" className="form-control" id="checkIn" />
        </div>
        <div className="mb-3">
          <label htmlFor="checkOut" className="form-label">Check-out Date</label>
          <input type="date" className="form-control" id="checkOut" />
        </div>
        <div className="d-flex justify-content-end pt-3">
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              showToast('Booking added successfully!', 'success');
              // closeModal();
            }}
            className="btn btn-primary"
          >
            Save Booking
          </button>
        </div>
      </form>,
      'Add New Booking'
    );
  };

  return (
    <div className="container-fluid py-3">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-dark">Bookings</h1>
        <button
          onClick={handleAddBooking}
          className="btn btn-primary shadow"
        >
          Add Booking
        </button>
      </div>

      <div className="card shadow-sm p-3 mb-4">
        <div className="d-flex flex-column flex-md-row gap-3 align-items-center">
          <input
            type="text"
            placeholder="Search by Guest Name or Booking ID..."
            className="form-control flex-grow-1"
          />
          <select className="form-select">
            <option value="">Filter by Status</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Pending">Pending</option>
            <option value="Cancelled">Cancelled</option>
          </select>
          <input type="date" className="form-control" />
          <button className="btn btn-secondary w-100 w-md-auto">
            Apply Filters
          </button>
        </div>
      </div>

      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-hover align-middle">
              <thead>
                <tr>
                  <th scope="col">Booking ID</th>
                  <th scope="col">Guest Name</th>
                  <th scope="col">Room</th>
                  <th scope="col">Check-in</th>
                  <th scope="col">Check-out</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td>{booking.id}</td>
                    <td>{booking.guest}</td>
                    <td>{booking.room}</td>
                    <td>{booking.checkIn}</td>
                    <td>{booking.checkOut}</td>
                    <td>{getStatusBadge(booking.status)}</td>
                    <td>
                      <button
                        onClick={() => showToast(`Viewing Booking ${booking.id}`, 'info')}
                        className="btn btn-link text-primary p-0 me-2"
                        aria-label={`View booking ${booking.id}`}
                      >
                        View
                      </button>
                      <button
                        onClick={() => showToast(`Editing Booking ${booking.id}`, 'info')}
                        className="btn btn-link text-info p-0 me-2"
                        aria-label={`Edit booking ${booking.id}`}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => openModal(
                          <div>
                            <p>Are you sure you want to cancel booking {booking.id}?</p>
                            <div className="d-flex justify-content-end mt-3">
                              <button
                                onClick={() => { showToast(`Booking ${booking.id} cancelled!`, 'danger'); }}
                                className="btn btn-danger"
                              >
                                Confirm Cancel
                              </button>
                            </div>
                          </div>,
                          'Confirm Cancellation'
                        )}
                        className="btn btn-link text-danger p-0"
                        aria-label={`Cancel booking ${booking.id}`}
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <nav aria-label="Page navigation example" className="d-flex justify-content-center mt-3">
            <ul className="pagination">
              <li className="page-item"><a className="page-link" href="#">Previous</a></li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default BookingsPage;