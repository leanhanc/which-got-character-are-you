import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

// Components
import { CharacterProfile, Modal, ExtraFeedback } from './components';

// Helpers
import {
  calculateCharacterPositions,
  buildResultInfo,
  getDifference,
  getFullCharacterInfo,
} from './Postgame.helpers';

// Styles
import './Postgame.css';

function Postgame({ characterScore, lang }) {
  // Local State
  const [shouldShowModal, setShouldShowModal] = useState(true);
  const [isCharacter, setIsCharacter] = useState('');
  const [isCloseTo, setIsCloseTo] = useState('');
  const [isFarFrom, setIsFarFrom] = useState('');
  const [characterProfilePic, setCharacterProfilePic] = useState('');

  // Refs
  const scoreRef = useRef(characterScore);

  // Helpers
  const isResultDataPresent = Boolean(isCharacter && isCloseTo && isFarFrom);
  const { fullName: isLikeFullCharacterName, alias } = getFullCharacterInfo(isCharacter);
  const { fullName: isCloseToFullCharacterName } = getFullCharacterInfo(isCloseTo);
  const { fullName: isFarFromFullCharacterName } = getFullCharacterInfo(isFarFrom);

  // Handlers
  const closeModal = () => setShouldShowModal(false);

  // Effects
  useEffect(() => {
    const characterPositions = calculateCharacterPositions(scoreRef.current);
    const { farFrom, isLike, closeTo } = buildResultInfo(characterPositions);

    setIsCharacter(isLike);
    setIsCloseTo(closeTo);
    setIsFarFrom(farFrom);
    import(`../../assets/images/${isLike}.jpg`).then((pic) => setCharacterProfilePic(pic.default));
  }, []);

  return (
    <div id="Postgame" className="postgame">
      <ExtraFeedback
        characterScore={characterScore}
        getDifference={getDifference}
        isCloseTo={isCloseToFullCharacterName}
        isFarFrom={isFarFromFullCharacterName}
        isLike={isLikeFullCharacterName}
        lang={lang}
      />
      <Modal
        isModalOpen={isResultDataPresent && shouldShowModal}
        setIsModalOpen={setShouldShowModal}
      >
        <CharacterProfile
          alias={alias}
          characterProfilePic={characterProfilePic}
          closeModal={closeModal}
          fullName={isLikeFullCharacterName}
          isCharacter={isCharacter}
          lang={lang}
        />
      </Modal>
    </div>
  );
}

Postgame.propTypes = {
  characterScore: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired,
};

export default Postgame;
