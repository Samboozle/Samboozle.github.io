import React from 'react';

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import {
  Container
} from 'react-bootstrap'

import aboutme from './content/aboutme'
import * as F from './content/xporter'

// page components
import * as Pages from './pages/xporter.js'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      aboutText: aboutme,
      button: false,
      clicked: false,
      sillyDispatcher: [
        F.piglatin,
        F.sillycase,
        F.ubbydubby,
        F.enigma
      ]
    }
  }

  handleClick = () => {
    let { aboutText, clicked, sillyDispatcher } = this.state
    this.setState({
      aboutText: clicked ? aboutme : sillyDispatcher[Math.floor(Math.random() * sillyDispatcher.length)](aboutText),
      clicked: !clicked
    })
  }

  aWildButtonAppears = () => {
    setTimeout(() => this.setState({button: true}), 8400)
  }

  render(){
    return(
      <Router>
        <Pages.Header />
        <Container>
          <Switch>
            <Route 
              exact path='/'
              render={() => <Redirect to='/about' />}
            />
            <Route
              exact path='/about'
              render={() => {
                return(
                  <Pages.About 
                    aboutText={this.state.aboutText} 
                    handleClick={this.handleClick}
                    aWildButtonAppears={this.aWildButtonAppears}
                    button={this.state.button}
                  />
                )
              }}
            />
            <Route
              exact path='/skills'
              component={Pages.Skills}
            />
          </Switch>
        </Container>
        <Pages.Footer />
      </Router>
    )
  }
}


export default App;
