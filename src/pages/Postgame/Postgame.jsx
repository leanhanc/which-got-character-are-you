import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

// Helpers
import { calculateCharacterPositions, buildTextResult } from './Postgame.helpers';

// Styles
import './Postgame.css';

function Postgame({ characterScore, lang }) {
  // Local State
  const [mainResult, setMainResult] = useState('');
  const [resultExtraInfo, setResultExtraInfo] = useState('');

  // Refs
  const scoreRef = useRef(characterScore);
  const langRef = useRef(lang);

  // Effects
  useEffect(() => {
    const characterPositions = calculateCharacterPositions(scoreRef.current);
    const resultText = buildTextResult(characterPositions);

    setMainResult(resultText.main[langRef.current]);
    setResultExtraInfo(resultText.extra[langRef.current]);
  }, []);

  return (
    <div id="Postgame" className="postgame">
      <h1>POSTGAME PAGE</h1>
      <h3>{mainResult}</h3>
      <h5>{resultExtraInfo}</h5>
    </div>
  );
}

Postgame.propTypes = {
  characterScore: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired,
};

export default Postgame;
