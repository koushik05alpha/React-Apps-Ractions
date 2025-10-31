import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const EmployeesPage = () => {
  const { showToast, openModal } = useContext(AppContext);
  const employees = [
    { id: 'E001', name: 'Rahim Ahmed', designation: 'Manager', phone: '01700000001', status: 'Active' },
    { id: 'E002', name: 'Karim Hossain', designation: 'Receptionist', phone: '01700000002', status: 'Active' },
    { id: 'E003', name: 'Fatema Begum', designation: 'Housekeeping', phone: '01700000003', status: 'Inactive' },
    { id: 'E004', name: 'Sajid Khan', designation: 'Chef', phone: '01700000004', status: 'Active' },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Active':
        return <span className="badge bg-success">{status}</span>;
      case 'Inactive':
        return <span className="badge bg-danger">{status}</span>;
      default:
        return <span className="badge bg-secondary">{status}</span>;
    }
  };

  const handleAddEmployee = () => {
    openModal(
      <form>
        <div className="mb-3">
          <label htmlFor="employeeName" className="form-label">Employee Name</label>
          <input type="text" className="form-control" id="employeeName" placeholder="Enter employee name" />
        </div>
        <div className="mb-3">
          <label htmlFor="designation" className="form-label">Designation</label>
          <input type="text" className="form-control" id="designation" placeholder="e.g., Manager" />
        </div>
        <div className="mb-3">
          <label htmlFor="employeePhone" className="form-label">Phone</label>
          <input type="tel" className="form-control" id="employeePhone" placeholder="e.g., 01XXXXXXXXX" />
        </div>
        <div className="d-flex justify-content-end pt-3">
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              showToast('Employee added successfully!', 'success');
              // closeModal();
            }}
            className="btn btn-primary"
          >
            Save Employee
          </button>
        </div>
      </form>,
      'Add New Employee'
    );
  };

  return (
    <div className="container-fluid py-3">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-dark">Employees</h1>
        <button
          onClick={handleAddEmployee}
          className="btn btn-primary shadow"
        >
          Add Employee
        </button>
      </div>

      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-hover align-middle">
              <thead>
                <tr>
                  <th scope="col">Employee ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Designation</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.designation}</td>
                    <td>{employee.phone}</td>
                    <td>{getStatusBadge(employee.status)}</td>
                    <td>
                      <button
                        onClick={() => showToast(`Editing Employee ${employee.id}`, 'info')}
                        className="btn btn-link text-info p-0 me-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => openModal(
                          <div>
                            <p>Are you sure you want to delete Employee {employee.id}?</p>
                            <div className="d-flex justify-content-end mt-3">
                              <button
                                onClick={() => { showToast(`Employee ${employee.id} deleted!`, 'danger'); }}
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

export default EmployeesPage;