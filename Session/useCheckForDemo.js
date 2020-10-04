import { useState, useEffect } from 'react'
import { editUserRole } from '../redux/actions'
import useAuthUser from './useAuthUser'

const useCheckForDemo = () => {
  const { authUser } = useAuthUser()
  const [isDemo, setIsDemo] = useState(true)

  useEffect(() => {
    if (!authUser) {
      setIsDemo(true)
    }

    if (authUser) {
      if (authUser.role) {
        if (!authUser.role.includes('DEMO')) {
          setIsDemo(false)
        } else {
          setIsDemo(true)
        }
      } else {
        setIsDemo(true)
      }
    }
  }, [authUser])

  return isDemo
}

export default useCheckForDemo
