import { useContext, useEffect, useState } from 'react'
import { FirebaseContext } from '../../Firebase'

const useUpdate = () => {
  const [updateDetails, setUpdateDetails] = useState({})
  const firebase = useContext(FirebaseContext)

  const update = (path = '', newData = {}) => {
    if (!!path && !!newData) {
      setUpdateDetails({
        path,
        data: newData,
      })
    } else {
      console.log('Update failed: Did not provide a valid path or any data')
    }
  }

  useEffect(() => {
    const { path, data } = updateDetails

    if (!!path && !!data) {
      firebase.ref(path).update(updateDetails.data)
    }
  }, [updateDetails])

  return update
}

export default useUpdate
