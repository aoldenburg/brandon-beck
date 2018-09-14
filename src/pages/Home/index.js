import React from 'react'
import { Main, Background } from '../../components'
import { Link } from 'react-router-dom'

import image from '../../static/brandon_football.jpg'
import twitterIcon from '../../static/twitter.png'
import facebookIcon from '../../static/facebook.png'

import './Home.css'

export default () => (
  <Background>
    <Main>
      <div className="home">
        <h2 className="homeHeader">The BLB Memorial Scholarship Fund</h2>
        <h3>A scholarship fund for Chandler High School football players</h3>
        <div>
          <a target="_blank" href="https://twitter.com/2angels2here"><img className="socialMediaIcon" src={twitterIcon} alt="BLB Twitter"/></a>
          <a target="_blank" href="https://facebook.com/BLB34"><img className="socialMediaIcon" src={facebookIcon} alt="BLB Twitter"/></a>
        </div>


        <figure>
          <img className="homeImage" src={image} alt="Brandon L Beck in his football uniform" />
          <figcaption style={ {textAlign: 'center'}}>{'Brandon Lee Beck, 09/09/1991 - 09/05/2010'}</figcaption>
        </figure>
        <p>
          The Brandon Lee Beck Memorial Scholarship Fund was created in honor of <Link to='/brandons-story'>Brandon Beck</Link>,
          and provides financial assistance to prospective college students from the Chandler High School football team who are looking to pursue higher education.


        </p>
      </div>
    </Main>
  </Background>)
