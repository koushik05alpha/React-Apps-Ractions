import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const Modal = () => {
  const { showModal, closeModal, modalContent, modalTitle } = useContext(AppContext);

  if (!showModal) return null;

  return (
    <div className={`modal fade ${showModal ? 'show d-block' : ''}`} tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{modalTitle}</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
          </div>
          <div className="modal-body">
            {modalContent}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
