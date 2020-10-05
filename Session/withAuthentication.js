import React, { useEffect, useState, useContext } from 'react'
import { withFirebase, FirebaseContext } from '../Firebase'
import AuthUserContext from './context'

const withAuthentication = (Component) => {
  const WithAuthentication = (props) => {
    const [authUser, setAuthUser] = useState(null)

    // this shouldn't change, therefore it should be a dependency
    // of the firebase onAuthUserListener effect
    const firebase = useContext(FirebaseContext)

    useEffect(() => {
      const demoIsActive = localStorage.getItem('auth-demoIsActive')
      if (demoIsActive) {
        setAuthUser({
          name: 'DEMO_ADMIN',
          email: 'DEMO@my-demo-portfolio.web.app',
          role: 'DEMO',
        })
      } else {
        props.firebase.onAuthUserListener(
          (user) => {
            if (user !== authUser) {
              setAuthUser(user)
            }
            setAuthUser(user)
          },
          () => {
            if (authUser !== null) {
              setAuthUser(null)
            }
          },
        )
      }
    }, [firebase])

    return (
      <AuthUserContext.Provider value={{ authUser, setAuthUser }}>
        <Component {...props} authUser={authUser} />
      </AuthUserContext.Provider>
    )
  }

  return withFirebase(WithAuthentication)
}

export default withAuthentication
