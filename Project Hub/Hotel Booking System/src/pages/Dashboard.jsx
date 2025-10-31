import React, { useContext, useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { AppContext } from '../context/AppContext';

const Dashboard = () => {
  const { showToast, theme } = useContext(AppContext);
  const bookingsChartRef = useRef(null);
  const revenueChartRef = useRef(null);
  const bookingsChartInstance = useRef(null);
  const revenueChartInstance = useRef(null);

  useEffect(() => {
    const textColor = theme === 'dark' ? 'rgba(229, 231, 235, 0.8)' : 'rgba(33, 37, 41, 0.8)';
    const gridColor = theme === 'dark' ? 'rgba(156, 163, 175, 0.2)' : 'rgba(0, 0, 0, 0.1)';

    if (bookingsChartInstance.current) {
      bookingsChartInstance.current.destroy();
    }
    if (revenueChartInstance.current) {
      revenueChartInstance.current.destroy();
    }

    if (bookingsChartRef.current) {
      const ctx = bookingsChartRef.current.getContext('2d');
      bookingsChartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          datasets: [{
            label: 'Bookings',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
              labels: {
                color: textColor
              }
            },
            title: {
              display: true,
              text: 'Booking Trends',
              color: textColor
            }
          },
          scales: {
            x: {
              ticks: {
                color: textColor
              },
              grid: {
                color: gridColor
              }
            },
            y: {
              ticks: {
                color: textColor
              },
              grid: {
                color: gridColor
              }
            }
          }
        }
      });
    }

    if (revenueChartRef.current) {
      const ctx = revenueChartRef.current.getContext('2d');
      revenueChartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          datasets: [{
            label: 'Revenue (BDT)',
            data: [12000, 19000, 30000, 25000],
            backgroundColor: 'rgba(13, 110, 253, 0.5)',
            borderColor: 'rgba(13, 110, 253, 1)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
              labels: {
                color: textColor
              }
            },
            title: {
              display: true,
              text: 'Revenue Over Time',
              color: textColor
            }
          },
          scales: {
            x: {
              ticks: {
                color: textColor
              },
              grid: {
                color: gridColor
              }
            },
            y: {
              beginAtZero: true,
              ticks: {
                color: textColor
              },
              grid: {
                color: gridColor
              }
            }
          }
        }
      });
    }

    return () => {
      if (bookingsChartInstance.current) {
        bookingsChartInstance.current.destroy();
      }
      if (revenueChartInstance.current) {
        revenueChartInstance.current.destroy();
      }
    };
  }, [theme]);

  const recentBookings = [
    { id: 'B001', guest: 'Alice Smith', room: '101', checkIn: '2024-07-01', checkOut: '2024-07-05', status: 'Confirmed' },
    { id: 'B002', guest: 'Bob Johnson', room: '203', checkIn: '2024-07-02', checkOut: '2024-07-06', status: 'Pending' },
    { id: 'B003', guest: 'Charlie Brown', room: '305', checkIn: '2024-07-03', checkOut: '2024-07-07', status: 'Cancelled' },
    { id: 'B004', guest: 'Diana Prince', room: '102', checkIn: '2024-07-04', checkOut: '2024-07-08', status: 'Confirmed' },
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

  return (
    <div className="container-fluid py-3">
      <h1 className="mb-4 text-dark">Dashboard</h1>

      <div className="row g-4 mb-4">
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h3 className="card-title h5 text-muted mb-2">Total Bookings</h3>
              <p className="card-text h1 text-primary">1,234</p>
              <p className="card-text text-muted small">Last 30 days</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h3 className="card-title h5 text-muted mb-2">Available Rooms</h3>
              <p className="card-text h1 text-success">45</p>
              <p className="card-text text-muted small">Out of 120</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h3 className="card-title h5 text-muted mb-2">Occupied Rooms</h3>
              <p className="card-text h1 text-danger">75</p>
              <p className="card-text text-muted small">Current occupancy</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h3 className="card-title h5 text-muted mb-2">Total Revenue (Month)</h3>
              <p className="card-text h1 text-info">৳ 1,50,000</p>
              <p className="card-text text-muted small">This month so far</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-12 col-lg-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <div style={{ height: '250px' }}>
                <canvas ref={bookingsChartRef}></canvas>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <div style={{ height: '250px' }}>
                <canvas ref={revenueChartRef}></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h2 className="card-title h4 mb-4 text-dark">Recent Bookings</h2>
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
                {recentBookings.map((booking) => (
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
                        onClick={() => showToast(`Cancelling Booking ${booking.id}`, 'danger')}
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;