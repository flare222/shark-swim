import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './styles/main.scss'

import Nav from './common/Nav'
import Home from './common/Home'
import SharkIndex from './sharks/SharkIndex'
import SharkShow from './sharks/SharkShow'
import SharkFact from './sharks/SharkFact'
import Login from './auth/Login'
import Register from './auth/Register'

const App = () => (
  <section>
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sharks" component={SharkIndex} />
        <Route path="/sharks/:id" component={SharkShow} />
        <Route path="/facts" component={SharkFact} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  </section>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
