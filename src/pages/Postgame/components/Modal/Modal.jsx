import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Hooks
import { useOnClickOutside } from '../../../../hooks';

// Styles
import './Modal.css';

function Modal({ children, isModalOpen, setIsModalOpen }) {
  // Refs
  const modalRef = useRef(null);

  // Hooks
  useOnClickOutside(modalRef, () => setIsModalOpen(false));

  if (isModalOpen) {
    return (
      <div className="modal tada" ref={modalRef}>
        <div className="modal-body">{children}</div>
      </div>
    );
  }

  return null;
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};

export default Modal;
