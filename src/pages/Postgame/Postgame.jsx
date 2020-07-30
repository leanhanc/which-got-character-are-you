import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

// Helpers
import { calculateCharacterPositions, buildTextResult } from './Postgame.helpers';

// Styles
import './Postgame.css';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function Postgame({ characterScore, lang }) {
  // Local State
  const [mainResult, setMainResult] = useState('');
  const [resultExtraInfo, setResultExtraInfo] = useState('');

  // Refs
  const scoreRef = useRef(characterScore);
  const langRef = useRef(lang);

  // Helpers
  const shouldShowModal = mainResult && resultExtraInfo;

  // Effects
  useEffect(() => {
    const characterPositions = calculateCharacterPositions(scoreRef.current);
    const resultText = buildTextResult(characterPositions);

    setMainResult(resultText.main[langRef.current]);
    setResultExtraInfo(resultText.extra[langRef.current]);
  }, []);

  return (
    <div id="Postgame" className="postgame">
      <Modal
        isOpen={shouldShowModal}
        overlayClassName="postgame-modal-overlay"
        className="postgame-modal-content"
      >
        <h3>{mainResult}</h3>
        <h5>{resultExtraInfo}</h5>
      </Modal>
      <h1>POSTGAME PAGE</h1>
    </div>
  );
}

Postgame.propTypes = {
  characterScore: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired,
};

export default Postgame;
