import React from 'react';
import PropTypes from 'prop-types';

import data from '../../../../data/locale';

function ExtraFeedback({ characterScore, lang, getDifference, isCloseTo, isLike, isFarFrom }) {
  const similarToExtraFeedback = getDifference(characterScore);

  return (
    <div className="extra-feedback">
      <p>
        {data[lang].postgame.youAre}
        <span className="extra-feedback__full-character-name">{isLike}</span>
      </p>
      <p>
        {data[lang].postgame.extraFeedbackLike}
        {similarToExtraFeedback[lang]}
        {isCloseTo}
        {data[lang].postgame.extraFeedbackUnLike}
        {isFarFrom}
      </p>
    </div>
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
