import React, { useContext, useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { AppContext } from '../context/AppContext';

const ReportsPage = () => {
  const { showToast, theme } = useContext(AppContext);
  const salesChartRef = useRef(null);
  const occupancyChartRef = useRef(null);
  const salesChartInstance = useRef(null);
  const occupancyChartInstance = useRef(null);

  useEffect(() => {
    const textColor = theme === 'dark' ? 'rgba(229, 231, 235, 0.8)' : 'rgba(33, 37, 41, 0.8)';
    const gridColor = theme === 'dark' ? 'rgba(156, 163, 175, 0.2)' : 'rgba(0, 0, 0, 0.1)';

    if (salesChartInstance.current) {
      salesChartInstance.current.destroy();
    }
    if (occupancyChartInstance.current) {
      occupancyChartInstance.current.destroy();
    }

    if (salesChartRef.current) {
      const ctx = salesChartRef.current.getContext('2d');
      salesChartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Monthly Sales (BDT)',
            data: [150000, 180000, 220000, 190000, 250000, 210000],
            backgroundColor: 'rgba(25, 135, 84, 0.5)',
            borderColor: 'rgba(25, 135, 84, 1)',
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
              text: 'Monthly Sales Report',
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

    if (occupancyChartRef.current) {
      const ctx = occupancyChartRef.current.getContext('2d');
      occupancyChartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Q1', 'Q2', 'Q3', 'Q4'],
          datasets: [{
            label: 'Occupancy Rate (%)',
            data: [75, 82, 90, 78],
            fill: false,
            borderColor: 'rgb(220, 53, 69)',
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
              text: 'Quarterly Occupancy Rate',
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
              max: 100,
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
      if (salesChartInstance.current) {
        salesChartInstance.current.destroy();
      }
      if (occupancyChartInstance.current) {
        occupancyChartInstance.current.destroy();
      }
    };
  }, [theme]);

  return (
    <div className="container-fluid py-3">
      <h1 className="mb-4 text-dark">Reports</h1>

      <div className="row g-4 mb-4">
        <div className="col-12 col-lg-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <div style={{ height: '250px' }}>
                <canvas ref={salesChartRef}></canvas>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <div style={{ height: '250px' }}>
                <canvas ref={occupancyChartRef}></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h2 className="card-title h4 mb-4 text-dark">Generate Custom Reports</h2>
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <label htmlFor="reportType" className="form-label">Report Type</label>
              <select id="reportType" className="form-select">
                <option>Booking Summary</option>
                <option>Guest Demographics</option>
                <option>Room Utilization</option>
                <option>Financial Overview</option>
              </select>
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="dateRange" className="form-label">Date Range</label>
              <input type="month" id="dateRange" className="form-control" />
            </div>
          </div>
          <div className="d-flex justify-content-end mt-4">
            <button
              onClick={() => showToast('Generating report...', 'info')}
              className="btn btn-primary shadow"
            >
              Generate Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;