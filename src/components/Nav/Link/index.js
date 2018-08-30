import React from 'react';
import { NavLink as Link } from 'react-router-dom';

import './Link.css';

export default function NavLink(props) {
  return (<li className="linkListItem"><Link className="link" {...props} activeClassName="active" /></li>)
}
