import React from 'react';
import classnames from 'classnames'

export default function Links({ isActive, ...rest }) {
  const classes = classnames('navbar-menu', { 'is-active': isActive })
  return(
    <div className={classes} id="navMenu">
      <ul {...rest} className="navbar-end" />
    </div>
  );
}
