import React from 'react'
import { Route, Switch } from 'react-router-dom'
import * as P from './Pages'
import * as R from './routes.js'

const RouterSwitch = ({ location }) => (
  <Switch location={location}>
    <Route path={R.SIGN_IN} component={P.SignIn} />
    <Route path={R.SIGN_UP} component={P.SignUp} />
    <Route path={R.LANDING} component={P.SignIn} />
  </Switch>
)

export default RouterSwitch
