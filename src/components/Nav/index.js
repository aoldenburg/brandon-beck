import React from 'react';

import Bar from './Bar';
import Links from './Links';
import Link from './Link';
import Heading from './Heading';

export default function Nav(props) {
  return(
    <Bar>
      <Heading>The Brandon L. Beck Memorial Scholarship Fund</Heading>
      <Links>
        <Link to="/" exact>Home</Link>
        <Link to="/brandons-story">Brandon's Story</Link>
      </Links>
    </Bar>
  );
}
