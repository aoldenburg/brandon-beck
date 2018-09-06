import React from 'react'
import { Main, Background } from '../../components'
import { Link } from 'react-router-dom'

import image from '../../static/brandon_football.jpg'
import './Home.css'

export default () => (
  <Background>
    <Main>
      <div className="home">
        <h2 className="homeHeader">The BLB Memorial Scholarship Fund</h2>
        <h3>Welcome to the Brandon Lee Beck Memorial Fund official website</h3>
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
