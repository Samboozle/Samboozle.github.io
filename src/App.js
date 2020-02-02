import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import {
  Container
} from 'react-bootstrap'

// page components
import * as Pages from './pages/xporter.js'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render(){
    return(
      <Router>
        <Pages.Header />
        <Container>
          <Switch>
            <Route 
              exact path='/'
              component={Pages.Home}
            />
            <Route
              exact path='/about'
              component={Pages.About}
            />
            <Route
              exact path='/skills'
              component={Pages.Skills}
            />
          </Switch>
        </Container>
      </Router>
    )
  }
}


export default App;
