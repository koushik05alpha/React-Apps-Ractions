import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-muted text-center py-3 border-top">
      <div className="container-fluid">
        <p className="mb-0">&copy; {new Date().getFullYear()} ViretaDev. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;