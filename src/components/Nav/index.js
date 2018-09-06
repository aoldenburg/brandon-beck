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
        <Link to="/scholarship-info">Scholarship Info</Link>
        <Link to="/fundraising">Fundraising</Link>
        <a className="link" target="_blank" rel="noopener noreferrer" href="https://facebook.com/BLB34">Facebook Page</a>
        <a className="link" target="_blank" rel="noopener noreferrer" href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=kris@brandonbeck.org&lc=US&item_name=Brandon+L.+Beck+Memorial+Scholarship&no_note=0&no_shipping=2&curency_code=USD&bn=PP-DonationsBF:btn_donateCC_LG.gif:NonHosted">Donate</a>

      </Links>
    </Bar>
  );
}
