import React from 'react';
import ReactDOM from 'react-dom/client';
import WrappedApp from './App';
import { AppProvider } from './context/AppContext';

// Import Bootstrap CSS (from CDN)
// Ensure this is loaded before your custom styles if you have any overrides
const bootstrapCssLink = document.createElement('link');
bootstrapCssLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
bootstrapCssLink.rel = 'stylesheet';
bootstrapCssLink.integrity = 'sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH';
bootstrapCssLink.crossOrigin = 'anonymous';
document.head.appendChild(bootstrapCssLink);

// Import Bootstrap JS (from CDN)
const bootstrapJsScript = document.createElement('script');
bootstrapJsScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
bootstrapJsScript.integrity = 'sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz';
bootstrapJsScript.crossOrigin = 'anonymous';
document.body.appendChild(bootstrapJsScript);

// Optional: Global styles for smooth transitions
const globalStyles = document.createElement('style');
globalStyles.innerHTML = `
  body {
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  /* Apply transitions to elements that change color/background based on theme */
  .text-dark,
  .text-muted,
  .modal-title,
  .modal-body,
  .form-label,
  .form-control,
  h1, h2, h3, h4, h5, h6,
  .card, .card-body, .card-title, .card-text,
  .table, .table th, .table td, .table-striped tbody tr:nth-of-type(odd) {
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  }
  .offcanvas {
    transition: transform 0.3s ease-in-out, background-color 0.3s ease;
  }
  .btn-link {
    transition: color 0.3s ease;
  }
  .bg-white {
      transition: background-color 0.3s ease;
  }
  .bg-light {
      transition: background-color 0.3s ease;
  }
  .bg-body-tertiary {
      transition: background-color 0.3s ease;
  }
  .shadow-sm {
      transition: box-shadow 0.3s ease;
  }
  .card {
      transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
  }
  .table-striped > tbody > tr:nth-of-type(odd) {
      transition: background-color 0.3s ease;
  }
  .table-hover > tbody > tr:hover {
      transition: background-color 0.3s ease;
  }
`;
document.head.appendChild(globalStyles);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <WrappedApp />
    </AppProvider>
  </React.StrictMode>
);