import React from 'react';

// Components
import { OptionButton } from '../../../../components';

// Styles
import './ButtonPanel.css';

function ButtonPanel(props) {
  return (
    <ul id="ButtonPanel" className="button-panel-list">
      <li className="button-panel-list-item">
        <OptionButton>MUY DE ACUERDO</OptionButton>
      </li>
      <li className="button-panel-list-item">
        <OptionButton> DE ACUERDO</OptionButton>
      </li>
      <li className="button-panel-list-item">
        <OptionButton> DESACUERDO</OptionButton>
      </li>
      <li className="button-panel-list-item">
        <OptionButton> MUY EN DESACUERDO</OptionButton>
      </li>
    </ul>
  );
}

ButtonPanel.propTypes = {};

export default ButtonPanel;
