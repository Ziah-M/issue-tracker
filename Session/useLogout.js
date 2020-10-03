import { useContext } from 'react'
import { useHistory } from 'react-router'
import { FirebaseContext } from '../Firebase'
import { SIGN_IN } from '../routes'
import useAuthUser from './useAuthUser'

const useLogout = () => {
  const { authUser, setAuthUser } = useAuthUser()
  const firebase = useContext(FirebaseContext)
  const history = useHistory()

  const doLogout = () => {
    if (!authUser) {
      console.log('already logged out')
    }

    if (authUser && authUser.role.includes('DEMO')) {
      localStorage.setItem('auth-demoIsActive', 'false')
      setAuthUser(null)
    }

    if (authUser && !authUser.role.includes('DEMO')) {
      firebase.doSignOut()
    }

    history.push(SIGN_IN)
  }

  return doLogout
}

export default useLogout
