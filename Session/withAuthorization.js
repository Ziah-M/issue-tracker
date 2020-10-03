import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { compose } from 'recompose'
import { withFirebase, FirebaseContext } from '../Firebase'
import * as ROUTES from '../routes'
import AuthUserContext from './context'

// condition is a callback function defined like:
// authUser => !!authUser
// authUser => !!authUser && !!authUser.role && authUser.role === 'ADMIN'
// authUser => !!authUser && !!authUser.permissions && !!authUser.permissions.canEditAccount

const withAuthorization = (condition) => (Component) => {
  const WithAuthorization = (props) => {
    const history = useHistory()
    const authUser = useContext(AuthUserContext)

    // If firebase auth changes, check condition again to force re-direct

    useEffect(() => {
      if (!authUser) {
        // is null
        history.push(ROUTES.SIGN_IN)
      } else if (!condition(authUser)) {
        console.log(
          'Restricted. You do not have the required permission to access this route.',
        )
      }
    }, [authUser, condition])

    return condition(authUser) ? <Component {...props} /> : <></>
  }

  return WithAuthorization
}

export default withAuthorization
