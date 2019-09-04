import React from 'react'

import { Background, Section } from '../components'

import img from '../static/bbq.jpg'
import style from "./EventTickets.css";

export default () => (
    <Background>
        <Section>
            <h1 className="title is-spaced has-text-primary has-text-centered is-size-1-desktop is-size-2-tablet is-size-3-mobile">Events and Updates</h1>
        </Section>
        <Section className="has-background-primary has-text-white">
            <h1 className="title has-text-white is-size-3-tablet is-size-4-mobile">Save the Date!!</h1>
            <p>
                April 3rd through April 5th the Brandon Lee Beck Memorial Scholarship Fund will be hosting a weekend of
                fun farm and family activities!! Last year's Goat Comedy was a big success, and will be returning!
                <span aria-label="goat with comedy and tragedy mask" role="img">🐐🎭</span>
            </p>
            <br/>
            <p>
                Additionally, we'll be debuting a new event, Goat YOGA <span role="img" aria-label="man and women doing yoga with a goat">🧘‍♂️🐐🧘‍♀️</span>. Details forthcoming!
            </p>
            <br />
            <p>
                Finally, the always popular BBQ Farm Day and Raffle will be held instead of in November! 🐔🐷🥧🍴🏈🎪
            </p>
        </Section>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', background: '#002892'}}><img className={style.heroImage} src={img} alt="The BLB Annual Fundraising Barbeque" /></div>
    </Background>
)
