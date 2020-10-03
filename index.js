import React, { useState, useEffect } from 'react'
import { Provider } from 'react-redux'
import App from './App'
import store from './redux/store'
import { useAuthUser, withAuthentication } from './Session'
import { SignIn } from './Pages'

const Index = () => {
  const { authUser } = useAuthUser()

  console.log('AUTH USER IN INDEX: ', authUser)

  return (
    <Provider store={store}>
      {!authUser && <SignIn />}
      {authUser && <App />}
    </Provider>
  )
}

export default withAuthentication(Index)
