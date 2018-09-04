import React from 'react';
import PropTypes from 'prop-types';

import './Background.css'

export default function Background({children, ...rest}) {
  return (<div className="background" {...rest}>{children}</div>)
}

Background.propTypes = {
  children: PropTypes.node,
}
