import React from 'react'
import classnames from 'classnames'

export default function Burger({ onClick, isActive }) {
  const classes = classnames('navbar-burger', { 'is-active': isActive })
  return(
    <a
      data-target="navMenu"
      role="button"
      onClick={onClick}
      className={classes}
      aria-label="menu"
      aria-expanded="true"
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>)

}
