import React from 'react'
import classnames from 'classnames'

export default function Section({ children, className, ...rest }) {
  const classes = classnames('section', className)
  return(
    <section className={classes}>
      <div className="container">
        {children}
      </div>
    </section>
  )
}
