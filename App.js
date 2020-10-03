import React, { useState } from 'react'
import styled from 'styled-components'
import { AddTicketModal, Navbar, Sidebar } from './Components'
import { useFirebaseListener } from './Hooks'
import useActivateDemo from './Hooks/useActivateDemo'
import RouterSwitch from './RouterSwitch'

const App = () => {
  const [showAddTicket, setShowAddTicket] = useState(false)
  const handleCloseAddTicket = () => setShowAddTicket(false)
  const handleShowAddTicket = () => setShowAddTicket(true)

  useActivateDemo()
  useFirebaseListener()

  return (
    <Wrapper>
      <Sidebar />
      <Inner>
        <Navbar setShowAddTicket={handleShowAddTicket} />
        <RouterSwitch />
      </Inner>
      <AddTicketModal
        show={showAddTicket}
        handleShow={handleShowAddTicket}
        handleClose={handleCloseAddTicket}
        isEdit={false}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;

  display: flex;
`

const Inner = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  flex-direction: column;
`

export default App
