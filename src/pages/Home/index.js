import React from 'react'
import { Main, Background, Section } from '../../components'
import { Link } from 'react-router-dom'

import image from '../../static/brandon_football.jpg'
import krisAndEric from '../../static/krisAndEric.jpeg'

export default () => (
  <Background>
    <Main>
      <Section className="hero-body has-text-centered is-shadowed">
        <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">The BLB Memorial Scholarship Fund</h1>
        <h2 className="subtitle">In Memory of Brandon Lee Beck</h2>
        <figure>
          <img src={image} alt="Brandon Lee Beck in his football uniform" />
          <div className="is-sr-only">
            <figcaption >{'Brandon Lee Beck, 09/09/1991 - 09/05/2010'}</figcaption>
          </div>
        </figure>
        <p className="hero-foot">
          The Brandon Lee Beck Memorial Scholarship Fund was created in honor of <Link to='/brandons-story'>Brandon Beck</Link>,
          and provides financial assistance to prospective college students from the Chandler High School football team who are looking to pursue higher education.
        </p>
      </Section>
      <Section className="has-background-primary has-text-white">
        <h1 className="title has-text-white">Our Mission Statement</h1>
        <p>
          Brandon Lee Beck Memorial Scholarship was created by Kris and Eric Oldenburg to empower high school student athletes to attend higher education by giving $3,400.00 each year.
          Brandon played organized sports for many years and some of our best family memories were spent watching him play and be successful in sports. The mission is to give $3,400.00 each year
          because Brandon's football jersey number was 34 and felt like a good place to start. In the coming years we hope to give more.
        </p>
        <br />

        <p>
          We feel organized athletic programs can play a vital role in a young man’s life. We want to support the leadership and camaraderie found on the football field. Our wish, as Brandon’s parents, was that he STAY in sports where the coaches and other athletes could be a positive influence. That did not happen and Brandon paid the ultimate price. If we can inspire, encourage, support, and touch the life of just ONE young man for a greater good then we have met our goal and accomplished our mission….
        </p>
      </Section>
      <Section>
        <h1 className="title">Who We Are</h1>
        <div className="columns is-centered">
          <img src={krisAndEric}
            style={{ margin: 'auto' }}
            alt="Kris and Eric Oldenburg, founders of BLB Memorial Scholarship Fund"
            className="column image is-rounded"
          />
          <p>
            The BLB Scholarship fund is ran by Kris and Eric Oldenburg to honor the life of Brandon Lee Beck, Kris's son. Since 2010, Kris and Eric have raised money to support Student Athletes from Brandon's high school, Chandler High School.
            Kris a registered flight nurse, former police officer, and Mom. Eric is a retired Phoenix police officer.
            Together they work to raise funding to empower student athletes to pursue higher education.
            Their main fundraising event is a barbeque hosted by the two, complete with delicious food, live music, and friendly faces.
          </p>
        </div>

      </Section>
      <Section className="has-background-primary has-text-white" >
        <h1 className="title has-text-white">Get Involved</h1>
        <div className="container">
          <p>
            Help us enable young adults continue their education by donating or attending one of our events. Annually, we host a fundraising barbeque with support from local businesses. If you own a business and would like to get involved, contact Kris
            at <a className="" href="mailto:kris@brandonbeck.org">kris@brandonbeck.org</a>.
          </p>
          <br />
          <p>
            The Brandon Lee Beck Memorial Scholarship fund is a 501c Non-Profit Organization (TAX ID #45-3603622). Proceeds from events and donations go towards paying out scholarships for former Chandler High School Students who attend university.
          </p>
        </div>
      </Section>
    </Main>
  </Background>)
