import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'

import { Background, Section } from '../components'

export default () => (
  <Background>
    <Section>
      <h1 className="title is-spaced has-text-primary has-text-centered is-size-1-desktop is-size-2-tablet is-size-3-mobile">Scholarship Information</h1>
    </Section>
    <Section className="has-background-primary has-text-white">
      <h1 className="title has-text-white is-size-3-tablet is-size-4-mobile">Prospective Applicants and Requirements</h1>
      <h2 className="is-size-4-desktop has-margin-b-2 has-text-white">Application Due Date: Friday December 7th</h2>
      <p>
        The Brandon Lee Beck Memorial Scholarship is open to varsity football students of Chandler High School. One Scholarship will be awarded to a current CHS Senior.
        Student must anticipate completion of high school diploma at end of current school year.
        Student must have a cumulative GPA of 3.0 or better at time of the application. Copy of transcript required.
        Student must have evidence of enrollment or acceptance to a two or four-year institution.
      </p>
    </Section>
    <Section className="">
      <h1 className="title has-text-primary">Application Documents</h1>
      <ul>
        <li className="is-size-4-desktop has-margin-b-2">
          <a className="has-text-color-link" download href="../../static/applicationInformation.pdf"><FontAwesomeIcon icon={faFileDownload} className="has-margin-r-1"/>Application Criteria</a>
        </li>
        <li className="is-size-4-desktop has-margin-b-2">
          <a className="has-text-color-link" download href="../../static/blbApplication.pdf"><FontAwesomeIcon icon={faFileDownload} className="has-margin-r-1"/>BLB Memorial Scholarship Fund Application</a>
        </li>
      </ul>
      <p>Any questions? Contact <a href="mailto:kris@brandonbeck.org">kris@brandonbeck.org</a>.</p>

    </Section>
  </Background>
)
