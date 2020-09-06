import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

// Hooks
import { useNavigate } from 'react-router-dom';

// Components
import { CharacterProfile, Modal, ExtraFeedback, NavButtons } from './components';

// Helpers
import {
  calculateCharacterPositions,
  buildResultInfo,
  getDifference,
  getFullCharacterInfo,
} from './Postgame.helpers';

// Actions
import { gameActions } from '../../reducers/game';

// Locale
import data from '../../data/locale';

// Styles
import './Postgame.css';

function Postgame({ characterScore, lang, gameStateHandler }) {
  // Hooks
  const navigate = useNavigate();

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

  const restartGame = () => {
    gameStateHandler({ type: gameActions.RESET });
    navigate('/game');
  };

  const shareInTwitter = () => {
    const p1 = encodeURIComponent(data[lang].postgame.shareP1);
    const p2 = encodeURIComponent(data[lang].postgame.shareP2);
    const p3 = window.location.origin;

    const twitterWindow = window.open(
      `https://twitter.com/intent/tweet?text=${p1}${isLikeFullCharacterName}${p2}${p3}`,
    );

    if (twitterWindow.focus) {
      twitterWindow.focus();
    }
  };

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
    <section id="Postgame" className="postgame fade-in">
      {!shouldShowModal && (
        <ExtraFeedback
          characterScore={characterScore}
          getDifference={getDifference}
          isCloseTo={isCloseToFullCharacterName}
          isFarFrom={isFarFromFullCharacterName}
          isLike={isLikeFullCharacterName}
          lang={lang}
        />
      )}
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
      {!shouldShowModal && (
        <NavButtons lang={lang} restartGame={restartGame} share={shareInTwitter} />
      )}
    </section>
  );
}

Postgame.propTypes = {
  characterScore: PropTypes.object.isRequired,
  gameStateHandler: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
};

export default Postgame;
