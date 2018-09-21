import React from 'react';
import { NavLink as Link } from 'react-router-dom';

export default function NavLink(props) {
  return (<Link className="navbar-item" {...props} />)
}
