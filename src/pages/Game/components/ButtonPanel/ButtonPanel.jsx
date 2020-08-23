import React from 'react';
import PropTypes from 'prop-types';

// Components
import { OptionButton } from '../../../../components';

// Enums
import { LANG } from '../../../../utils/enums';

// Styles
import './ButtonPanel.css';

function ButtonPanel({ handleUserAnswer, lang }) {
  // Handlers
  const handleAgree = () => handleUserAnswer('AGREE');
  const handleStronglyAgree = () => handleUserAnswer('STRONGLY_AGREE');
  const handleDisagree = () => handleUserAnswer('DISAGREE');
  const handleStronglyDisagree = () => handleUserAnswer('STRONGLY_DISAGREE');

  return (
    <ul id="ButtonPanel" className="button-panel-list">
      <li className="button-panel-list-item">
        <OptionButton onClick={handleStronglyAgree}>
          {lang === LANG.EN ? 'STRONGLY AGREE' : 'MUY DE ACUERDO'}
        </OptionButton>
      </li>
      <li className="button-panel-list-item">
        <OptionButton onClick={handleAgree}>
          {lang === LANG.EN ? 'AGREE' : 'DE ACUERDO'}
        </OptionButton>
      </li>
      <li className="button-panel-list-item">
        <OptionButton onClick={handleDisagree}>
          {lang === LANG.EN ? 'DISAGREE' : 'DESACUERDO'}
        </OptionButton>
      </li>
      <li className="button-panel-list-item">
        <OptionButton onClick={handleStronglyDisagree}>
          {lang === LANG.EN ? 'STRONGLY DISAGREE' : 'MUY EN DESACUERDO'}
        </OptionButton>
      </li>
    </ul>
  );
}

ButtonPanel.propTypes = {
  handleUserAnswer: PropTypes.func.isRequired,
};

export default ButtonPanel;
