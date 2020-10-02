import { useContext, useEffect, useState } from 'react'
import { FirebaseContext } from '../../Firebase'

// Returns SPECIFIC child of (id) found at (path) in the database

const useList = (path = '', id = '') => {
  const [data, setData] = useState({})
  const firebase = useContext(FirebaseContext)

  const fullPath = `${path}/${id}`

  useEffect(() => {
    firebase.ref(fullPath).on('value', (snapshot) => {
      const newData = { ...snapshot.val(), uid: snapshot.key }
      setData(newData)
    })

    return () => firebase.ref(fullPath).off()
  }, [])

  return data
}

export default useList
