import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import { Home, BrandonsStory } from './pages';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav>
            <Link to='/'>Home</Link>
            <Link to='/brandons-story'>Brandon's Story</Link>
          </Nav>
          <Route path='/' component={Home} />
          <Route path='/brandons-story' component={BrandonsStory} />
        </div>
      </Router>

    )
  }
}

export default App;
