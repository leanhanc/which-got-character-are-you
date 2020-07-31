import React from 'react';
import PropTypes from 'prop-types';

import './Modal.css';

function Modal({ children }) {
  return (
    <div className="modal tada">
      <div className="modal-body">{children}</div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
};

export default Modal;
