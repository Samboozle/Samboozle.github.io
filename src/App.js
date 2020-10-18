import React from 'react';

import { 
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Container from 'react-bootstrap/Container';

// my bio
import { aboutMe } from './content';

// silly text logic imports
import * as F from './textManip';

// page components
import * as C from './components';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      aboutText: aboutMe,
      showButton: false,
      clicked: false,
      sillyDispatcher: [
        F.piglatin,
        F.sillycase,
        F.ubbydubby,
        F.enigma,
        F.binaryText
      ]
    }
  }

  handleClick = () => {
    let { aboutText, clicked, sillyDispatcher } = this.state;
    this.setState({
      aboutText: clicked ? aboutMe : sillyDispatcher[Math.floor(Math.random() * sillyDispatcher.length)](aboutText),
      clicked: !clicked
    });
  }

  aWildButtonAppears = () => {
    setTimeout(() => this.setState({ showButton: true }), 5000);
  }

  render(){
    return (
      <Router basename='/portfolio'>
        <C.Header />
        <Container fluid style={{ width: '85%', paddingBottom: '5%' }}>
          <Switch>
            <Route 
              exact path='/'
              render={() => <Redirect to='/about' />}
            />
            <Route
              path='/about'
              render={() => {
                return(
                  <C.About 
                    aboutText={ this.state.aboutText } 
                    handleClick={ this.handleClick }
                    aWildButtonAppears={ this.aWildButtonAppears }
                    showButton={ this.state.showButton }
                  />
                );
              }}
            />
            <Route
              path='/skills'
              component={ C.Skills }
            />
            <Route
              path='/projects'
              component={ C.Projects }
            />
          </Switch>
        </Container>
        <C.Footer />
      </Router>
    );
  }
}

export default App;
