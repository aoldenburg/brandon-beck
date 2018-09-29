import React from 'react';
import PropTypes from 'prop-types';

export default function Background({children, ...rest}) {
  return (<div className="has-background-white" {...rest}>{children}</div>)
}

Background.propTypes = {
  children: PropTypes.node,
}
