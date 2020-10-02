import { useState, useEffect } from 'react'
import useAuthUser from './useAuthUser'

const useCheckForDemo = () => {
  const authUser = useAuthUser()
  const [isDemo, setIsDemo] = useState(true)

  useEffect(() => {
    if (!authUser) {
      setIsDemo(true)
    }

    if (authUser) {
      if (authUser.role === 'DEMO') {
        setIsDemo(true)
      }

      if (authUser.role !== 'DEMO') {
        setIsDemo(false)
      }
    }
  }, [authUser])

  return isDemo
}

export default useCheckForDemo
