import React from 'react';
import PropTypes from 'prop-types';

// Locale
import data from '../../../../data/locale';

// Styles
import './ExtraFeedback.css';

function ExtraFeedback({ characterScore, lang, getDifference, isCloseTo, isLike, isFarFrom }) {
  const similarToExtraFeedback = getDifference(characterScore);

  return (
    <section className="extra-feedback">
      <header>
        <h3 className="extra-feedback__header">GAME OF THRONES</h3>
      </header>
      <p className="extra-feedback__youAre">
        {data[lang].postgame.youAre}
        <span className="extra-feedback__full-character-name">{isLike}</span>
      </p>
      <p className="extra-feedback__extraInfo">
        {data[lang].postgame.extraFeedbackLike}
        {similarToExtraFeedback[lang]}
        <span className="extra-feedback__extraInfoName">{isCloseTo}</span>
        {data[lang].postgame.extraFeedbackUnLike}
        <span className="extra-feedback__extraInfoName">{isFarFrom}</span>
      </p>
    </section>
  );
}

ExtraFeedback.propTypes = {
  characterScore: PropTypes.object.isRequired,
  getDifference: PropTypes.func.isRequired,
  isCloseTo: PropTypes.string.isRequired,
  isLike: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
};

export default ExtraFeedback;
