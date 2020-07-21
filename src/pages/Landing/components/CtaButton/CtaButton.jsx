import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

// Enums
import { LANG } from '../../../../utils/enums';

// Styles
import './CtaButton.css';

function CtaButton({ lang }) {
  // Effects
  useLayoutEffect(() => {
    // If running on a touchscreen trigger animation automatically
    if (window.matchMedia('(pointer: coarse)').matches) {
      setInterval(() => document.getElementById('cta-button').classList.toggle('hover'), 2000);
    }
  });

  return (
    <button id="cta-button" className="cta-button">
      {lang === LANG.EN ? 'START' : 'COMENZAR'}
    </button>
  );
}

CtaButton.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default CtaButton;
