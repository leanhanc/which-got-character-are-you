import React from 'react';
import PropTypes from 'prop-types';

// Locale
import data from '../../../../data/locale';

// Components
import { OptionButton } from '../../../../components';

function CharacterProfile({ characterProfilePic, fullName, alias, lang, isCharacter, closeModal }) {
  return (
    <>
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
        <div
          className="postgame-modal-character-profile__bio"
          dangerouslySetInnerHTML={{ __html: data[lang].character[isCharacter].bio }}
        />
      </div>
      <blockquote className="postgame-modal-character-dixit">
        "{data[lang].character[isCharacter].dixit}"
      </blockquote>
      <OptionButton variant="secondary" onClick={closeModal}>
        CONTINUAR
      </OptionButton>
    </>
  );
}

CharacterProfile.propTypes = {
  alias: PropTypes.object.isRequired,
  characterProfilePic: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  fullName: PropTypes.string.isRequired,
  isCharacter: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
};

export default CharacterProfile;
