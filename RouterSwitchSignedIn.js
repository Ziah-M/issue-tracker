import React from 'react'
import { Route, Switch } from 'react-router-dom'
import * as P from './Pages'
import * as R from './routes.js'

const RouterSwitch = ({ location }) => (
  <Switch location={location}>
    <Route path={R.USER_PROFILE} component={P.UserProfile} />
    <Route path={R.MY_TICKETS} component={P.MyTickets} />
    <Route path={R.TICKET} component={P.Ticket} />
    <Route path={R.PROJECT} component={P.Project} />
    <Route path={R.MY_PROJECTS} component={P.MyProjects} />
    <Route path={R.MANAGE_USERS} component={P.ManageUsers} />
    <Route path={R.MANAGE_ROLES} component={P.ManageRoles} />
    <Route path={R.LANDING} component={P.Dashboard} />
  </Switch>
)

export default RouterSwitch
