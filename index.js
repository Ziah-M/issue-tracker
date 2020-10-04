import React, { useState, useEffect } from 'react'
import { Provider } from 'react-redux'
import App from './App'
import store from './redux/store'
import { useAuthUser, withAuthentication } from './Session'
import { SignIn } from './Pages'
import RouterSwitchSignedOut from './RouterSwitchSignedOut'

const Index = () => {
  const { authUser } = useAuthUser()

  console.log('AUTH USER IN INDEX: ', authUser)

  return (
    <Provider store={store}>
      {!authUser && <RouterSwitchSignedOut />}
      {authUser && <App />}
    </Provider>
  )
}

export default withAuthentication(Index)
