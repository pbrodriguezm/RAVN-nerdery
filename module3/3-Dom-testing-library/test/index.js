import React from 'react';
import PropTypes from 'prop-types';

function Button({ disabled, type, children }) {
  const classes = type ? `button__${type}` : '';
  return (
    <button className={`button ${classes}`} disabled={disabled}>
      {children}
    </button>
  );
}

Button.propTypes = {
  PropTypes.oneOf(['primary', 'secondary'])
}

export default Button;