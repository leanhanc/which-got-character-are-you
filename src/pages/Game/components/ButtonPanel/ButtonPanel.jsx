import React from 'react';
import PropTypes from 'prop-types';

// Components
import { OptionButton } from '../../../../components';

// Styles
import './ButtonPanel.css';

function ButtonPanel({ handleUserAnswer }) {
  // Handlers
  const handleAgree = () => handleUserAnswer('AGREE');
  const handleStronglyAgree = () => handleUserAnswer('STRONGLY_AGREE');
  const handleDisagree = () => handleUserAnswer('DISAGREE');
  const handleStronglyDisagree = () => handleUserAnswer('STRONGLY_DISAGREE');

  return (
    <ul id="ButtonPanel" className="button-panel-list">
      <li className="button-panel-list-item">
        <OptionButton onClick={handleStronglyAgree}>MUY DE ACUERDO</OptionButton>
      </li>
      <li className="button-panel-list-item">
        <OptionButton onClick={handleAgree}>DE ACUERDO</OptionButton>
      </li>
      <li className="button-panel-list-item">
        <OptionButton onClick={handleDisagree}>DESACUERDO</OptionButton>
      </li>
      <li className="button-panel-list-item">
        <OptionButton onClick={handleStronglyDisagree}>MUY EN DESACUERDO</OptionButton>
      </li>
    </ul>
  );
}

ButtonPanel.propTypes = {
  handleUserAnswer: PropTypes.func.isRequired,
};

export default ButtonPanel;
