import React from 'react';

import Bar from './Bar';
import Links from './Links';
import Link from './Link';

export default function Nav(props) {
  return(
    <Bar>
      <Links>
        <li><Link to="/" exact>Home</Link></li>
        <li><Link to="/brandons-story">Brandon's Story</Link></li>
      </Links>
    </Bar>
  );
}
