import React from 'react'

import twitterIcon from '../../static/twitter.png'
import facebookIcon from '../../static/facebook.png'

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
          <Heading className="is-hidden-tablet"><Link to="/">The BLB Memorial Scholarship Fund</Link></Heading>
          <a target="_blank" rel="noopener noreferrer" className="navbar-item is-hidden-mobile" href="https://twitter.com/BLBFund34"><img className="" src={twitterIcon} alt="BLB Twitter"/></a>
          <a target="_blank" rel="noopener noreferrer" className="navbar-item" href="https://facebook.com/BLB34"><img className="" src={facebookIcon} alt="BLB Twitter"/></a>
          <Burger onClick={this.handleClick} isActive={isActive} />
        </div>
        <Links isActive={isActive} >
          <Link to="/" exact>Home</Link>
          <Link to="/brandons-story">Brandon's Story</Link>
          <Link to="/scholarship-info">Scholarship Info</Link>
          <Link to="/event-tickets">Buy Tickets</Link>
          <a className="navbar-item" target="_blank" rel="noopener noreferrer" href="https://facebook.com/BLB34">Facebook Page</a>
          <a className="navbar-item has-text-weight-bold has-text-primary" target="_blank" rel="noopener noreferrer" href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=kris@brandonbeck.org&lc=US&item_name=Brandon+L.+Beck+Memorial+Scholarship&no_note=0&no_shipping=2&curency_code=USD&bn=PP-DonationsBF:btn_donateCC_LG.gif:NonHosted">Donate</a>
        </Links>
      </Bar>
    );
  }
}
