import React from 'react';
import PropTypes from 'prop-types';

export default function Background({children, ...rest}) {
  return (<div className="has-background-dark" {...rest}>{children}</div>)
}

Background.propTypes = {
  children: PropTypes.node,
}
