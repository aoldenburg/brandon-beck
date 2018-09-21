import React from 'react'
import classnames from 'classnames'

export default function Heading({ children, className, ...rest }) {
  const classes = classnames({ 'navbar-item': true}, className)
  return (<h1 className={classes}>{children}</h1>)
}
