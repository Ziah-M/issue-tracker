import React from 'react'
import { Provider } from 'react-redux'
import styled from 'styled-components'
import App from './App'
import store from './redux/store'
import RouterSwitchSignedOut from './RouterSwitchSignedOut'
import { useAuthUser, withAuthentication } from './Session'

const Index = () => {
  const { authUser } = useAuthUser()

  return (
    <Wrapper>
      <Provider store={store}>
        {!authUser && <RouterSwitchSignedOut />}
        {authUser && <App />}
      </Provider>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: white;
`

export default withAuthentication(Index)
