import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const InventoryPage = () => {
  const { showToast, openModal } = useContext(AppContext);
  const inventoryItems = [
    { id: 'I001', name: 'Bed Sheets (King)', category: 'Linens', stock: 50, lowStock: 10 },
    { id: 'I002', name: 'Towels (Bath)', category: 'Linens', stock: 120, lowStock: 20 },
    { id: 'I003', name: 'Shampoo (Small)', category: 'Toiletries', stock: 300, lowStock: 50 },
    { id: 'I004', name: 'Coffee Sachets', category: 'Amenities', stock: 80, lowStock: 20 },
    { id: 'I005', name: 'Cleaning Spray', category: 'Cleaning Supplies', stock: 15, lowStock: 5 },
  ];

  const getStockBadge = (stock, lowStockThreshold) => {
    if (stock <= lowStockThreshold) {
      return <span className="badge bg-danger">Low Stock</span>;
    } else if (stock <= lowStockThreshold * 2) {
      return <span className="badge bg-warning text-dark">Medium Stock</span>;
    } else {
      return <span className="badge bg-success">In Stock</span>;
    }
  };

  const handleAddItem = () => {
    openModal(
      <form>
        <div className="mb-3">
          <label htmlFor="itemName" className="form-label">Item Name</label>
          <input type="text" className="form-control" id="itemName" placeholder="e.g., Bed Sheets" />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <input type="text" className="form-control" id="category" placeholder="e.g., Linens" />
        </div>
        <div className="mb-3">
          <label htmlFor="stock" className="form-label">Stock Quantity</label>
          <input type="number" className="form-control" id="stock" placeholder="e.g., 100" />
        </div>
        <div className="d-flex justify-content-end pt-3">
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              showToast('Inventory item added successfully!', 'success');
              // closeModal();
            }}
            className="btn btn-primary"
          >
            Save Item
          </button>
        </div>
      </form>,
      'Add New Inventory Item'
    );
  };

  return (
    <div className="container-fluid py-3">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-dark">Inventory Management</h1>
        <button
          onClick={handleAddItem}
          className="btn btn-primary shadow"
        >
          Add Item
        </button>
      </div>

      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-hover align-middle">
              <thead>
                <tr>
                  <th scope="col">Item ID</th>
                  <th scope="col">Item Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {inventoryItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>{item.stock}</td>
                    <td>{getStockBadge(item.stock, item.lowStock)}</td>
                    <td>
                      <button
                        onClick={() => showToast(`Editing Item ${item.id}`, 'info')}
                        className="btn btn-link text-info p-0 me-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => openModal(
                          <div>
                            <p>Are you sure you want to delete Item {item.id}?</p>
                            <div className="d-flex justify-content-end mt-3">
                              <button
                                onClick={() => { showToast(`Item ${item.id} deleted!`, 'danger'); }}
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

export default InventoryPage;
