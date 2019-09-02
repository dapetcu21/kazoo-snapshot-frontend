import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Collect from './Collect'
import Admin from './Admin'
import Display from './Display'

export default function App () {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Collect} />
        <Route path='/admin' exact component={Admin} />
        <Route path='/display' exact component={Display} />
      </Switch>
    </Router>
  )
}

