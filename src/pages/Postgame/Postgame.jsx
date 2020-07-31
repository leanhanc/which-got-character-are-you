import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

// Components
import { Modal } from './components';
import { OptionButton } from '../../components';

// Helpers
import {
  calculateCharacterPositions,
  buildResultInfo,
  getFullCharacterInfo,
} from './Postgame.helpers';

// Locale
import data from '../../data/locale';

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
  const { fullName, alias } = getFullCharacterInfo(isCharacter);

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
      {isResultDataPresent && shouldShowModal && (
        <Modal>
          <div className="postgame-modal-character-profile">
            <div className="postgame-modal-character-profile__profile-container">
              <h2 className="postgame-modal-character-profile__full-name">{fullName}</h2>
              <figure>
                {characterProfilePic && (
                  <img
                    src={characterProfilePic}
                    alt={fullName}
                    className="postgame-modal-character-profile__pic"
                  />
                )}
                <figcaption className="postgame-modal-character-profile__caption">
                  {alias[lang]}
                </figcaption>
              </figure>
            </div>
            <div className="postgame-modal-character-profile__bio">
              {data[lang].character[isCharacter].bio}
            </div>
          </div>
          <blockquote className="postgame-modal-character-dixit">
            "{data[lang].character[isCharacter].dixit}"
          </blockquote>
          <OptionButton variant="secondary" onClick={closeModal}>
            CONTINUAR
          </OptionButton>
        </Modal>
      )}
    </div>
  );
}

Postgame.propTypes = {
  characterScore: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired,
};

export default Postgame;
