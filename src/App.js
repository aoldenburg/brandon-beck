import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.scss'
import Nav from './components/Nav'
import { Home, BrandonsStory, Scholarship, EventTickets } from './pages'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav>
            <Link to='/'>Home</Link>
            <Link to='/brandons-story'>Brandon's Story</Link>
          </Nav>
          <Route exact path='/' component={Home} />
          <Route path='/brandons-story' component={BrandonsStory} />
          <Route path='/scholarship-info' component={Scholarship} />
          <Route path='/event-tickets' component={EventTickets} />
            </div>
      </Router>

    )
  }
}

export default App;
