import { useContext, useEffect, useState } from 'react'
import AuthUserContext from './context'

const useAuthUser = () => {
  const { authUser, setAuthUser } = useContext(AuthUserContext)

  return { authUser, setAuthUser }
}

export default useAuthUser
