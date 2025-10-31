import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const PaymentsPage = () => {
  const { showToast, openModal } = useContext(AppContext);
  const payments = [
    { id: 'P001', bookingId: 'B001', amount: 5000, method: 'Card', status: 'Completed', date: '2024-07-01' },
    { id: 'P002', bookingId: 'B002', amount: 8000, method: 'Cash', status: 'Pending', date: '2024-07-02' },
    { id: 'P003', bookingId: 'B003', amount: 12000, method: 'Online', status: 'Refunded', date: '2024-07-03' },
    { id: 'P004', bookingId: 'B004', amount: 5000, method: 'Card', status: 'Completed', date: '2024-07-04' },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Completed':
        return <span className="badge bg-success">{status}</span>;
      case 'Pending':
        return <span className="badge bg-warning text-dark">{status}</span>;
      case 'Refunded':
        return <span className="badge bg-danger">{status}</span>;
      default:
        return <span className="badge bg-secondary">{status}</span>;
    }
  };

  const handleAddPayment = () => {
    openModal(
      <form>
        <div className="mb-3">
          <label htmlFor="bookingId" className="form-label">Booking ID</label>
          <input type="text" className="form-control" id="bookingId" placeholder="e.g., B001" />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Amount (BDT)</label>
          <input type="number" className="form-control" id="amount" placeholder="e.g., 5000" />
        </div>
        <div className="mb-3">
          <label htmlFor="method" className="form-label">Payment Method</label>
          <select id="method" className="form-select">
            <option>Card</option>
            <option>Cash</option>
            <option>Online</option>
          </select>
        </div>
        <div className="d-flex justify-content-end pt-3">
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              showToast('Payment added successfully!', 'success');
              // closeModal();
            }}
            className="btn btn-primary"
          >
            Save Payment
          </button>
        </div>
      </form>,
      'Add New Payment'
    );
  };

  return (
    <div className="container-fluid py-3">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-dark">Payments</h1>
        <button
          onClick={handleAddPayment}
          className="btn btn-primary shadow"
        >
          Add Payment
        </button>
      </div>

      <div className="card shadow-sm p-3 mb-4">
        <div className="d-flex flex-column flex-md-row gap-3 align-items-center">
          <select className="form-select">
            <option value="">Filter by Status</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Refunded">Refunded</option>
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
                  <th scope="col">Payment ID</th>
                  <th scope="col">Booking ID</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Method</th>
                  <th scope="col">Status</th>
                  <th scope="col">Date</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment) => (
                  <tr key={payment.id}>
                    <td>{payment.id}</td>
                    <td>{payment.bookingId}</td>
                    <td>৳ {payment.amount}</td>
                    <td>{payment.method}</td>
                    <td>{getStatusBadge(payment.status)}</td>
                    <td>{payment.date}</td>
                    <td>
                      <button
                        onClick={() => showToast(`Viewing Payment ${payment.id}`, 'info')}
                        className="btn btn-link text-primary p-0 me-2"
                      >
                        View
                      </button>
                      <button
                        onClick={() => showToast(`Editing Payment ${payment.id}`, 'info')}
                        className="btn btn-link text-info p-0 me-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => openModal(
                          <div>
                            <p>Are you sure you want to delete Payment {payment.id}?</p>
                            <div className="d-flex justify-content-end mt-3">
                              <button
                                onClick={() => { showToast(`Payment ${payment.id} deleted!`, 'danger'); }}
                                className="btn btn-danger"
                              >
                                Confirm Delete
                              </button>
                            </div>
                          </div>,
                          'Confirm Deletion'
                        )}
                        className="btn btn-link text-danger p-0"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsPage;
