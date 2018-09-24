import React from 'react'

import { Background, Main, Section } from '../components'
import Barbeque from '../static/bbq.jpg'

function loadWidget() {
    window.EBWidgets.createWidget({
    widgetType: 'checkout',
    eventId: '49861458966',
    modal: true,
    modalTriggerElementId: 'eventbrite-widget-modal-trigger-49861458966',
    onOrderComplete: () => console.log('Hello memes')
  });}
export default () => (
  <Background>
    <Main>
      <div className="container">
        <h1 className="title has-text-primary has-text-centered is-shadowed">The Brandon Lee Beck Annual Barbeque</h1>
        <img className="image" src={Barbeque} alt="The BLB Annual Fundraising Barbeque"></img>
      </div>

      <Section className="has-background-primary has-text-white">
        <h1 className="title has-text-white">About the Event</h1>
        <p>
          The Brandon Lee Beck Annual Barbeque is the largest fundraising event for the Scholarship Fund. Generally hosted once a year in November, the event includes delicious Barbeque food, live music, games, raffles, and more.
          Event tickets are $10 per person, and includes a meal. All proceeds benefit the Brandon Lee Beck Scholarship Fund.
        </p>
      </Section>
      <Section className="">
        <h1 className="title has-text-primary">Buying Tickets</h1>
        <p>
          Tickets are available for purchase at the front of the event, or available for prepurchase online. Click the button below to purchase tickets using EventBrite!
        </p>
        <br />
        <div className="columns is-centered">
          <button className="button is-centered is-large is-primary" onClick={loadWidget}>Purchase Tickets</button>
        </div>
      </Section>
    </Main>
  </Background>
)
