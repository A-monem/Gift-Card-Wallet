import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Profile from './Profile'

class App extends React.Component {
    render() {
      return (
        <Router>
            <Switch>
              <Route exact path='/:username' component={Profile} /> //route to Profile page
            </Switch>
        </Router>
      )
    }
  }

export default App;