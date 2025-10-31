import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const PayrollPage = () => {
  const { showToast, openModal } = useContext(AppContext);
  const payrolls = [
    { id: 'PR001', month: 'July 2024', totalAmount: 250000, status: 'Paid' },
    { id: 'PR002', month: 'June 2024', totalAmount: 240000, status: 'Paid' },
    { id: 'PR003', month: 'May 2024', totalAmount: 230000, status: 'Pending' },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Paid':
        return <span className="badge bg-success">{status}</span>;
      case 'Pending':
        return <span className="badge bg-warning text-dark">{status}</span>;
      default:
        return <span className="badge bg-secondary">{status}</span>;
    }
  };

  const handleGeneratePayroll = () => {
    showToast('Generating payroll for current month...', 'info');
    setTimeout(() => {
      showToast('Payroll generated successfully!', 'success');
    }, 1500);
  };

  return (
    <div className="container-fluid py-3">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-dark">Payroll</h1>
        <button
          onClick={handleGeneratePayroll}
          className="btn btn-primary shadow"
        >
          Generate Payroll
        </button>
      </div>

      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-hover align-middle">
              <thead>
                <tr>
                  <th scope="col">Payroll ID</th>
                  <th scope="col">Month</th>
                  <th scope="col">Total Amount</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {payrolls.map((payroll) => (
                  <tr key={payroll.id}>
                    <td>{payroll.id}</td>
                    <td>{payroll.month}</td>
                    <td>৳ {payroll.totalAmount}</td>
                    <td>{getStatusBadge(payroll.status)}</td>
                    <td>
                      <button
                        onClick={() => showToast(`Viewing Payroll ${payroll.id}`, 'info')}
                        className="btn btn-link text-primary p-0 me-2"
                      >
                        View
                      </button>
                      <button
                        onClick={() => showToast(`Editing Payroll ${payroll.id}`, 'info')}
                        className="btn btn-link text-info p-0 me-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => openModal(
                          <div>
                            <p>Are you sure you want to delete Payroll {payroll.id}?</p>
                            <div className="d-flex justify-content-end mt-3">
                              <button
                                onClick={() => { showToast(`Payroll ${payroll.id} deleted!`, 'danger'); }}
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

export default PayrollPage;