import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTicketAlt, faFileInvoice, faHome, faFootballBall, faBullhorn} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faPaypal, faTwitter } from '@fortawesome/free-brands-svg-icons'

import Bar from './Bar'
import Links from './Links'
import Link from './Link'
import Heading from './Heading'
import Burger from './Burger'

export default class Nav extends React.Component {
  state = {
    isActive: false,
  }
  handleClick = () => this.setState({ isActive: !this.state.isActive })
  render() {
    const { isActive } = this.state;
    return(
      <Bar>
        <div className="navbar-brand">
          <Heading className="is-hidden-mobile"><Link to="/">The Brandon Lee Beck Memorial Scholarship Fund</Link></Heading>
          <Heading className="is-hidden-tablet"><Link to="/">The BLB Scholarship Fund</Link></Heading>
          {/* <a target="_blank" rel="noopener noreferrer" className="navbar-item is-hidden-mobile" href="https://facebook.com/BLB34"><img className="" src={faceboo} alt="BLB Twitter"/></a> */}
          <Burger onClick={this.handleClick} isActive={isActive} />
        </div>
        <Links isActive={isActive} >
          <Link to="/" exact><FontAwesomeIcon icon={faHome} className="has-margin-r-1"/>Home</Link>
          <Link to="/brandons-story"><FontAwesomeIcon icon={faFootballBall} className="has-margin-r-1"/>Brandon's Story</Link>
          <Link to="/scholarship-info"><FontAwesomeIcon icon={faFileInvoice} className="has-margin-r-1"/>Scholarship Info</Link>
          <Link to="/updates"><FontAwesomeIcon icon={faBullhorn} className="has-margin-r-1" />Updates</Link>
          <a className="navbar-item" target="_blank" rel="noopener noreferrer" href="https://twitter.com/BLBFund34"><FontAwesomeIcon className="has-text-link has-margin-r-1" icon={faTwitter}/>Twitter</a>
          <a className="navbar-item" target="_blank" rel="noopener noreferrer" href="https://facebook.com/BLB34"><FontAwesomeIcon className="has-text-link has-margin-r-1" icon={faFacebook} />Facebook Page</a>
          <a
            className="navbar-item has-text-weight-bold has-text-primary"
            target="_blank" rel="noopener noreferrer"
            href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=kris@brandonbeck.org&lc=US&item_name=Brandon+L.+Beck+Memorial+Scholarship&no_note=0&no_shipping=2&curency_code=USD&bn=PP-DonationsBF:btn_donateCC_LG.gif:NonHosted"
          >
            <FontAwesomeIcon icon={faPaypal} className="has-margin-r-1"/>
            Donate
          </a>
        </Links>
      </Bar>
    );
  }
}
