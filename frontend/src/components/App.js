import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Store from './Store'
import Profile from './Profile'

class App extends React.Component {
    render() {
      return (
        <Router>
            <Switch>
              <Route exact path='/' component={Store} />
              <Route exact path='/:username' component={Profile} />
            </Switch>
        </Router>
      )
    }
  }

export default App;