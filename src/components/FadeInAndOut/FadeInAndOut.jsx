import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

function FadeInAndOut({ children, duration, shouldShow }) {
  const [render, setRender] = useState(shouldShow);

  useEffect(() => {
    if (shouldShow) setRender(true);
  }, [shouldShow]);

  const onAnimationEnd = () => {
    if (!shouldShow) setRender(false);
  };

  const animationStyle = useMemo(() => {
    return { animation: `${shouldShow ? 'fadeIn' : 'fadeOut'} ${duration}s` };
  }, [duration, shouldShow]);

  return (
    render && (
      <div style={animationStyle} onAnimationEnd={onAnimationEnd}>
        {children}
      </div>
    )
  );
}

export default FadeInAndOut;

FadeInAndOut.propTypes = {
  children: PropTypes.node.isRequired,
  duration: PropTypes.number,
  shouldShow: PropTypes.bool.isRequired,
};

FadeInAndOut.defaultProps = {
  duration: 1,
};
