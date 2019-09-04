import React from 'react'

import { Background, Main, Section } from '../components'
import Brandon from '../static/brandon.jpg'

export default () => (
  <Background>
    <Main>
      <Section className="hero-body has-white-background is-shadowed">
        <h1 className="title is-spaced has-text-centered is-size-1-desktop is-size-2-tablet is-size-3-mobile">Brandon's Story</h1>
        <div className="has-text-centered">
          <img src={Brandon} alt="Brandon Beck" />
          <figcaption className="has-text-primary has-text-centered">Brandon Lee Beck 9/9/1991 – 9/5/2010</figcaption>
        </div>
        <p>
          Brandon was a brother, a son, a grandson, a team mate and a kid with a big blue eyes and a contagious smile. Brandon’s life was cut short when he was shot and killed in a senseless act of violence on September 5th in Chandler Arizona. It was Labor Day weekend and he was at a party, one of those parties people send out texts about and a lot of people who don’t really know each other show up. Sometime towards the end of the party there was an argument between the host of the party and a group of kids who believed they had paid the host for the keg that was bought. The kids decide to take the keg when they were being thrown out of the party. Several people were arguing and fighting when the host and another man pulled out guns. The host, a coward named Dominic Flores, shot Brandon and then shot the other man. Brandon was not armed and collapsed in the street after being fatally wounded in the chest. Brandon died on the way to the hospital, just 4 days before his 19th birthday.
        </p>
        <br />
        <p>
          Flores claimed self defense, due to the fact he was threatened by the OTHER man with a gun, and NO charges were filed against him. The police claimed the kids involved were gang members and charged 8 of them with armed robbery. The case is still pending trial.
        </p>
        <br />
        <p>
          Our family has been devastated and victimized by the LACK of justice in this case….But, I have decided to focus on Brandon’s life, not the way he died. To honor him I have created the BLB Memorial Scholarship Fund to support high school football players. Brandon was a good player and he loved football, he would liked to have played in college. So, if our family can help other young men play instead..I think Brandon would think that was “cool.”
        </p>
      </Section>
    </Main>
  </Background>
)
