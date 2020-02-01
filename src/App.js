import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'


// page components
import * as Pages from './pages/pagesExporter.js'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render(){
    return(
      <Router class='container'>
        <Pages.Header />
        <Route />
      </Router>
    )
  }
}


export default App;
