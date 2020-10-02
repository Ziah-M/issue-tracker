import { useContext } from 'react'
import AuthUserContext from './context'

const useAuthUser = () => {
  const authUser = useContext(AuthUserContext)
  return authUser
}

export default useAuthUser
