import React, { useContext } from 'react'

// HOC to inject the firebase singleton from context as a prop

const FirebaseContext = React.createContext(null)

export const withFirebase = (Component) => (props) => (
  <FirebaseContext.Consumer>
    {(firebase) => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
)

export const useFirebase = () => {
  const firebase = useContext(FirebaseContext)
  return firebase
}

export default FirebaseContext
