import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FirebaseContext } from '../../Firebase'
import useFirebaseActions from '../../redux/useFirebaseActions'

const Home = (props) => {
  const firebase = useContext(FirebaseContext)

  const tickets = useSelector((store) => store.tickets)

  const dispatch = useDispatch()
  const { addTicket } = useFirebaseActions()

  const handleClick = () => {
    dispatch(
      addTicket({
        title: 'THIS IS A REDUX TICKET',
        description: 'THIS IS A TEST',
      }),
    )
  }

  return (
    <div>
      <button onClick={handleClick}>Create Test Ticket</button>
      <br />
      {tickets && JSON.stringify(tickets)}
    </div>
  )
}

export default Home
